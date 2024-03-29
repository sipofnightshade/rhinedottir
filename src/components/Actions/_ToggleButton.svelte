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

  // components
  import ActionButton from './ActionButton.svelte';

  // other
  import { action } from '$lib/stores/actionStore';
  import { infusion } from '$lib/stores/infusionStore';

  // import { stats } from '$lib/stores/statsStore';
  import { onDestroy } from 'svelte';
  import { getCombatValue } from '$lib/helpers/getCombatValue';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';
  import { getCoefficientFromValues } from '$lib/helpers/getCoefficientFromValues';
  import ActionDetails from '../ActionDetails/ActionDetails.svelte';
  import { longpress } from '$lib/actions/longpress';
  import { actionsBg } from '$lib/data/Colors';

  // props
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
      addedStats = [...addedStats, { scaling, coef: result }];
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

  function recalculateStats() {
    if (addedStats.length > 0) {
      removeStats();
      addStats();
    }
  }

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

  function applyInfusion(isActive: boolean) {
    if (isActive && data.infusion) {
      infusion.setInfusion(data.infusion, target, id);
    } else if (!isActive && data.infusion) {
      infusion.reset();
    }
  }

  $: applyInfusion(isActive);

  // handle longPress modal
  let dialog: HTMLDialogElement;
  const handleLongPress = () => {
    dialog.showModal();
  };

  onDestroy(() => {
    if (isActive) {
      removeStats();
      infusion.reset();
    }
    isActive = false;
    addedStats = [];
  });
</script>

<div class="relative">
  <ActionButton {type} {isActive} url={data.url} />
  <button
    class="absolute top-0 h-full w-full bg-transparent"
    on:longpress={handleLongPress}
    use:longpress={300}
    on:click={handleToggle}
  />
</div>

<ActionDetails hasFooter {id} {addedStats} {talentLvl} {data} {type} bind:dialog>
  <div slot="footer" class="py-1">
    <button
      class="flex w-[62px] rounded-full border border-slate-600 p-0.5 transition-colors duration-300 {isActive
        ? actionsBg[type]
        : 'bg-slate-800'}"
      on:click={handleToggle}
      role="checkbox"
      aria-checked={isActive}
    >
      <div
        class="h-7 w-7 rounded-full bg-slate-600 transition-all ease-in"
        class:translate-x-full={isActive}
      />
    </button>
  </div>
</ActionDetails>
