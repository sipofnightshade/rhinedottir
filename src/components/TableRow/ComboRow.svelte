<script lang="ts">
  import ComboButton from './ComboButton.svelte';
  import ComboAddButton from './ComboAddButton.svelte';
  import ComboModal from '../Modal/Combo/ComboModal.svelte';
  import ShortModal from '../Modal/ShortModal.svelte';

  import { setCombo, getCombo } from '$lib/context/comboContext';
  import type { ComboRowType } from '$lib/types/talents';

  export let row: ComboRowType;

  let dialog: HTMLDialogElement;

  setCombo(row);
  const comboRow = getCombo();

  function calculateComboData(row: ComboRowType) {
    return row.hits.reduce((totalDamage: any, { damage }) => totalDamage + damage, 0);
  }

  function toggleModal() {
    dialog.showModal();
  }

  $: damage = Math.round(calculateComboData($comboRow)).toLocaleString();
</script>

<!-- @component - * - * - * - * - * - * - * - * - * - 
- Add edit icon and more styles to show that the Title
is editable on shover and click etc
-->

<section class="my-2 border-b border-slate-700 pb-2">
  <h3
    class="mb-2 w-fit min-w-[120px] underline-offset-2 hover:underline"
    contenteditable="true"
    bind:innerHTML={row.title}
  />

  <div class="flex items-center">
    {#each $comboRow.hits as hit}
      <ComboButton {hit} />
    {/each}
    <ComboAddButton on:click={toggleModal} />
  </div>
  <div class="flex justify-between">
    <div class="mt-2 flex gap-1">
      <img class="h-5 w-5 self-center" src="/images/elements/anemo.svg" alt="element" />
      <span>{damage || '-'}</span>
    </div>
  </div>
</section>

<ShortModal bind:dialog modalTitle="Talents">
  <ComboModal />
</ShortModal>
