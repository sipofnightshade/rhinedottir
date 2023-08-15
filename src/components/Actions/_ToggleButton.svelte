<script lang="ts">
  // types
  import type { Action, Target } from '$lib/types/actions';
  import type { Visions } from '$lib/types/global';
  import type { ActionId } from '$lib/stores/actionStore';
  import type { All_Stats } from '$lib/stores/actionStore';

  // other
  import ActionButton from './ActionButton.svelte';
  import { action } from '$lib/stores/actionStore';
  import { onDestroy } from 'svelte';
  import { calcCoeficient } from '$lib/calculators/calcCoefficient';

  // props
  export let type: Visions | 'weapon' | 'artifact';
  export let data: Action;
  export let id: ActionId;
  export let stats: Record<All_Stats, number>;

  const target = data.target ?? 'self';

  let isActive = false;
  let addedStats: number[] = [];

  function addStats() {
    data.values.forEach((value, i) => {
      const { scaling, coef, source } = value;
      const result = calcCoeficient(coef as number, stats, source);

      if (!addedStats[i]) addedStats[i] = 0;
      addedStats[i] += result;
      action.addStat(id, target as Target, scaling, result);
    });
    // add stats to temporary variable for unmounting purposes
  }

  function removeStats() {
    data.values.forEach((value, i) => {
      action.removeStat(id, target as Target, value.scaling, addedStats[i]);
      addedStats[i] = 0;
    });
  }

  function handleToggle() {
    isActive = !isActive;

    if (isActive) {
      addStats();
    } else {
      removeStats();
    }
  }

  onDestroy(() => {
    if (addedStats.length > 0) {
      removeStats();
    }
  });
</script>

<button on:click={handleToggle}>
  <ActionButton {type} {isActive} url={data.url} />
</button>
