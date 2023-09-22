<script lang="ts">
  // types
  import type { Action, ActionBtnID, Target } from '$lib/types/actions';
  import type { Visions } from '$lib/types/global';
  import type { CurrentCharacter } from '$lib/stores/characterStore';
  import type { CharacterSpecificNames } from '$lib/types/characters';
  import type { Index_Stats } from '$lib/data/Stats';

  // components
  import ActionButton from './ActionButton.svelte';

  // other
  import { action } from '$lib/stores/actionStore';
  import { onMount } from 'svelte';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';
  import { getCharacterName } from '$lib/helpers/getCharacterName';
  import { getCombatValue } from '$lib/helpers/getCombatValue';
  import { getCoefficientFromValues } from '$lib/helpers/getCoefficientFromValues';
  import { character } from '$lib/stores/characterStore';
  import { party } from '$lib/stores/partyStore';
  import { getVisionCount } from '$lib/helpers/getVisionCount';

  // props
  export let type: Visions | 'weapon' | 'artifact';
  export let data: Action;
  export let id: ActionBtnID;
  export let currentChar: CurrentCharacter;
  export let currentStats: Index_Stats;

  const target = data.target ?? 'self';
  const cName = getCharacterName(currentChar.selected);
  const combatValue = data.hasLevels ? getCombatValue(data.hasLevels) : null;
  const sourceStats: string[] | null = data.sourceStats ?? null;

  let isInitialized = false; // Add a flag to track component initialization

  // add stats based on the number of elements if same / diff etc ( make function for this )
  let addedStats: { scaling: string; coef: number }[] = [];

  let previousStatValues: any = {};
  let previousTalentLvl: number | null = null;
  $: talentLvl = data.hasLevels ? currentChar[data.hasLevels] : null;
  $: constellationReq = data.constellation ?? 0;

  // vision button exclusive
  $: partyVisions = [
    $character.selected.vision,
    $party.one?.character.selected.vision ?? 'none',
    $party.two?.character.selected.vision ?? 'none',
    $party.three?.character.selected.vision ?? 'none'
  ];
  $: visionCondition = data.visionCondition ?? 'same';
  $: statIndex = getVisionCount(
    partyVisions,
    visionCondition,
    currentChar.selected.vision
  );

  function addStats() {
    data.values.forEach((value) => {
      const { scaling, coef, source } = value;
      // if coef length is less than statIndex then set the index to the coef length.
      const coefIndex =
        statIndex > (coef as number[]).length
          ? (coef as number[]).length - 1
          : statIndex - 1;

      const talentValue =
        talentLvl && combatValue
          ? getCoefficientFromValues(
              combatValue,
              cName as CharacterSpecificNames,
              (coef as number[])[coefIndex],
              talentLvl
            )
          : (coef as number[])[coefIndex];

      const result = calcCoefficient(talentValue, currentStats, source);
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
      if (previousStatValues[stat] !== currentStats[stat]) {
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
      previousStatValues = { ...currentStats }; // Create a copy of the current stats
    }
  }

  $: {
    if (isInitialized && statIndex) {
      removeStats();
      addStats();
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

{#if constellationReq <= currentChar.constellation}
  <button data-testid="passive-action-button">
    <ActionButton {type} url={data.url} isActive />
  </button>
{/if}
