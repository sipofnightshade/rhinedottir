<script lang="ts">
  import { Bloom, Hyperbloom, Burgeon, Burning, Shattered, Geo } from '$lib/icons';

  import Cell from './Cell.svelte';
  import StatImage from '../Desktop/StatImage.svelte';

  export let data: any;

  const reactions = {
    bloom: Bloom,
    hyperbloom: Hyperbloom,
    burgeon: Burgeon,
    burning: Burning,
    shattered: Shattered,
    crystallize: Geo
  };

  $: damage =
    data.damageBonus === 'crystallize'
      ? Math.floor(data.damage.shield).toLocaleString()
      : Math.floor(data.damage[data.damageBonus]).toLocaleString();
  $: icon = data.damageBonus as keyof typeof reactions;
</script>

<div class="grid grid-cols-20 border-b border-slate-700 p-1 px-1 py-1.5 text-tb">
  <Cell align="start" col="col-span-2 ">
    <svelte:component this={reactions[icon]} class="w-4" />
  </Cell>
  <Cell align="start" col="col-span-10 text-slate-400" value={data.name} />
  <Cell align="center" col="col-span-2">
    <div class="h-5 w-5">
      <StatImage stat={data.elemental} />
    </div>
  </Cell>
  <Cell align="end" col="col-span-6" value={damage} />
</div>
