<script lang="ts">
  import { Bloom, Hyperbloom, Burgeon, Burning, Shattered } from '$lib/icons';

  import Cell from './Cell.svelte';
  import StatImage from '../Desktop/StatImage.svelte';

  export let data: any;

  const reactions = {
    bloom: Bloom,
    hyperbloom: Hyperbloom,
    burgeon: Burgeon,
    burning: Burning,
    shattered: Shattered
  };

  $: damage = Math.floor(data.damage[data.damageBonus]).toLocaleString();
  $: console.log(data.name, data);
  $: icon = data.damageBonus as keyof typeof reactions;
</script>

<div class="grid grid-cols-20 p-1 text-tb">
  <Cell align="start" col="col-span-2 ">
    <svelte:component this={reactions[icon]} class="w-4" />
  </Cell>
  <Cell align="start" col="col-span-10 text-slate-400" value={data.name} />
  <Cell align="center" col="col-span-2">
    <div class="h-5 w-5">
      <StatImage stat={data.elemental} />
    </div>
  </Cell>
  <!-- <Cell align="end" col="col-span-4 text-slate-400" value={nonCritDMG.toFixed(0)} /> -->
  <Cell align="end" col="col-span-6" value={damage} />
</div>
