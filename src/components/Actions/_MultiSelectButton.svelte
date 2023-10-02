<script lang="ts">
  // types & misc
  import type { Action, ActionBtnID, ActionValue, Target } from '$lib/types/actions';
  import type { Visions } from '$lib/types/global';
  import type { CharacterSpecificNames } from '$lib/types/characters';
  import type { CurrentCharacter } from '$lib/stores/characterStore';

  // external functions & stores
  import { action } from '$lib/stores/actionStore';
  import { stripStat } from '$lib/helpers/stripStats';
  import { onMount } from 'svelte';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';
  import { getCoefficientFromValues } from '$lib/helpers/getCoefficientFromValues';
  import { getCharacterName } from '$lib/helpers/getCharacterName';
  import { getCombatValue } from '$lib/helpers/getCombatValue';

  // component
  import ActionButton from './ActionButton.svelte';
  import ActionModal from '../Modal/ActionModal.svelte';
  import type { Index_Stats } from '$lib/data/Stats';

  // props
  export let type: Visions | 'weapon' | 'artifact';
  export let data: Action;
  export let id: ActionBtnID;
  export let currentChar: CurrentCharacter;
  export let currentStats: Index_Stats;

  type SELECTED = { [key in string]?: boolean };
  type Stat = { scaling: string; coef: number };

  const target = data.target ?? 'self';
  const cName = getCharacterName(currentChar.selected);
  const combatValue = data.hasLevels ? getCombatValue(data.hasLevels) : null;
  const sourceStats: string[] | null = data.sourceStats ?? null;

  let previousStatValues: any = {};
  let selectedStats: SELECTED = {};
  let isActive = false;
  let addedStats: Stat[] = [];
  let previousTalentLvl: number | null = null;

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
    const foundIndex = addedStats.findIndex((x) => x.scaling === stat.scaling);
    if (foundIndex !== -1) {
      const { scaling, coef } = addedStats[foundIndex];
      action.removeStat(id, target as Target, scaling, coef);
      addedStats.splice(foundIndex, 1);
    }
  }

  function handleClick(stat: ActionValue) {
    selectedStats[stat.scaling] = !selectedStats[stat.scaling];
    if (selectedStats[stat.scaling] === true) {
      addStats(stat);
    } else {
      removeStats(stat);
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

  function resetStats(
    tLvl: number | null,
    isAnyStatChanged: boolean | null,
    constellation: number
  ) {
    if (tLvl !== previousTalentLvl || isAnyStatChanged || constellation) {
      if (addedStats.length > 0) {
        addedStats.forEach((stat: Stat) => {
          removeStats(stat);
          addStats(stat);
        });
      }
      previousTalentLvl = tLvl;
      previousStatValues = { ...currentStats }; // Create a copy of the current stats
    }
  }

  $: resetStats(talentLvl, isAnyStatChanged(), currentChar.constellation);

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

<button on:click={toggleModal} class="relative">
  <ActionButton {type} {isActive} url={data.url} />
  <div class="absolute bottom-0 right-0 z-10 flex -space-x-2.5">
    {#each data.values as value}
      <div
        class="rounded-full bg-slate-800 p-1"
        class:hidden={selectedStats[value.scaling] === false}
      >
        <img
          class="w-4"
          src="/images/elements/{stripStat(value.scaling)}.svg"
          alt="close"
        />
      </div>
    {/each}
  </div>
</button>
<ActionModal
  bind:dialog
  modalTitle={data.name}
  actionType="Elemental Burst"
  buttonType="Select"
  details={data.description ?? ''}
>
  <div class="flex h-full items-center">
    <!-- <li class="h-10 w-10">
        <button
          on:click={clearState}
          class="flex h-full w-full items-center justify-center rounded-full "
        >
          <img class="w-3.5" src="/images/ui/close.svg" alt={'close'} />
        </button>
      </li> -->
    {#each data.values as value}
      <button
        class="flex h-full w-full items-center justify-center bg-slate-600"
        class:bg-slate-600={selectedStats[value.scaling] === true}
        on:click={() => handleClick(value)}
      >
        <img
          class="w-6"
          src="/images/elements/{stripStat(value.scaling)}.svg"
          alt={stripStat(value.scaling)}
        />
      </button>
    {/each}
  </div>
</ActionModal>
