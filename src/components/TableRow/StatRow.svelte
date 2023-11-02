<script lang="ts">
  import Cell from './Cell.svelte';
  export let label: string;
  export let base: number = 0;
  export let total: number;
  export let isPcnt: boolean;

  const numFormat = Intl.NumberFormat('en-US');
  $: displayBase =
    base === 0
      ? '0'
      : isPcnt
      ? base.toFixed(0) + '%' // Multiply by 100 and remove decimals
      : numFormat.format(+base.toFixed(0));
  $: displayTotal =
    total === 0
      ? '0'
      : isPcnt
      ? (total * 100).toFixed(0) + '%' // Multiply by 100 and remove decimals
      : numFormat.format(+total.toFixed(0));

  $: showRow = total > 0;
</script>

<!-- {#if showRow} -->
<div class="grid grid-cols-20 px-0.5 py-1 text-tb" class:text-slate-500={!showRow}>
  <Cell align="start" col="col-span-12" value={label} />
  <Cell align="end" col="col-span-4" value={displayBase} />
  <Cell align="end" col="col-span-4" value={displayTotal} />
</div>
<!-- {/if} -->
