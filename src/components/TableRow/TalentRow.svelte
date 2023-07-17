<script lang="ts">
  import Cell from './Cell.svelte';
  import StatImage from '../Desktop/StatImage.svelte';

  export let data: any;
  $: damage = Math.floor(data.damage.base).toLocaleString();
</script>

<div class="grid grid-cols-20 px-1 py-1 text-tb">
  <Cell align="start" col="col-span-2" value={data.tag || '-'} />
  <Cell align="start" col="col-span-10 text-slate-400" value={data.name} />
  <Cell align="center" col="col-span-2">
    <StatImage stat={data.elemental} />
  </Cell>
  <!-- <Cell align="end" col="col-span-4 text-slate-400" value={nonCritDMG.toFixed(0)} /> -->
  <Cell align="end" col="col-span-6" value={damage} />
</div>
