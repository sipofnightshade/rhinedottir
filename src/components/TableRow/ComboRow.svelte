<script lang="ts">
  import ComboButton from './ComboButton.svelte';
  import ComboAddButton from './ComboAddButton.svelte';
  import ComboModal from '../Modal/Combo/ComboModal.svelte';
  import ShortModal from '../Modal/ShortModal.svelte';

  // stores
  import { combos } from '$lib/stores/comboStore';

  export let index: number;
  export let row: any; // ❗❗❗ types for combostore Row
  let dialog: HTMLDialogElement;

  /**
   * Calculates the total damage and retrieves the talent objects involved in the damage calculation.
   * @param talents - Object containing talent rows.
   * @param combo - Combo object specifying the hits to calculate damage for.
   * @returns An object containing the total damage and the talent objects involved.
   */

  // handle modal
  function toggleModal() {
    dialog.showModal();
  }

  // console.log($combos);
</script>

<!-- @component - * - * - * - * - * - * - * - * - * - 
- Add edit icon and more styles to show that the Title
is editable on shover and click etc
-->

<section class="my-2 border-b border-slate-700 pb-2">
  <h3
    class="mb-2 w-fit min-w-[120px] underline-offset-2 hover:underline"
    contenteditable="true"
    bind:textContent={row.title}
  />

  <div class="flex items-center">
    {#each row.hits as btn, i}
      <ComboButton {btn} rowIndex={index} btnIndex={i} />
    {/each}
    <ComboAddButton on:click={toggleModal} />
  </div>
  <div class="flex justify-between">
    <div class="mt-2 flex gap-1">
      <img
        class="h-5 w-5 self-center"
        src="/images/elements/physical.svg"
        alt="element"
      />
      <span>{Math.round(row.totalDamage).toLocaleString() || '-'}</span>
    </div>
  </div>
</section>

<ShortModal bind:dialog modalTitle="Talents">
  <ComboModal {index} />
</ShortModal>
