<script lang="ts">
  // types & misc
  import type {
    Action,
    ActionBtnID,
    ActionButtonColor,
    CoefSource,
    Target
  } from '$lib/types/actions';
  import type { CharacterSpecificNames } from '$lib/types/characters';
  import type { CurrentCharacter } from '$lib/stores/characterStore';
  import type { Index_Stats } from '$lib/data/Stats';

  // external functions & stores
  import { action } from '$lib/stores/actionStore';
  import { onDestroy } from 'svelte';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';
  import { getCoefficientFromValues } from '$lib/helpers/getCoefficientFromValues';
  import { getCombatValue } from '$lib/helpers/getCombatValue';

  // component
  import ActionButton from './ActionButton.svelte';
  import ActionDetails from '../ActionDetails/ActionDetails.svelte';
  import StatImage from '../Desktop/StatImage.svelte';
  import Close from '$lib/icons/Close.svelte';

  // props
  export let type: ActionButtonColor;
  export let data: Action;
  export let id: ActionBtnID;
  export let currentChar: CurrentCharacter;
  export let currentStats: Index_Stats;

  type Stat = { scaling: string; coef: number; source: CoefSource };

  const target = data.target ?? 'self';
  const cName = currentChar.selected.id;
  const combatValue = data.hasLevels ? getCombatValue(data.hasLevels) : null;
  const sourceStats: string[] | null = data.sourceStats ?? null;

  let previousStatValues: any = {};
  let selected: any;
  let addedStats: { [key: string]: number } = {};
  let prevSelected: Stat | undefined;

  $: talentLvl = data.hasLevels ? currentChar[data.hasLevels] : null;

  function addStats(selected: Stat) {
    const { scaling, coef, source } = selected;
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
    addedStats[scaling] = result;
    if (prevSelected) {
      removeStats(prevSelected);
    }
  }

  function removeStats(stat: Stat) {
    const { scaling } = stat;
    if (scaling in addedStats) {
      const coef = addedStats[scaling];
      action.removeStat(id, target as Target, scaling, coef);
      delete addedStats[scaling];
    }
  }

  function onSelect(selected: Stat | undefined) {
    if (prevSelected) removeStats(prevSelected);
    if (selected) addStats(selected);
    prevSelected = selected;
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
    if (selected) {
      removeStats(selected);
      addStats(selected);
    }
  }

  $: isAnyStatChanged(), talentLvl, data, currentChar.constellation, recalculateStats();

  // remove any added stats if
  onDestroy(() => {
    if (selected) {
      removeStats(selected);
    }
    selected = undefined;
    prevSelected = undefined;
  });

  $: {
    onSelect(selected);
  }

  let dialog: HTMLDialogElement;

  function toggleModal() {
    dialog.showModal();
  }
</script>

<button on:click={toggleModal} class="relative">
  <ActionButton {type} isActive={selected != undefined} url={data.url} />
  {#if selected != undefined}
    <div class="absolute bottom-0 right-0 z-10 flex">
      <div class="rounded-full bg-slate-800 p-1">
        <StatImage stat={selected.scaling} />
      </div>
    </div>
  {/if}
</button>

<ActionDetails {id} {data} bind:dialog>
  <svelte:fragment slot="footer">
    <div class="grid auto-cols-max grid-flow-col gap-1">
      <button
        on:click={() => (selected = undefined)}
        class="flex h-full items-center justify-center rounded-lg p-3.5 transition-all hover:bg-slate-700 focus:bg-slate-800"
      >
        <Close class="w-3 fill-slate-200" />
      </button>
      {#each data.values as item (item.scaling)}
        <button
          on:click={() => (selected = item)}
          class="flex aspect-square items-center justify-center rounded-lg p-2 transition-all"
          class:bg-slate-500={item.scaling === selected?.scaling}
          class:hover:bg-slate-700={item.scaling !== selected?.scaling}
        >
          <StatImage stat={item.scaling} lg />
        </button>
      {/each}
    </div>
  </svelte:fragment>
</ActionDetails>
