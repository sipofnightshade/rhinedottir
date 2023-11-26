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
  import { onMount } from 'svelte';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';
  import { getCombatValue } from '$lib/helpers/getCombatValue';
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

  let isInitialized = false; // Add a flag to track component initialization

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

  // handle longPress modal
  let dialog: HTMLDialogElement;
  const handleLongPress = () => {
    dialog.showModal();
  };

  onMount(() => {
    addStats();
    isInitialized = true;

    return () => {
      removeStats();
    };
  });
</script>

<button
  on:longpress={handleLongPress}
  use:longpress={300}
  data-testid="passive-action-button"
>
  <ActionButton {type} url={data.url} isActive />
</button>

<ActionDetails {id} {talentLvl} {data} {type} {addedStats} bind:dialog>
  <div slot="footer" class="py-1">
    <div
      class="flex w-[62px] rounded-full border border-slate-600 p-0.5 opacity-60 transition-colors duration-300 {actionsBg[
        type
      ]}"
    >
      <div
        class="h-7 w-7 translate-x-full rounded-full bg-slate-600 transition-all ease-in"
      />
    </div>
  </div>
</ActionDetails>
