<script lang="ts">
  import type { Action, Target } from '$lib/types/actions';
  import type { Visions } from '$lib/types/global';
  import ActionButton from './ActionButton.svelte';
  import { action, type ActionId } from '$lib/stores/actionStore';
  import { onMount } from 'svelte';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';

  import { party } from '$lib/stores/partyStore';
  import { character } from '$lib/stores/characterStore';
  import type { Index_Stats } from '$lib/data/Stats';

  export let type: Visions | 'weapon' | 'artifact';
  export let data: Action;
  export let id: ActionId;
  export let stats: Index_Stats;

  $: target = data.target ?? 'self';
  $: partyVisions = [
    $character.selected.vision,
    $party.one?.character.selected.vision ?? 'none',
    $party.two?.character.selected.vision ?? 'none',
    $party.three?.character.selected.vision ?? 'none'
  ];

  let addedStats: number[] = [];

  onMount(() => {
    data.values.forEach((value, i) => {
      const { scaling, coef, source } = value;
      const result = calcCoefficient(coef as number, stats, source);

      if (!addedStats[i]) addedStats[i] = 0;
      addedStats[i] += result;
      action.addStat(id, target as Target, scaling, result);
    });

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
