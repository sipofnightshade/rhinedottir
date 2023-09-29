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

  function addButton(event: CustomEvent) {
    const { index, id, type, btnID } = event.detail;
    rowButtons = [...rowButtons, { index, id, type, btnID }];
  }

  // onMount(() => {
  //   if (row.id === 1) {
  //     rowButtons = [...rowButtons, { index: 0, id: 'main', type: 'normal' }];
  //   }
  // });

  // handle modal
  function toggleModal() {
    dialog.showModal();
  }

  function handleSort(newItems: Buttons) {
    rowButtons = newItems;
  }
</script>

<section class="my-2 w-full border-b border-slate-700 pb-2">
  <RowHeading title={row.title} />

  <div class="flex w-full items-center justify-start overflow-x-auto">
    <div
      class="flex w-fit overflow-x-auto"
      use:reorderable={() => handleSort(rowButtons)}
    >
      {#each rowButtons as { id, type, index, btnID } (btnID)}
        <ComboButton btn={$talents[id][type][index]} {totalDamage} />
      {/each}
    </div>
    <ComboAddButton on:click={toggleModal} />
  </div>
  <div class="ml-0.5">
    <div class="mt-2 flex gap-1">
      <img
        class="h-5 w-5 self-center"
        src="/images/elements/physical.svg"
        alt="element"
      />
      <span class="ml-0.5">{Math.round($totalDamage).toLocaleString() || '-'}</span>
    </div>
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
