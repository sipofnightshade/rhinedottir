<script lang="ts">
  import Cell from './Cell.svelte';
  import StatImage from '../Desktop/StatImage.svelte';
  import { elementalText } from '$lib/data/Colors';
  import type { Visions } from '$lib/types/global';

  export let data: any;
  export let constellation: number = 0;

  $: show = constellation >= (data.constellation ?? 0);
  $: damage = Math.floor(data.damage[data.elemental]).toLocaleString();

  $: textColor =
    data.elemental !== 'physical' ? elementalText[data.elemental as Visions] : '';
</script>

<div
  class="grid grid-cols-20 border-b border-slate-700 px-1 py-1.5 text-base md:text-tb"
  class:hidden={!show}
>
  <Cell align="start" col="col-span-2" value={data.tag || '-'} />
  <Cell align="start" col="col-span-10 text-slate-400" value={data.name} />
  <Cell align="center" col="col-span-2">
    <div class="h-5 w-5">
      <StatImage stat={data.elemental} />
    </div>
  </Cell>
  <!-- <Cell align="end" col="col-span-4 text-slate-400" value={nonCritDMG.toFixed(0)} /> -->
  <Cell align="end" col="col-span-6" value={damage} {textColor} />
</div>
