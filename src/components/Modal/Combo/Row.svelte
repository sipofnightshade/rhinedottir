<script lang="ts">
  import { writable } from 'svelte/store';
  import { SortableList } from '@jhubbardsf/svelte-sortablejs';
  import { talents } from '$lib/stores/talentStore';
  import { createPopover } from 'svelte-headlessui';
  import { createEventDispatcher, onMount } from 'svelte';
  import { uid } from 'uid';
  import { escape } from '$lib/actions/escape';

  // components
  import ComboButton from './ComboButton.svelte';
  import RowHeading from './RowHeading.svelte';
  import Transition from 'svelte-transition';
  import Close from '$lib/icons/Close.svelte';
  import ComboTabs from './ComboTabs.svelte';
  import Delete from '$lib/icons/Delete.svelte';

  // types
  type CharacterID = 'main' | 'one' | 'two' | 'three';
  type TalentType = 'normal' | 'charged' | 'plunge' | 'special' | 'skill' | 'burst';
  type Buttons = { id: CharacterID; type: TalentType; index: number; btnID: string }[];

  // props
  export let row: any;
  export let index: number;

  const initialDMG = {
    pyro: 0,
    hydro: 0,
    electro: 0,
    dendro: 0,
    geo: 0,
    cryo: 0,
    anemo: 0,
    physical: 0,
    total: 0
  };

  // main functionality
  let rowButtons: Buttons = [];
  let damage = writable({ ...initialDMG });
  let deletable = false;

  const dispatch = createEventDispatcher();
  const popover = createPopover({});

  onMount(() => {
    if (index === 0) {
      rowButtons = [
        ...rowButtons,
        { index: 0, id: 'main', type: 'normal', btnID: uid() }
      ];
    }
  });

  function deleteRow() {
    dispatch('deleteRow', { rowId: row.id });
    // if the row buttons.length > 3, prompt them
    // and ask if they're sure they want to delete
    // the row.
  }

  function addButton(event: CustomEvent) {
    const { index, id, type, btnID } = event.detail;
    rowButtons = [...rowButtons, { index, id, type, btnID }];
  }

  function removeButton(event: CustomEvent) {
    const { btnID } = event.detail;
    rowButtons = rowButtons.filter((button) => button.btnID !== btnID);
  }

  function handleClearAll() {
    rowButtons = [];
    $damage = { ...initialDMG };
    deletable = false;
  }

  function handleEditButton() {
    deletable = !deletable;
  }

  function handleEscapeClick() {
    if (deletable) {
      deletable = false;
    }
  }

  $: totalDamageSum = Object.values($damage).reduce((a, c) => {
    return a + c;
  }, 0);
</script>

<section
  use:escape={handleEscapeClick}
  class="group relative my-2 w-full border-b border-slate-700 pb-3"
>
  <div class="flex items-center justify-between gap-2">
    <RowHeading title={row.title} />
    <button
      class="w-fit p-2 opacity-0 transition-opacity group-hover:opacity-100"
      on:click={deleteRow}
    >
      <Close class="h-3 w-3 fill-slate-300" />
    </button>
  </div>

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
          {btnID}
          {deletable}
          {damage}
          on:removeBtn={removeButton}
        />
      {/each}
      {#if !deletable}
        <button
          use:popover.button
          class="mr-1 flex h-8 w-8 min-w-[32px] items-center justify-center rounded-full bg-slate-700 fill-slate-300"
        >
          <Close class="h-2.5 w-2.5 -rotate-45 fill-slate-300" />
        </button>
      {:else}
        <button
          class="mr-1 flex h-8 w-8 min-w-[32px] items-center justify-center rounded-full bg-slate-700"
          on:click={handleClearAll}
          title="Clear All"
        >
          <Delete class="h-3.5 fill-red-600" />
        </button>
      {/if}
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
        class="triangle absolute left-1/2 top-28 z-10 mt-3 w-64 max-w-xs -translate-x-1/2 transform px-4 xs-300:w-80 sm:px-0 lg:max-w-3xl"
      >
        <div class="rounded-xl border border-slate-500 bg-slate-800 p-2 xs-300:p-4">
          <ComboTabs on:addbutton={addButton} />
        </div>
      </div>
    </Transition>
  </div>
  <div class="mx-0.5 mt-1 flex items-center justify-between">
    <div class="flex gap-1">
      <span class="">{Math.round(totalDamageSum).toLocaleString() || '0'}</span>
      <img
        class="ml-2 h-5 w-5 self-center"
        src="/images/elements/anemo.svg"
        alt="element"
      />
      <span class=" text-anemo">{Math.round($damage.anemo).toLocaleString() || '0'}</span>
      <img
        class="ml-2 h-5 w-5 self-center"
        src="/images/elements/pyro.svg"
        alt="element"
      />
      <span class=" text-pyro">{Math.round($damage.pyro).toLocaleString() || '0'}</span>
      <img
        class="ml-2 h-5 w-5 self-center"
        src="/images/elements/hydro.svg"
        alt="element"
      />
      <span class=" text-hydro">{Math.round($damage.hydro).toLocaleString() || '0'}</span>

      <img
        class="ml-2 h-5 w-5 self-center"
        src="/images/elements/electro.svg"
        alt="element"
      />
      <span class=" text-electro"
        >{Math.round($damage.electro).toLocaleString() || '0'}</span
      >

      <img
        class="ml-2 h-5 w-5 self-center"
        src="/images/elements/cryo.svg"
        alt="element"
      />
      <span class=" text-cryo">{Math.round($damage.cryo).toLocaleString() || '0'}</span>
      <!-- 
      <img
        class="ml-2 h-5 w-5 self-center"
        src="/images/elements/geo.svg"
        alt="element"
      />
      <span class=" text-geo">{Math.round($damage.geo).toLocaleString() || '0'}</span>

      <img
        class="ml-2 h-5 w-5 self-center"
        src="/images/elements/dendro.svg"
        alt="element"
      />
      <span class=" text-dendro">{Math.round($damage.dendro).toLocaleString() || '0'}</span> -->

      <img
        class="ml-2 h-5 w-5 self-center"
        src="/images/elements/physical.svg"
        alt="element"
      />
      <span class="">{Math.round($damage.physical).toLocaleString() || '0'}</span>
    </div>
    <button
      on:click={handleEditButton}
      class="rounded border border-slate-500 px-3 py-1"
      class:border-red-400={deletable}
      class:text-red-400={deletable}
    >
      {deletable ? 'Cancel' : 'Edit'}
    </button>
  </div>
</section>

<style lang="postcss">
  .triangle:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid theme(colors.slate.400);
    top: -12px;
    left: 47%;
    margin-right: 12px;
    z-index: 5;
  }
  .triangle:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid theme(colors.slate.800);
    top: -11px;
    left: 47%;
    margin-right: 12px;
    z-index: 5;
  }
</style>
