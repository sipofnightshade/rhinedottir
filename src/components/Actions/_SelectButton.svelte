<script lang="ts">
  // types & misc
  import type { Action, ActionBtnID, CoefSource, Target } from '$lib/types/actions';
  import type { Visions } from '$lib/types/global';
  import type { CharacterSpecificNames } from '$lib/types/characters';
  import type { CurrentCharacter } from '$lib/stores/characterStore';

  // external functions & stores
  import { action, type All_Stats } from '$lib/stores/actionStore';
  import { stripStat } from '$lib/helpers/stripStats';
  import { onDestroy, onMount } from 'svelte';
  import { calcCoefficient } from '$lib/calculators/calcCoefficient';
  import { getCoefficientFromValues } from '$lib/helpers/getCoefficientFromValues';
  import { getCharacterName } from '$lib/helpers/getCharacterName';
  import { getCombatValue } from '$lib/helpers/getCombatValue';
  import { stats } from '$lib/stores/statsStore';

  // component
  import ActionButton from './ActionButton.svelte';
  import ActionModal from '../Modal/ActionModal.svelte';

  // props
  export let type: Visions | 'weapon' | 'artifact';
  export let data: Action;
  export let id: ActionBtnID;
  export let character: CurrentCharacter;

  type Stat = { scaling: All_Stats; coef: number; source: CoefSource };

  const target = data.target ?? 'self';
  const cName = getCharacterName(character.selected);
  const talentLvl = data.hasLevels ? character[data.hasLevels] : null;
  const combatValue = data.hasLevels ? getCombatValue(data.hasLevels) : null;

  let selected: Stat | undefined;
  let prevSelected: Stat | undefined;

  // Store calculated coefficient value when adding a stat
  let addedStats: { [key: string]: number } = {};

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
    const result = calcCoefficient(
      talentValue,
      $stats[id] as Record<All_Stats, number>,
      source
    );

    action.addStat(id, target as Target, scaling, result);
    // Store the calculated coefficient value
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
    if (prevSelected) {
      removeStats(prevSelected);
    }

    if (selected !== undefined) {
      addStats(selected);
    }

    prevSelected = selected;
  }

  // remove any added stats if
  onDestroy(() => {
    if (selected) {
      removeStats(selected);
    }
  });

  $: {
    onSelect(selected);
  }

  $: console.log('Current AddedStats -', addedStats);

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
        <img
          class="w-4"
          src="/images/elements/{stripStat(selected.scaling)}.svg"
          alt="close"
        />
      </div>
    </div>
  {/if}
</button>
<!-- {#if showModal}
  <ActionModal
    on:click={toggleModal}
    on:escapeClick={toggleModal}
    modalTitle={data.name}
    actionType="Elemental Burst"
    buttonType="Select"
    details={data.description}
  >
    <ul class="flex h-full items-center" class:bg-red-700={false}>
      <li
        class="flex h-full w-full items-center justify-center  bg-slate-600"
        class:bg-slate-600={selected === undefined}
      >
        <input
          type="radio"
          bind:group={selected}
          name="radio"
          id="empty"
          value={undefined}
          class="hidden"
        />
        <label for="empty" class="flex h-full w-full items-center justify-center"
          ><img class="w-3.5" src="/images/ui/close.svg" alt="close" />
        </label>
      </li>
      {#each data.values as item}
        <li
          class="flex h-full w-full items-center justify-center  bg-slate-600"
          class:bg-slate-600={selected === item}
        >
          <input
            type="radio"
            bind:group={selected}
            name="radio"
            id={item.scaling}
            value={item}
            class="hidden"
          />
          <label for={item.scaling} class="flex h-full w-full items-center justify-center"
            ><img
              class="w-6"
              src="/images/elements/{stripStat(item.scaling)}.svg"
              alt={item.scaling}
            />
          </label>
        </li>
      {/each}
    </ul>
  </ActionModal>
{/if} -->
<ActionModal
  bind:dialog
  modalTitle={data.name}
  actionType="Elemental Burst"
  buttonType="Select"
  details={data.description || ''}
>
  <form class="flex h-full items-center" class:bg-red-700={false} method="dialog">
    <div
      class="relative flex h-full w-full items-center justify-center bg-slate-600"
      class:bg-slate-600={selected === undefined}
    >
      <input
        type="radio"
        bind:group={selected}
        name="radio"
        id="empty"
        value={undefined}
        class="hidden"
      />
      <label
        for="empty"
        class="flex h-full w-full cursor-pointer items-center justify-center"
        ><img class="w-3.5" src="/images/ui/close.svg" alt="close" />
      </label>
    </div>
    {#each data.values as item}
      <div
        class="relative flex h-full w-full items-center justify-center bg-slate-600"
        class:bg-slate-600={selected === item}
      >
        <input
          type="radio"
          bind:group={selected}
          name="radio"
          id={item.scaling}
          value={item}
          class="hidden"
        />
        <label
          for={item.scaling}
          class="flex h-full w-full cursor-pointer items-center justify-center"
          ><img
            class="w-6"
            src="/images/elements/{stripStat(item.scaling)}.svg"
            alt={item.scaling}
          />
        </label>
      </div>
    {/each}
  </form>
</ActionModal>
