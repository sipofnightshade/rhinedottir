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
  import { longpress } from '$lib/actions/longpress';

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
  let selected: ActionValue | undefined;
  let addedStats: { scaling: string; coef: number }[] = [];

  $: talentLvl = data.hasLevels ? currentChar[data.hasLevels] : null;

  function addStats(selected: ActionValue) {
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
    addedStats = [{ scaling, coef: result }];
  }

  function removeStats(stat: ActionValue) {
    const { scaling } = stat;
    if (addedStats[0].scaling === scaling) {
      const coef = addedStats[0].coef;
      action.removeStat(id, target as Target, scaling, coef);
      addedStats = [];
    }
  }

  function handleSelect(stat: ActionValue) {
    // always remove selected if it exists
    if (selected) removeStats(selected);

    if (stat === selected) {
      selected = undefined;
      return;
    }

    if (stat) {
      addStats(stat);
      selected = stat;
    }
  }

  function recalculateStats() {
    if (selected) {
      removeStats(selected);
      addStats(selected);
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

  onDestroy(() => {
    if (selected) {
      removeStats(selected);
    }
    selected = undefined;
  });

  let dialog: HTMLDialogElement;

  function toggleModal() {
    dialog.showModal();
  }
</script>

<div class="relative">
  <ActionButton {type} isActive={selected != undefined} url={data.url} />
  {#if selected != undefined}
    <div class="absolute bottom-0 right-0 flex">
      <div
        class="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 p-0.5"
      >
        <StatImage stat={selected.scaling} />
      </div>
    </div>
  {/if}
  <button
    class="absolute top-0 h-full w-full bg-transparent"
    on:longpress={toggleModal}
    use:longpress={300}
    on:click={toggleModal}
  />
</div>

<ActionDetails {id} {talentLvl} {data} {addedStats} hasFooter {type} bind:dialog>
  <svelte:fragment slot="footer">
    <div class="grid auto-cols-fr grid-flow-col gap-1">
      {#each data.values as item (item.scaling)}
        <button
          on:click={() => handleSelect(item)}
          class="flex aspect-square items-center justify-center rounded-lg border border-slate-800 p-2 transition-colors hover:border-slate-600 active:bg-slate-500"
          class:bg-slate-700={item.scaling === selected?.scaling}
        >
          {#if item.textLabel}
            <span class="text-sm font-bold">{item.textLabel}</span>
          {:else}
            <StatImage stat={item.scaling} lg />
          {/if}
        </button>
      {/each}
    </div>
  </svelte:fragment>
</ActionDetails>
