<script lang="ts">
  import Cell from './Cell.svelte';

  export let label: string;
  export let value: number = 0;
  export let multiplier = true;

  // $: displayValue = Math.round(value * 100) / 100;
</script>

<div class="grid grid-cols-20 border-b border-slate-700 px-1 py-1.5 text-base md:text-tb">
  <Cell align="start" col="col-span-12" value={label} />
  <Cell
    align="end"
    col="col-span-8"
    value={multiplier ? 'x' + value.toFixed(2) : value}
  />
</div>
