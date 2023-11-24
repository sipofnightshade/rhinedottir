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
  import ActionDetails from '../ActionDetails/ActionDetails.svelte';

  // other
  import { action } from '$lib/stores/actionStore';
  import { onMount } from 'svelte';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';
  import { getCombatValue } from '$lib/helpers/getCombatValue';
  import { getCoefficientFromValues } from '$lib/helpers/getCoefficientFromValues';
  import { character } from '$lib/stores/characterStore';
  import { party } from '$lib/stores/partyStore';
  import { getRegionCount } from '$lib/helpers/getRegionCount';
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

  let isInitialized = false; // Add a flag to track component initialization

  // add stats based on the number of elements if same / diff etc ( make function for this )
  let addedStats: { scaling: string; coef: number }[] = [];

  let previousStatValues: any = {};
  $: talentLvl = data.hasLevels ? currentChar[data.hasLevels] : null;
  // region button exclusive
  $: partyRegions = [
    $character.selected.region,
    $party.one?.character.selected.region ?? 'none',
    $party.two?.character.selected.region ?? 'none',
    $party.three?.character.selected.region ?? 'none'
  ];
  $: regionCondition = data.regionCondition ?? 'same';
  $: statIndex = getRegionCount(
    partyRegions,
    regionCondition,
    currentChar.selected.region
  );

  function addStats() {
    data.values.forEach((value) => {
      const { scaling, coef, source } = value;
      // if coef length is less than statIndex then set the index to the coef length.
      const coefIndex =
        statIndex > (coef as number[]).length
          ? (coef as number[]).length - 1
          : statIndex - 1;

      const talentValue =
        talentLvl && combatValue
          ? getCoefficientFromValues(
              combatValue,
              cName as CharacterSpecificNames,
              (coef as number[])[coefIndex],
              talentLvl
            )
          : (coef as number[])[coefIndex];

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
    if (addedStats.length > 0) {
      removeStats();
      addStats();
    }
  }

  $: isAnyStatChanged(), talentLvl, currentChar.constellation, recalculateStats();

  $: {
    if (isInitialized && statIndex) {
      removeStats();
      addStats();
    }
  }

  // handle longPress modal
  let dialog: HTMLDialogElement;
  const handleLongPress = () => {
    dialog.showModal();
  };

  onMount(() => {
    addStats();
    // this return might be problematic if the state is reset when character changes
    // because then this might run after and substract values that were not added
    isInitialized = true;

    return () => {
      removeStats();
    };
  });

  $: console.log(addedStats);
</script>

<button
  on:longpress={handleLongPress}
  use:longpress={300}
  data-testid="passive-action-button"
>
  <ActionButton {type} url={data.url} isActive />
</button>

<ActionDetails {id} {talentLvl} {data} {addedStats} {type} bind:dialog>
  <div slot="footer" class="py-1">
    <div
      class="flex w-[62px] rounded-full border border-slate-600 p-0.5 opacity-60 transition-colors duration-300 {actionsBg[
        type
      ]}"
    >
      <div
        class="h-7 w-7 translate-x-full rounded-full bg-slate-200 transition-all ease-in"
      />
    </div>
  </div>
</ActionDetails>
