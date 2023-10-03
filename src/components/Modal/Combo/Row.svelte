<script lang="ts">
  import { writable } from 'svelte/store';
  import { SortableList } from '@jhubbardsf/svelte-sortablejs';
  import { talents } from '$lib/stores/talentStore';
  import { createPopover } from 'svelte-headlessui';
  import Transition from 'svelte-transition';

  // components
  import ComboAddButton from './ComboAddButton.svelte';
  import ComboButton from './ComboButton.svelte';
  import ShortModal from '../ShortModal.svelte';
  import RowHeading from './RowHeading.svelte';
  import TalentSection from './TalentSection.svelte';

  // types
  type CharacterID = 'main' | 'one' | 'two' | 'three';
  type TalentType = 'normal' | 'charged' | 'plunge' | 'special' | 'skill' | 'burst';
  type Buttons = { id: CharacterID; type: TalentType; index: number; btnID: string }[];

  // props
  export let row: any;

  // main functionality
  let dialog: HTMLDialogElement;
  let rowButtons: Buttons = [];
  let totalDamage = writable(0);
  let deletable = false;

  const popover = createPopover({});

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

  // function handleSort(newItems: Buttons) {
  //   rowButtons = newItems;
  // }

  function handleEditButton() {
    deletable = !deletable;
  }
</script>

<section class="relative my-2 w-full border-b border-slate-700 pb-2">
  <RowHeading title={row.title} />

  <div class="flex w-full items-center justify-start">
    <SortableList
      animation={300}
      ghostClass="opacity-0"
      chosenClass="border-gray-300"
      class="horizontalScrollbar grid h-full w-fit auto-cols-max grid-flow-col items-center overflow-x-auto pb-2"
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
      <!-- <ComboAddButton on:click={handleComboAddButton} {deletable} /> -->
      <button
        use:popover.button
        class="mr-1 flex h-8 w-8 min-w-[32px] items-center justify-center rounded-full bg-slate-700"
        title={deletable ? 'Clear All' : 'Add Buttons!'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 transition-transform"
          class:rotate-45={deletable}
          viewBox="0 0 448 512"
          class:fill-slate-300={!deletable}
          class:fill-red-500={deletable}
        >
          <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
          />
        </svg>
      </button>
    </SortableList>
    <Transition
      show={$popover.expanded}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        use:popover.panel
        class="absolute left-1/2 top-24 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"
      >
        <!-- <button on:click={popover.close}>Close</button> -->
        <div class="rounded-xl border border-slate-500 bg-slate-800 p-4">
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
        </div>
      </div>
    </Transition>
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
