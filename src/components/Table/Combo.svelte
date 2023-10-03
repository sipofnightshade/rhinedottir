<script lang="ts">
  import { character } from '$lib/stores/characterStore';
  import { uid } from 'uid';

  import Row from '../Modal/Combo/Row.svelte';

  let rows = [{ id: uid(), title: 'Basic rotation!' }];

  function addRow() {
    rows = [...rows, { id: uid(), title: '' }];
  }

  function deleteRow(event: CustomEvent) {
    const rowId = event.detail.rowId;
    rows = rows.filter((row) => row.id !== rowId);
  }

  function resetRows() {
    rows = [{ id: uid(), title: 'Basic rotation!' }];
  }

  $: $character.selected.name, resetRows();
</script>

<div class="flex flex-col">
  {#each rows as row, index (row.id)}
    <Row {row} on:deleteRow={deleteRow} {index} />
  {/each}
  <button
    class="my-4 flex h-16 items-center justify-center rounded-lg border-2 border-dashed border-slate-400 opacity-60 transition-opacity hover:opacity-100"
    on:click={addRow}
  >
    + Add a new row
  </button>
</div>
