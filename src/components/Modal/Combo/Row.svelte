<script lang="ts">
  import TalentSection from './TalentSection.svelte';
  import { writable } from 'svelte/store';
  import reorderable from '$lib/actions/reorderable';

  // misc
  import { talents } from '$lib/stores/talentStore';
  // import { onMount } from 'svelte';

  // components
  import ComboAddButton from './ComboAddButton.svelte';
  import ComboButton from './ComboButton.svelte';
  import ShortModal from '../ShortModal.svelte';
  import RowHeading from './RowHeading.svelte';

  type CharacterID = 'main' | 'one' | 'two' | 'three';
  type TalentType = 'normal' | 'charged' | 'plunge' | 'special' | 'skill' | 'burst';

  export let row: any;

  type Buttons = { id: CharacterID; type: TalentType; index: number; btnID: string }[];

  // main functionality
  let dialog: HTMLDialogElement;
  let rowButtons: Buttons = [];
  let totalDamage = writable(0);
  let deletable = false;

  function addButton(event: CustomEvent) {
    const { index, id, type, btnID } = event.detail;
    rowButtons = [...rowButtons, { index, id, type, btnID }];
  }

  function removeButton(event: CustomEvent) {
    const { btnID } = event.detail;
    const result = rowButtons.filter((button) => button.btnID !== btnID);
    rowButtons = result;
  }

  // onMount(() => {
  //   if (row.id === 1) {
  //     rowButtons = [...rowButtons, { index: 0, id: 'main', type: 'normal' }];
  //   }
  // });

  function handleComboAddButton() {
    if (deletable) {
      rowButtons = [];
      deletable = false;
      $totalDamage = 0;
    } else {
      dialog.showModal();
    }
  }

  function handleSort(newItems: Buttons) {
    rowButtons = newItems;
  }

  function handleEditButton() {
    deletable = !deletable;
  }
</script>

<section class="my-2 w-full border-b border-slate-700 pb-2">
  <RowHeading title={row.title} />

  <div class="flex w-full items-center justify-start">
    <div
      class="rowScrollbar grid h-full w-fit auto-cols-max grid-flow-col items-center overflow-x-auto pb-2"
      use:reorderable={() => handleSort(rowButtons)}
    >
      {#each rowButtons as { id, type, index, btnID } (btnID)}
        <ComboButton
          btn={$talents[id][type][index]}
          {totalDamage}
          {btnID}
          {deletable}
          on:removeBtn={removeButton}
        />
      {/each}
      <ComboAddButton on:click={handleComboAddButton} {deletable} />
    </div>
  </div>
  <div class="mx-0.5 mt-1 flex items-center justify-between">
    <div class="flex gap-1">
      <img
        class="h-5 w-5 self-center"
        src="/images/elements/physical.svg"
        alt="element"
      />
      <span class="ml-0.5">{Math.round($totalDamage).toLocaleString() || '0'}</span>
    </div>
    <button
      on:click={handleEditButton}
      class="rounded border border-slate-500 px-3 py-1"
      class:animate-pulse={deletable}
      class:border-red-400={deletable}
      class:text-red-400={deletable}
      >Edit
    </button>
  </div>
</section>

<ShortModal bind:dialog modalTitle="Talents">
  <TalentSection on:addbutton={addButton} type="normal" id="main" />
  <TalentSection on:addbutton={addButton} type="charged" id="main" />
  <TalentSection on:addbutton={addButton} type="plunge" id="main" />
  <TalentSection on:addbutton={addButton} type="skill" id="main" />
  <TalentSection on:addbutton={addButton} type="burst" id="main" />

  <TalentSection on:addbutton={addButton} type="skill" id="one" />
  <TalentSection on:addbutton={addButton} type="burst" id="one" />

  <TalentSection on:addbutton={addButton} type="skill" id="two" />
  <TalentSection on:addbutton={addButton} type="burst" id="two" />

  <TalentSection on:addbutton={addButton} type="skill" id="three" />
  <TalentSection on:addbutton={addButton} type="burst" id="three" />
</ShortModal>

<style>
  @media (min-width: 768px) {
    .rowScrollbar::-webkit-scrollbar {
      width: 8px;
      height: 5px;
      margin-top: 10px;
    }

    .rowScrollbar::-webkit-scrollbar-track {
      border-radius: 12px;
      background-color: #e2e8f0;
      padding: 1px;
    }

    .rowScrollbar::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: #334155;
    }
  }
</style>
