<script lang="ts">
  import ComboRow from '../TableRow/ComboRow.svelte';
  import type { Combo } from '$lib/types/talents';

  let aetherCombos: Combo[] = [];

  function addComboRow() {
    aetherCombos = [...aetherCombos, { title: 'New Combo', hits: [] }];
  }
</script>

<div class="flex flex-col">
  {#if aetherCombos.length > 0}
    {#each aetherCombos as row}
      <ComboRow {row} />
    {/each}
  {/if}
  <button
    class="my-4 flex h-16 items-center justify-center rounded-lg border-2 border-dashed border-slate-400 opacity-60 transition-opacity hover:opacity-100"
    on:click={addComboRow}
  >
    + Add a new row
  </button>
</div>
