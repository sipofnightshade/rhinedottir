<script lang="ts">
  import type { Action, Target } from '$lib/types/actions';
  import type { Visions } from '$lib/types/global';
  import ActionButton from './ActionButton.svelte';
  import { action, type ActionId, type All_Stats } from '$lib/stores/actionStore';
  import { onDestroy } from 'svelte';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';

  export let type: Visions | 'weapon' | 'artifact';
  export let data: Action;
  export let id: ActionId;
  export let stats: Record<All_Stats, number>;

  $: target = data.target ?? 'self';

  let stacks = 0;
  let stackCoefs: number[] = [];

  function addStacks() {
    data.values.forEach((value, i) => {
      const { scaling, coef, source } = value;
      const result = calcCoefficient((coef as number[])[stacks - 1], stats, source);

      if (!stackCoefs[i]) stackCoefs[i] = 0;
      stackCoefs[i] += result;

      action.addStat(id, target as Target, scaling, result);
    });
  }

  function removeStacks() {
    data.values.forEach((value, i) => {
      action.removeStat(id, target as Target, value.scaling, stackCoefs[i]);
      stackCoefs[i] = 0;
    });
  }

  function handleStacking() {
    if (stacks === (data.values[0].coef as number[]).length) {
      stacks = 0; // Reset the stacks if max is reached
      removeStacks();
    } else {
      stacks++; // Increment the stacks
      addStacks();
    }
  }

  onDestroy(() => {
    if (stacks > 0) {
      removeStacks();
    }
  });

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
    pyro: 'text-pyro',
    weapon: 'text-slate-300',
    artifact: 'text-slate-300'
  };
</script>

<button on:click={handleStacking} class="relative shadow-red-300">
  <ActionButton {type} isActive={stacks > 0} url={data.url} />
  {#if stacks > 0}
    <p
      class="stacks absolute top-0 right-0 z-10 text-lg font-bold {textColors[
        type
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
