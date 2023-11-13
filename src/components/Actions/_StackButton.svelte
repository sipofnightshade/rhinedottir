<script lang="ts">
  // types
  import type {
    Action,
    ActionBtnID,
    ActionButtonColor,
    Target
  } from '$lib/types/actions';
  import type { CurrentCharacter } from '$lib/stores/characterStore';
  import type { CharacterSpecificNames } from '$lib/types/characters';
  import type { All_Stats, Index_Stats } from '$lib/data/Stats';

  // helpers & calculators
  import { onDestroy } from 'svelte';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';
  import { getCombatValue } from '$lib/helpers/getCombatValue';
  import { getCoefficientFromValues } from '$lib/helpers/getCoefficientFromValues';

  // stores &
  import { action } from '$lib/stores/actionStore';

  // components
  import ActionButton from './ActionButton.svelte';
  import { infusion } from '$lib/stores/infusionStore';
  import { longpress } from '$lib/actions/longpress';
  import ActionDetails from '../ActionDetails/ActionDetails.svelte';

  export let type: ActionButtonColor;
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

  let stacks = 0;
  let stackCoefs: number[] = [];

  function addStats(currentStacks: number) {
    data.values.forEach((value, i) => {
      const { scaling, coef, source } = value;

      const talentValue =
        talentLvl && combatValue
          ? getCoefficientFromValues(
              combatValue,
              cName as CharacterSpecificNames,
              (coef as number[])[currentStacks - 1],
              talentLvl
            )
          : (coef as number[])[currentStacks - 1];
      const result = calcCoefficient(talentValue, currentStats, source);

      if (!stackCoefs[i]) stackCoefs[i] = 0;
      stackCoefs[i] += result;
      action.addStat(id, target as Target, scaling, result);
    });
  }

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
      addStats(stacks);
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
    console.log(`%cRecalculate Stats`, 'color: #34cdeb');

    removeStats();
    for (let i = 0; i < stacks; i++) {
      addStats(i + 1);
    }
  }

  function applyInfusion(isActive: boolean) {
    if (isActive && data.infusion) {
      infusion.setInfusion(data.infusion, target, id);
    } else if (!isActive && data.infusion) {
      infusion.reset();
    }
  }

  // handle longPress modal
  let dialog: HTMLDialogElement;
  const handleLongPress = () => {
    dialog.showModal();
  };

  $: isAnyStatChanged(), talentLvl, currentChar.constellation, recalculateStats();
  $: applyInfusion(stacks > 0);

  onDestroy(() => {
    if (stacks > 0) {
      removeStats();
    }
  });

  const textColors = {
    anemo: 'text-anemo',
    cryo: 'text-cryo',
    dendro: 'text-dendro',
    electro: 'text-electro',
    hydro: 'text-hydro',
    geo: 'text-geo',
    pyro: 'text-pyro',
    weapon: 'text-slate-300',
    artifact: 'text-slate-300',
    resonance: 'text-slate-300'
  };
</script>

<button
  on:longpress={handleLongPress}
  use:longpress={300}
  on:click={handleStacking}
  class="relative shadow-red-300"
>
  <ActionButton {type} isActive={stacks > 0} url={data.url} />
  {#if stacks > 0}
    <p
      class="stacks absolute right-0 top-0 z-10 text-lg font-bold {textColors[
        type
      ]} shadow-red-400"
    >
      x{stacks}
    </p>
  {/if}
</button>

<ActionDetails {data} {talentLvl} bind:dialog />

<style lang="postcss">
  .stacks {
    text-shadow: -1px -1px 2px #334155, 1px -1px 2px #334155, -1px 1px 1px #334155,
      1px 1px 1px #334155;
  }
</style>
