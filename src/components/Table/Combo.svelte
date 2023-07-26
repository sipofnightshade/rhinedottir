<script lang="ts">
  import ComboRow from '../TableRow/ComboRow.svelte';
  // stores
  import { combos } from '$lib/stores/comboStore';
</script>

<div class="flex flex-col">
  {#if $combos}
    {#each $combos as row, index}
      <ComboRow {index} {row} />
    {/each}
  {/if}
  <button
    class="my-4 flex h-16 items-center justify-center rounded-lg border-2 border-dashed border-slate-400 opacity-60 transition-opacity hover:opacity-100"
    on:click={() => combos.addRow()}
  >
    + Add a new row
  </button>
</div>
