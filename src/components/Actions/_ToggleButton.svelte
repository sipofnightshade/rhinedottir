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
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';
  import type { DamageValueID } from '$lib/types/talents';
  import { getCharacterName } from '$lib/helpers/getCharacterName';
  import type { CurrentCharacter } from '$lib/stores/characterStore';
  import { getCombatValue } from '$lib/helpers/getCombatValue';
  import { getCoefficientFromValues } from '$lib/helpers/getCoefficientFromValues';
  import type { CharacterSpecificNames } from '$lib/types/characters';

  // props
  export let type: Visions | 'weapon' | 'artifact';
  export let data: Action;
  export let id: ActionId;
  export let stats: Record<All_Stats, number>;
  export let character: CurrentCharacter;

  const target = data.target ?? 'self';
  const cName = getCharacterName(character.selected);
  const talentLvl = data.hasLevels ? character[data.hasLevels] : null;
  const combatValue = data.hasLevels ? getCombatValue(data.hasLevels) : null;

  let isActive = false;
  let addedStats: number[] = [];

  function addStats() {
    data.values.forEach((value, i) => {
      const { scaling, coef, source } = value; // 🛠 destructure target & param as well
      const talentValue =
        talentLvl && combatValue
          ? getCoefficientFromValues(
              combatValue,
              cName as CharacterSpecificNames,
              coef,
              talentLvl
            )
          : coef;
      console.log('talentValue:', talentValue);
      const result = calcCoefficient(talentValue, stats, source);

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
