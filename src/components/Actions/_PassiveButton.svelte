<script lang="ts">
  // types
  import type { Action, ActionBtnID, Target } from '$lib/types/actions';
  import type { Visions } from '$lib/types/global';
  import type { All_Stats } from '$lib/stores/actionStore';
  import type { CurrentCharacter } from '$lib/stores/characterStore';
  import type { CharacterSpecificNames } from '$lib/types/characters';

  // components
  import ActionButton from './ActionButton.svelte';

  // other
  import { action } from '$lib/stores/actionStore';
  import { onDestroy, onMount } from 'svelte';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';
  import { getCharacterName } from '$lib/helpers/getCharacterName';
  import { getCombatValue } from '$lib/helpers/getCombatValue';
  import { getCoefficientFromValues } from '$lib/helpers/getCoefficientFromValues';
  import { stats } from '$lib/stores/statsStore';

  // props
  export let type: Visions | 'weapon' | 'artifact';
  export let data: Action;
  export let id: ActionBtnID;
  export let character: CurrentCharacter;

  const target = data.target ?? 'self';
  const cName = getCharacterName(character.selected);
  const talentLvl = data.hasLevels ? character[data.hasLevels] : null;
  const combatValue = data.hasLevels ? getCombatValue(data.hasLevels) : null;

  let addedStats: number[] = [];

  onMount(() => {
    data.values.forEach((value, i) => {
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
