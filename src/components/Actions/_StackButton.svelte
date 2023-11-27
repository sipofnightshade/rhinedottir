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
  import type { Index_Stats } from '$lib/data/Stats';

  // helpers / calculators / actions
  import { onDestroy } from 'svelte';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';
  import { getCombatValue } from '$lib/helpers/getCombatValue';
  import { getCoefficientFromValues } from '$lib/helpers/getCoefficientFromValues';
  import { longpress } from '$lib/actions/longpress';

  // stores
  import { action } from '$lib/stores/actionStore';
  import { infusion } from '$lib/stores/infusionStore';

  // components
  import ActionButton from './ActionButton.svelte';
  import ActionDetails from '../ActionDetails/ActionDetails.svelte';
  import Minus from '$lib/icons/Minus.svelte';
  import Plus from '$lib/icons/Plus.svelte';

  export let type: ActionButtonColor;
  export let data: Action;
  export let id: ActionBtnID;
  export let currentChar: CurrentCharacter;
  export let currentStats: Index_Stats;

  const target = data.target ?? 'self';
  const cName = currentChar.selected.id;
  const combatValue = data.hasLevels ? getCombatValue(data.hasLevels) : null;
  const sourceStats: string[] | null = data.sourceStats ?? null;
  const maxStacks = (data.values[0].coef as number[]).length ?? 0;

  let previousStatValues: any = {};
  $: talentLvl = data.hasLevels ? currentChar[data.hasLevels] : null;

  let stacks = 0;
  let stackCoefs: number[] = [];
  let lastAddedStats: { scaling: string; coef: number }[] = [];

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
      lastAddedStats[i] = { scaling, coef: result };
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
    if (stacks === maxStacks) {
      stacks = 0; // Reset the stacks if max is reached
      removeStats();
    } else {
      stacks++;
      addStats(stacks);
    }
  }

  function handleIncrement() {
    if (stacks !== maxStacks) {
      stacks++;
      addStats(stacks);
    }
  }

  function handleDecrement() {
    if (stacks > 0 && lastAddedStats.length > 0 && stackCoefs.length > 0) {
      stacks--;
      lastAddedStats.forEach(({ scaling, coef }, i) => {
        action.removeStat(id, target as Target, scaling, coef);
        stackCoefs[i] -= coef;
      });
    }
  }

  function recalculateStats() {
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

  $: applyInfusion(stacks > 0);

  function handleSourceStatChange(currentStats: Index_Stats) {
    if (!sourceStats) return false;
    let changed = false;

    for (const stat of sourceStats) {
      if (previousStatValues[stat] !== currentStats[stat]) {
        changed = true;
        previousStatValues[stat] = currentStats[stat];
      }
    }

    if (changed) {
      recalculateStats();
    }
  }

  // 🌊 Individually call `recalculateStats()` when dependencies change
  $: handleSourceStatChange(currentStats);
  $: talentLvl, recalculateStats();
  $: currentChar.constellation, recalculateStats();
  $: data, recalculateStats(); // recalculates for weapon refinement changes etc.

  // handle longPress modal
  let dialog: HTMLDialogElement;
  const handleLongPress = () => {
    dialog.showModal();
  };

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

  // 🌊 - ActionStats Data
  $: addedStats = data.values.map((stat, i) => {
    return { scaling: stat.scaling, coef: stackCoefs[i] };
  });
</script>

<div class="relative">
  <ActionButton {type} isActive={stacks > 0} url={data.url} />
  {#if stacks > 0}
    <p
      class="stacks pointer-events-none absolute right-0 top-0 select-none text-lg font-bold {textColors[
        type
      ]}"
    >
      x{stacks}
    </p>
  {/if}
  <button
    class="absolute top-0 h-full w-full bg-transparent"
    on:longpress={handleLongPress}
    use:longpress={300}
    on:click={handleStacking}
  />
</div>

<ActionDetails {id} {talentLvl} {data} {type} {addedStats} hasFooter bind:dialog>
  <div slot="footer" class="py-1">
    <div class="flex h-9 items-center gap-4 rounded-lg md:h-10 [&>button]:bg-slate-700">
      <button
        on:click={handleDecrement}
        class="flex h-full w-11 items-center justify-center rounded-l-lg rounded-r-sm border border-slate-600 transition-opacity"
        disabled={stacks <= 0}
        class:opacity-30={stacks <= 0}
        class:active:bg-slate-600={stacks > 0}
      >
        <Minus class="h-3 w-3 fill-slate-200" />
      </button>
      <div>
        <span>{stacks}</span>
      </div>
      <button
        on:click={handleIncrement}
        class="flex h-full w-11 items-center justify-center rounded-l-sm rounded-r-lg border border-slate-600 transition-opacity"
        disabled={stacks >= maxStacks}
        class:opacity-30={stacks >= maxStacks}
        class:active:bg-slate-600={stacks < maxStacks}
      >
        <Plus class="pointer-events-none h-3 w-3 fill-slate-200" />
      </button>
    </div>
  </div>
</ActionDetails>

<style lang="postcss">
  .stacks {
    text-shadow: -1px -1px 2px #334155, 1px -1px 2px #334155, -1px 1px 1px #334155,
      1px 1px 1px #334155;
  }
</style>
