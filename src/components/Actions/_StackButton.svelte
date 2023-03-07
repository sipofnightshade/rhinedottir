<script lang="ts">
  import type { Action } from '$lib/types/talents';
  import type { Visions } from '$lib/types/global';
  import ActionButton from './ActionButton.svelte';
  import { action } from '$lib/stores/actionStore';

  export let element: Visions;
  export let data: Action;

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
      console.log('Stacks', stacks);
      console.log('Store', $action);
    } else {
      const { scaling, coef } = data.values[stacks - 1];
      action.addStat(scaling, coef); // Add the stat corresponding to the current number of stacks to the action store
      console.log('Stacks', stacks);
      console.log('Store', $action);
    }
  }
</script>

<button on:click={handleToggle} class="relative shadow-red-300">
  <ActionButton {element} isActive={stacks > 0} />
  {#if stacks > 0}
    <p
      class="stacks absolute top-0 right-0 z-30 text-lg font-bold text-anemo shadow-red-400"
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
