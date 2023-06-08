<script lang="ts">
  import type { Action } from '$lib/types/talents';
  import type { Visions } from '$lib/types/global';
  import ActionButton from './ActionButton.svelte';
  import { action } from '$lib/stores/actionStore';
  import ActionModal from '../ActionModal/ActionModal.svelte';

  export let element: Visions;
  export let data: Action;

  // let showModal = true;
  let stacks = 0;

  function handleToggle() {
    if (stacks === (data.values[0].coef as number[]).length) {
      stacks = 0; // Reset the stacks if max is reached
    } else {
      stacks++; // Increment the stacks
    }

    if (stacks === 0) {
      console.log('stacks reset');
      data.values.forEach((value) => {
        (value.coef as number[]).forEach((stat) =>
          action.removeStat(value.scaling, stat)
        );
      });
    } else {
      data.values.forEach((value) => {
        action.addStat(value.scaling, (value.coef as number[])[stacks - 1]);
      });
    }
  }

  // function toggleModal() {
  //   showModal = !showModal;
  // }

  // function closeModal() {
  //   showModal = false;
  // }

  /**
   * @Important
   * - If using modals, use increment buttons and not an input
   */

  const textColors = {
    anemo: 'text-anemo',
    cryo: 'text-cryo',
    dendro: 'text-dendro',
    electro: 'text-electro',
    hydro: 'text-hydro',
    geo: 'text-geo',
    pyro: 'text-pyro'
  };
</script>

<button on:click={handleToggle} class="relative shadow-red-300">
  <ActionButton {element} isActive={stacks > 0} />
  {#if stacks > 0}
    <p
      class="stacks absolute top-0 right-0 z-10 text-lg font-bold {textColors[
        element
      ]} shadow-red-400"
    >
      x{stacks}
    </p>
  {/if}
</button>

<!-- {#if showModal}
  <ActionModal
    on:click={closeModal}
    on:escapeClick={closeModal}
    modalTitle={data.name}
    actionType="Elemental Burst"
    buttonType="Stacks"
    details={data.description}
  >
    <div class="flex items-center space-x-2">
      <input
        type="number"
        max={data.values.length}
        min={0}
        class="h-8 w-24 rounded bg-slate-600 text-right"
      />
      <p class="text-slate-400">/ {data.values.length}</p>
    </div>
  </ActionModal>
{/if} -->
<style lang="postcss">
  .stacks {
    text-shadow: -1px -1px 2px #334155, 1px -1px 2px #334155, -1px 1px 1px #334155,
      1px 1px 1px #334155;
  }
</style>
