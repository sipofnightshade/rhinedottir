<script lang="ts">
  // types
  import type { Action, ActionBtnID, Target } from '$lib/types/actions';
  import type { Visions } from '$lib/types/global';
  import type { CurrentCharacter } from '$lib/stores/characterStore';
  import type { CharacterSpecificNames } from '$lib/types/characters';
  import type { All_Stats } from '$lib/data/Stats';

  // helpers & calculators
  import { onDestroy } from 'svelte';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';
  import { getCharacterName } from '$lib/helpers/getCharacterName';
  import { getCombatValue } from '$lib/helpers/getCombatValue';
  import { getCoefficientFromValues } from '$lib/helpers/getCoefficientFromValues';

  // stores &
  import { action } from '$lib/stores/actionStore';

  // components
  import ActionButton from './ActionButton.svelte';

  export let type: Visions | 'weapon' | 'artifact';
  export let data: Action;
  export let id: ActionBtnID;
  export let character: CurrentCharacter;
  export let stats: Record<All_Stats, number>;

  const target = data.target ?? 'self';
  const cName = getCharacterName(character.selected);
  const combatValue = data.hasLevels ? getCombatValue(data.hasLevels) : null;
  const sourceStats: All_Stats[] | null = data.sourceStats ?? null;

  let previousStatValues: any = {};
  let previousTalentLvl: number | null = null;
  $: talentLvl = data.hasLevels ? character[data.hasLevels] : null;

  let stacks = 0;
  let stackCoefs: number[] = [];

  function addStats() {
    data.values.forEach((value, i) => {
      const { scaling, coef, source } = value;

      const talentValue =
        talentLvl && combatValue
          ? getCoefficientFromValues(
              combatValue,
              cName as CharacterSpecificNames,
              (coef as number[])[stacks - 1],
              talentLvl
            )
          : (coef as number[])[stacks - 1];
      const result = calcCoefficient(talentValue, stats, source);

      if (!stackCoefs[i]) stackCoefs[i] = 0;
      stackCoefs[i] += result;
      action.addStat(id, target as Target, scaling, result);
    });
  }

  // ❗ this does not remove the correct stats when triggered as
  // it loops through the original values of data instead of
  // using the stackCoefs
  function removeStats() {
    data.values.forEach((value, i) => {
      action.removeStat(id, target as Target, value.scaling, stackCoefs[i]);
      stackCoefs[i] = 0;
    });
  }

  function handleStacking() {
    if (stacks === (data.values[0].coef as number[]).length) {
      stacks = 0; // Reset the stacks if max is reached
      removeStats();
    } else {
      stacks++; // Increment the stacks
      addStats();
    }
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
    if (talentLvl !== previousTalentLvl || (isAnyStatChanged() && stacks > 0)) {
      removeStats();
      for (let i = 0; i < stacks; i++) {
        addStats();
      }
      previousTalentLvl = talentLvl;
      previousStatValues = { ...stats }; // Create a copy of the current stats
    }
  }

  onDestroy(() => {
    if (stacks > 0) {
      removeStats();
    }
  });

  /**
   * @Important
   * - If using modals, use increment buttons and not an input
   */

  const textColors = {
    anemo: 'text-anemo',
    cryo: 'text-cryo',
    dendro: 'text-dendro',
    electro: 'text-electro',
    hydro: 'text-hydro',
    geo: 'text-geo',
    pyro: 'text-pyro',
    weapon: 'text-slate-300',
    artifact: 'text-slate-300'
  };
</script>

<button on:click={handleStacking} class="relative shadow-red-300">
  <ActionButton {type} isActive={stacks > 0} url={data.url} />
  {#if stacks > 0}
    <p
      class="stacks absolute top-0 right-0 z-10 text-lg font-bold {textColors[
        type
      ]} shadow-red-400"
    >
      x{stacks}
    </p>
  {/if}
</button>

<style lang="postcss">
  .stacks {
    text-shadow: -1px -1px 2px #334155, 1px -1px 2px #334155, -1px 1px 1px #334155,
      1px 1px 1px #334155;
  }
</style>
