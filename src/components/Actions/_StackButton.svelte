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
    if (stacks === data.values.length) {
      stacks = 0; // Reset the stacks if max is reached
    } else {
      stacks++; // Increment the stacks
    }

    if (stacks === 0) {
      // If stacks reset, remove all the stats from the action store
      data.values.forEach((stat) => action.removeStat(stat.scaling, stat.coef));
    } else {
      const { scaling, coef } = data.values[stacks - 1];
      // Add the stat corresponding to the current number of stacks to the action store
      action.addStat(scaling, coef);
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
</script>

<button on:click={handleToggle} class="relative shadow-red-300">
  <ActionButton {element} isActive={stacks > 0} />
  {#if stacks > 0}
    <p
      class="stacks absolute top-0 right-0 z-10 text-lg font-bold text-anemo shadow-red-400"
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
