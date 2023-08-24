<script lang="ts">
  // types
  import type { Action, ActionBtnID, Target } from '$lib/types/actions';
  import type { Visions } from '$lib/types/global';
  import type { CurrentCharacter } from '$lib/stores/characterStore';
  import type { CharacterSpecificNames } from '$lib/types/characters';

  // components
  import ActionButton from './ActionButton.svelte';

  // other
  import { action } from '$lib/stores/actionStore';
  import { onDestroy } from 'svelte';
  import { getCharacterName } from '$lib/helpers/getCharacterName';
  import { getCombatValue } from '$lib/helpers/getCombatValue';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';
  import { getCoefficientFromValues } from '$lib/helpers/getCoefficientFromValues';
  import { stats } from '$lib/stores/statsStore';
  import type { All_Stats } from '$lib/data/Stats';

  // props
  export let type: Visions | 'weapon' | 'artifact';
  export let data: Action;
  export let id: ActionBtnID;
  export let character: CurrentCharacter;

  const target = data.target ?? 'self';
  const cName = getCharacterName(character.selected);
  const combatValue = data.hasLevels ? getCombatValue(data.hasLevels) : null;

  let updateNeeded = false;
  let previousTalentLvl: number | null = null;
  $: talentLvl = data.hasLevels ? character[data.hasLevels] : null;

  let isActive: boolean = false;
  let addedStats: { scaling: All_Stats; coef: number }[] = [];

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
      const result = calcCoefficient(
        talentValue,
        $stats[id] as Record<All_Stats, number>,
        source
      );

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

  // ▶ if button has a talentLvl, and it changes while the button is Active,
  // reset the current values that were added.
  // ▶ if $stats[id] change then also run this reactivity statement
  $: {
    if (talentLvl !== previousTalentLvl) {
      if (isActive) {
        removeStats();
        addStats();
      }
      previousTalentLvl = talentLvl;
    }
  }

  onDestroy(() => {
    if (isActive) {
      removeStats();
    }
    isActive = false;
    addedStats = [];
  });
</script>

<button on:click={handleToggle}>
  <ActionButton {type} {isActive} url={data.url} />
</button>
