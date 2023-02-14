<script lang="ts">
  import Cell from './Cell.svelte';
  export let head = false;
</script>

{#if head}
  <div
    class="mb-.5 grid grid-cols-24 border-b border-slate-500 px-0.5 pb-1.5 text-sm font-bold uppercase"
  >
    <Cell align="start" col="col-span-2" value="ID" />
    <Cell align="start" col="col-span-9" value="Talent" />
    <Cell align="center" col="col-span-3" value="-" />
    <Cell align="end" col="col-span-4" value="Base" />
    <Cell align="end" col="col-span-6" value="Total" />
  </div>
{:else}
  <div class="grid grid-cols-24 px-0.5 py-1 text-tb">
    <Cell align="start" col="col-span-2" value="N1" />
    <Cell align="start" col="col-span-9" value="1 - hit DMG" />
    <Cell align="center" col="col-span-3">
      <img class="h-6 w-6" src="/images/elements/anemo.svg" alt="" />
    </Cell>
    <Cell align="end" col="col-span-4" value="31,040" />
    <Cell align="end" col="col-span-6" value="121,000" />
  </div>
{/if}
