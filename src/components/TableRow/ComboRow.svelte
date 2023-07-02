<script lang="ts">
  import ComboButton from './ComboButton.svelte';
  import ComboAddButton from './ComboAddButton.svelte';
  import ComboModal from '../Modal/Combo/ComboModal.svelte';
  import ShortModal from '../Modal/ShortModal.svelte';

  import { setCombo, getCombo } from '$lib/context/comboContext';
  import type { Combo } from '$lib/types/talents';

  export let row: Combo;

  setCombo(row);

  const comboRow = getCombo();

  let dialog: HTMLDialogElement;

  function toggleModal() {
    dialog.showModal();
  }
</script>

<section class="my-2 border-b border-slate-700 pb-2">
  <h3 class="mb-2">{$comboRow.title}</h3>
  <div class="flex items-center">
    {#each $comboRow.hits as hit}
      <ComboButton {hit} />
    {/each}
    <ComboAddButton on:click={toggleModal} />
  </div>
  <div class="flex justify-between">
    <div class="mt-2 flex">
      <img class="h-5 w-5 self-center" src="/images/elements/anemo.svg" alt="element" />
      <span>246,192</span>
    </div>
  </div>
</section>

<ShortModal bind:dialog modalTitle="Talents">
  <ComboModal />
</ShortModal>
