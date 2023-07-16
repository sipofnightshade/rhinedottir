<script lang="ts">
  import type { Action, Target } from '$lib/types/talents';
  import type { Visions } from '$lib/types/global';
  import ActionButton from './ActionButton.svelte';
  import { action, type ActionId } from '$lib/stores/actionStore';

  export let element: Visions;
  export let data: Action;
  export let id: ActionId;

  $: target = data.target && 'self';

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
          action.removeStat(id, target as Target, value.scaling, stat)
        );
      });
    } else {
      data.values.forEach((value) => {
        action.addStat(
          id,
          target as Target,
          value.scaling,
          (value.coef as number[])[stacks - 1]
        );
      });
    }
  }

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

<style lang="postcss">
  .stacks {
    text-shadow: -1px -1px 2px #334155, 1px -1px 2px #334155, -1px 1px 1px #334155,
      1px 1px 1px #334155;
  }
</style>
