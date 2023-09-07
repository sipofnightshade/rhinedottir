<script lang="ts">
  // types
  import type { Action, ActionBtnID, Target } from '$lib/types/actions';
  import type { Visions } from '$lib/types/global';
  import type { CurrentCharacter } from '$lib/stores/characterStore';
  import type { CharacterSpecificNames } from '$lib/types/characters';
  import type { All_Stats, Index_Stats } from '$lib/data/Stats';

  // components
  import ActionButton from './ActionButton.svelte';

  // other
  import { action } from '$lib/stores/actionStore';
  import { onMount } from 'svelte';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';
  import { getCharacterName } from '$lib/helpers/getCharacterName';
  import { getCombatValue } from '$lib/helpers/getCombatValue';
  import { getCoefficientFromValues } from '$lib/helpers/getCoefficientFromValues';

  // props
  export let type: Visions | 'weapon' | 'artifact';
  export let data: Action;
  export let id: ActionBtnID;
  export let character: CurrentCharacter;
  export let stats: Index_Stats;

  const target = data.target ?? 'self';
  const cName = getCharacterName(character.selected);
  const combatValue = data.hasLevels ? getCombatValue(data.hasLevels) : null;
  const sourceStats: string[] | null = data.sourceStats ?? null;

  let previousStatValues: any = {};
  let previousTalentLvl: number | null = null;
  $: talentLvl = data.hasLevels ? character[data.hasLevels] : null;

  let isInitialized = false; // Add a flag to track component initialization

  let addedStats: { scaling: string; coef: number }[] = [];

  function addStats() {
    data.values.forEach((value) => {
      const { scaling, coef, source } = value;
      const talentValue =
        talentLvl && combatValue
          ? getCoefficientFromValues(
              combatValue,
              cName as CharacterSpecificNames,
              coef,
              talentLvl
            )
          : coef;
      const result = calcCoefficient(talentValue, stats, source);
      addedStats.push({ scaling, coef: result });
      action.addStat(id, target as Target, scaling, result);
    });
  }

  function removeStats() {
    addedStats.forEach((stat) => {
      action.removeStat(id, target as Target, stat.scaling, stat.coef);
      addedStats = [];
    });
  }

  function isAnyStatChanged() {
    // Compare previous and current stat values
    if (!sourceStats) return false;
    for (const stat of sourceStats) {
      if (previousStatValues[stat] !== stats[stat]) {
        return true; // Return true if any tracked stat has changed
      }
    }
    return false;
  }

  $: {
    if (isInitialized && (talentLvl !== previousTalentLvl || isAnyStatChanged())) {
      removeStats();
      addStats();
      previousTalentLvl = talentLvl;
      previousStatValues = { ...stats }; // Create a copy of the current stats
    }
  }

  onMount(() => {
    addStats();
    // this return might be problematic if the state is reset when character changes
    // because then this might run after and substract values that were not added
    isInitialized = true;

    return () => {
      removeStats();
    };
  });
</script>

<button data-testid="passive-action-button">
  <ActionButton {type} url={data.url} isActive />
</button>
