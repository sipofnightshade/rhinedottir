<script lang="ts">
  import { character } from '$lib/stores/characterStore';

  import Row from '../Modal/Combo/Row.svelte';

  let rows = [{ id: 1, title: 'New Row', hits: [], totalDamage: 0 }];

  function addRow() {
    rows = [...rows, { id: rows.length + 1, title: 'New Row', hits: [], totalDamage: 0 }];
  }

  function resetRows() {
    rows = [];
    // rows = [{ id: 1, title: ' Row', hits: [], totalDamage: 0 }];
  }

  $: $character.selected.name, resetRows();
</script>

<div class="flex flex-col">
  {#each rows as row}
    <Row {row} />
  {/each}
  <button
    class="my-4 flex h-16 items-center justify-center rounded-lg border-2 border-dashed border-slate-400 opacity-60 transition-opacity hover:opacity-100"
    on:click={addRow}
  >
    + Add a new row
  </button>
</div>
