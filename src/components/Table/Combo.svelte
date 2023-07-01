<script lang="ts">
  import ComboRow from '../TableRow/ComboRow.svelte';
  import type { Hit } from '$lib/types/talents';

  let comboRows: { title: string; hits: Hit[] }[] = [];

  function addComboRow() {
    comboRows = [...comboRows, { title: '', hits: [] }];
  }
</script>

<div class="flex flex-col">
  {#if comboRows.length > 0}
    {#each comboRows as row}
      <ComboRow title={row.title} talents={row.hits} />
    {/each}
  {/if}
  <button
    class="my-4 flex h-16 items-center justify-center rounded-lg border-2 border-dashed border-slate-400 opacity-60 transition-opacity hover:opacity-100"
    on:click={addComboRow}
  >
    + Add a new row
  </button>
</div>
