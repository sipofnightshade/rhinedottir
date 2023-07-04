<script lang="ts">
  import ComboRow from '../TableRow/ComboRow.svelte';
  import type { ComboRowType } from '$lib/types/talents';
  import { character } from '$lib/stores/characterStore';

  type CharacterCombos = {
    id: string;
    rows: ComboRowType[];
  };

  let combos: CharacterCombos;

  $: {
    const selected = $character.selected.name + $character.selected.vision;
    combos = {
      id: selected,
      rows: []
    };
  }

  function addComboRow() {
    combos.rows = [...combos.rows, { title: 'New Combo', hits: [] }];
    console.log(`${$character.selected.fullName}:`, combos);
  }
</script>

<div class="flex flex-col">
  {#each combos.rows as row}
    <ComboRow {row} />
  {/each}
  <button
    class="my-4 flex h-16 items-center justify-center rounded-lg border-2 border-dashed border-slate-400 opacity-60 transition-opacity hover:opacity-100"
    on:click={addComboRow}
  >
    + Add a new row
  </button>
</div>
