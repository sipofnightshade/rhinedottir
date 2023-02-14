<script lang="ts">
  import Cell from './Cell.svelte';
  export let head = false;
</script>

{#if head}
  <div
    class="mb-.5 grid grid-cols-20 border-b border-slate-500 px-0.5 pb-1.5 text-sm font-bold uppercase"
  >
    <Cell align="start" col="col-span-12" value="Stat" />
    <Cell align="end" col="col-span-4" value="Base" />
    <Cell align="end" col="col-span-4" value="Total" />
  </div>
{:else}
  <div class="grid grid-cols-20 px-0.5 py-1 text-tb">
    <Cell align="start" col="col-span-12" value="Elemental Mastery" />
    <Cell align="end" col="col-span-4" value="12,276" />
    <Cell align="end" col="col-span-4" value="19,945" />
  </div>
{/if}
