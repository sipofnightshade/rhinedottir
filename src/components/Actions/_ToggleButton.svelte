<script lang="ts">
  // types
  import type { Action, Target } from '$lib/types/actions';
  import type { Visions } from '$lib/types/global';
  import type { ActionId } from '$lib/stores/actionStore';
  import type { ALL_STATS } from '$lib/types/talents';

  // other
  import ActionButton from './ActionButton.svelte';
  import { action } from '$lib/stores/actionStore';
  import { onDestroy } from 'svelte';

  // props
  export let type: Visions | 'weapon' | 'artifact';
  export let data: Action;
  export let id: ActionId;

  const target = data.target ?? 'self';

  let isActive = false;
  let addedStats: { scaling: ALL_STATS; coef: number }[] = [];

  function handleToggle() {
    isActive = !isActive;

    if (isActive) {
      data.values.forEach((stat) => {
        action.addStat(id, target as Target, stat.scaling, stat.coef as number);
      });
      // add stats to temporary variable for unmounting purposes
      addedStats = data.values.map((stat) => ({
        scaling: stat.scaling,
        coef: stat.coef as number
      }));
      return;
    } else {
      data.values.forEach((stat) =>
        action.removeStat(id, target as Target, stat.scaling, stat.coef as number)
      );
      // clear out temporary variable's stats
      addedStats = [];
      return;
    }
  }

  onDestroy(() => {
    addedStats.forEach((stat) => {
      action.removeStat(id, target as Target, stat.scaling, stat.coef);
    });
  });
</script>

<button on:click={handleToggle}>
  <ActionButton {type} {isActive} url={data.url} />
</button>
