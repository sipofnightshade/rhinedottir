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
  const cName = currentChar.selected.id;
  const combatValue = data.hasLevels ? getCombatValue(data.hasLevels) : null;
  const sourceStats: string[] | null = data.sourceStats ?? null;

  let previousStatValues: any = {};
  $: talentLvl = data.hasLevels ? currentChar[data.hasLevels] : null;

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

  function recalculateStats() {
    if (addedStats.length > 0) {
      removeStats();
      addStats();
    }
  }

  function applyInfusion(isActive: boolean) {
    if (isActive && data.infusion) {
      infusion.setInfusion(data.infusion, target, id);
    } else if (!isActive && data.infusion) {
      infusion.reset();
    }
  }

  $: isAnyStatChanged(), talentLvl, currentChar.constellation, recalculateStats();
  $: applyInfusion(isActive);

  onDestroy(() => {
    if (isActive) {
      removeStats();
      infusion.reset();
    }
    isActive = false;
    addedStats = [];
  });
</script>

<button on:click={handleToggle}>
  <ActionButton {type} {isActive} url={data.url} />
</button>
