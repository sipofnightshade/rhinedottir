<script lang="ts">
  // types & misc
  import type {
    Action,
    ActionBtnID,
    ActionButtonColor,
    ActionValue,
    Target
  } from '$lib/types/actions';
  import type { CharacterSpecificNames } from '$lib/types/characters';
  import type { CurrentCharacter } from '$lib/stores/characterStore';

  // external functions & stores
  import { action } from '$lib/stores/actionStore';
  import { onMount } from 'svelte';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';
  import { getCoefficientFromValues } from '$lib/helpers/getCoefficientFromValues';
  import { getCombatValue } from '$lib/helpers/getCombatValue';

  // component
  import ActionButton from './ActionButton.svelte';
  import type { Index_Stats } from '$lib/data/Stats';
  import ActionDetails from '../ActionDetails/ActionDetails.svelte';
  import StatImage from '../Desktop/StatImage.svelte';
  import { longpress } from '$lib/actions/longpress';

  // props
  export let type: ActionButtonColor;
  export let data: Action;
  export let id: ActionBtnID;
  export let currentChar: CurrentCharacter;
  export let currentStats: Index_Stats;

  type SELECTED = { [key in string]?: boolean };
  type Stat = { scaling: string; coef: number };

  const target = data.target ?? 'self';
  const cName = currentChar.selected.id;
  const combatValue = data.hasLevels ? getCombatValue(data.hasLevels) : null;
  const sourceStats: string[] | null = data.sourceStats ?? null;

  let previousStatValues: any = {};
  let selectedStats: SELECTED = {};
  let isActive = false;
  let addedStats: Stat[] = [];

  $: talentLvl = data.hasLevels ? currentChar[data.hasLevels] : null;

  onMount(() => {
    data.values.forEach(({ scaling }) => {
      selectedStats[scaling] = false;
    });

    return () => {
      if (addedStats.length > 0) {
        addedStats.forEach((stat: Stat) => {
          action.removeStat(id, target as Target, stat.scaling, stat.coef);
        });
      }
    };
  });

  function addStats(stat: ActionValue) {
    const { scaling, coef, source } = stat;
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

    action.addStat(id, target as Target, scaling, result);
    addedStats = [...addedStats, { scaling, coef: result }];
  }

  function removeStats(stat: ActionValue) {
    const newStats = addedStats.filter((x) => x.scaling !== stat.scaling);
    const { scaling, coef } = addedStats.find((x) => x.scaling === stat.scaling) || {};
    if (scaling && coef) {
      action.removeStat(id, target as Target, scaling, coef);
    }
    addedStats = newStats;
  }

  function handleClick(stat: ActionValue) {
    selectedStats[stat.scaling] = !selectedStats[stat.scaling];
    if (selectedStats[stat.scaling] === true) {
      addStats(stat);
    } else {
      removeStats(stat);
    }
  }

  function recalculateStats() {
    if (addedStats.length > 0) {
      addedStats.forEach((stat: Stat) => {
        removeStats(stat);
        addStats(stat);
      });
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

  // handle Modal
  let dialog: HTMLDialogElement;

  function toggleModal() {
    dialog.showModal();
  }

  $: {
    // check if at least one value in toggle is true
    const toggleValues = Object.values(selectedStats) as Array<boolean>;
    isActive = toggleValues.some((value) => value === true);
  }
</script>

<button
  on:longpress={toggleModal}
  use:longpress={300}
  on:click={toggleModal}
  class="relative"
>
  <ActionButton {type} {isActive} url={data.url} />
  <div class="absolute bottom-0 right-0 z-10 flex -space-x-2.5">
    {#each data.values as value}
      <div
        class="rounded-full bg-slate-800 p-1"
        class:hidden={selectedStats[value.scaling] === false}
      >
        <StatImage stat={value.scaling} />
      </div>
    {/each}
  </div>
</button>

<ActionDetails {id} {talentLvl} {data} {type} {addedStats} hasFooter bind:dialog>
  <svelte:fragment slot="footer">
    <div class="flex gap-1">
      {#each data.values as value}
        <button
          class="flex aspect-square items-center justify-center rounded-lg border border-slate-800 p-2 transition-colors hover:border-slate-600 active:bg-slate-500"
          class:bg-slate-700={selectedStats[value.scaling] === true}
          on:click={() => handleClick(value)}
        >
          <StatImage stat={value.scaling} lg />
        </button>
      {/each}
    </div>
  </svelte:fragment>
</ActionDetails>
