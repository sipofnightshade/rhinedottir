<script lang="ts">
  // types & misc
  import type { Action, ActionBtnID, ActionValue, Target } from '$lib/types/actions';
  import type { Visions } from '$lib/types/global';
  import type { CharacterSpecificNames } from '$lib/types/characters';
  import type { CurrentCharacter } from '$lib/stores/characterStore';

  // external functions & stores
  import { action } from '$lib/stores/actionStore';
  import { stripStat } from '$lib/helpers/stripStats';
  import { onDestroy, onMount } from 'svelte';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';
  import { getCoefficientFromValues } from '$lib/helpers/getCoefficientFromValues';
  import { getCharacterName } from '$lib/helpers/getCharacterName';
  import { getCombatValue } from '$lib/helpers/getCombatValue';

  // component
  import ActionButton from './ActionButton.svelte';
  import ActionModal from '../Modal/ActionModal.svelte';
  import type { All_Stats } from '$lib/data/Stats';

  // props
  export let type: Visions | 'weapon' | 'artifact';
  export let data: Action;
  export let id: ActionBtnID;
  export let character: CurrentCharacter;
  export let stats: Record<All_Stats, number>;

  const target = data.target ?? 'self';
  const cName = getCharacterName(character.selected);
  const talentLvl = data.hasLevels ? character[data.hasLevels] : null;
  const combatValue = data.hasLevels ? getCombatValue(data.hasLevels) : null;

  type SELECTED = { [key in All_Stats]?: boolean };
  type Stat = { scaling: All_Stats; coef: number };

  let selectedStats: SELECTED = {};
  let isActive = false;
  let addedStats: Stat[] = [];

  onMount(() => {
    data.values.forEach(({ scaling }) => {
      selectedStats[scaling] = false;
    });
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
    const result = calcCoefficient(talentValue, stats, source);

    action.addStat(id, target as Target, scaling, result);
    addedStats.push({ scaling, coef: result });
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

  // remove any added stats if they exist
  onDestroy(() => {
    if (addedStats.length > 0) {
      addedStats.forEach((stat: Stat) => {
        action.removeStat(id, target as Target, stat.scaling, stat.coef);
      });
    }
  });

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

  // $: console.log('selectedStats', selectedStats);
  // $: console.log('addedStats', addedStats);
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
