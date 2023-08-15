<script lang="ts">
  import type { Action, Target } from '$lib/types/actions';
  import type { Visions } from '$lib/types/global';
  import ActionButton from './ActionButton.svelte';
  import { action, type ActionId, type All_Stats } from '$lib/stores/actionStore';
  import { onMount } from 'svelte';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';

  export let type: Visions | 'weapon' | 'artifact';
  export let data: Action;
  export let id: ActionId;
  export let stats: Record<All_Stats, number>;

  $: target = data.target ?? 'self';

  let addedStats: number[] = [];

  onMount(() => {
    data.values.forEach((value, i) => {
      const { scaling, coef, source } = value;
      const result = calcCoefficient(coef as number, stats, source);

      if (!addedStats[i]) addedStats[i] = 0;
      addedStats[i] += result;
      action.addStat(id, target as Target, scaling, result);
    });

    // this return might be problematic if the state is reset when character changes
    // because then this might run after and substract values that were not added
    return () => {
      if (addedStats.length > 0) {
        data.values.forEach((value, i) => {
          action.removeStat(id, target as Target, value.scaling, addedStats[i]);
          addedStats[i] = 0;
        });
      }
    };
  });
</script>

<button data-testid="passive-action-button">
  <ActionButton {type} url={data.url} isActive />
</button>
