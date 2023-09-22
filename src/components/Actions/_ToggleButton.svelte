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
  import { infusion } from '$lib/stores/infusionStore';

  // import { stats } from '$lib/stores/statsStore';
  import { onDestroy } from 'svelte';
  import { getCharacterName } from '$lib/helpers/getCharacterName';
  import { getCombatValue } from '$lib/helpers/getCombatValue';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';
  import { getCoefficientFromValues } from '$lib/helpers/getCoefficientFromValues';

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

  let previousStatValues: any = {};
  let previousTalentLvl: number | null = null;
  $: talentLvl = data.hasLevels ? currentChar[data.hasLevels] : null;
  $: constellationReq = data.constellation ?? 0;

  let isActive: boolean = false;
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

  function handleToggle() {
    isActive = !isActive;

    if (isActive) {
      addStats();
    } else {
      removeStats();
    }
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

  // ▶ if button has a talentLvl, and it changes while the button is Active,
  // reset the current values that were added.
  // ▶ if stats change then also run this reactivity statement
  $: {
    if (talentLvl !== previousTalentLvl || isAnyStatChanged()) {
      if (isActive) {
        removeStats();
        addStats();
      }
      previousTalentLvl = talentLvl;
      previousStatValues = { ...currentStats }; // Create a copy of the current stats
    }
  }

  // apply infusion
  $: if (isActive && data.infusion) {
    infusion.setInfusion(data.infusion, target, id);
  } else if (!isActive && data.infusion) {
    infusion.reset();
  }

  onDestroy(() => {
    if (isActive) {
      removeStats();
    }
    isActive = false;
    addedStats = [];
  });
</script>

{#if constellationReq <= currentChar.constellation}
  <button on:click={handleToggle}>
    <ActionButton {type} {isActive} url={data.url} />
  </button>
{/if}
