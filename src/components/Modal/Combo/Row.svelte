<script lang="ts">
  import TalentSection from './TalentSection.svelte';
  import { writable } from 'svelte/store';
  // misc
  import { talents } from '$lib/stores/talentStore';
  // components
  import ComboAddButton from './ComboAddButton.svelte';
  import ComboButton from './ComboButton.svelte';
  import ShortModal from '../ShortModal.svelte';
  import { onMount } from 'svelte';

  type CharacterID = 'main' | 'one' | 'two' | 'three';
  type TalentType = 'normal' | 'charged' | 'plunge' | 'special' | 'skill' | 'burst';

  export let row: any;

  let dialog: HTMLDialogElement;
  let rowButtons: { id: CharacterID; type: TalentType; index: number }[] = [];
  let totalDamage = writable(0);

  function addButton(event: CustomEvent) {
    const { index, id, type } = event.detail;
    rowButtons = [...rowButtons, { index, id, type }];
  }

  onMount(() => {
    rowButtons = [...rowButtons, { index: 0, id: 'main', type: 'normal' }];
  });

  // handle modal
  function toggleModal() {
    dialog.showModal();
  }
</script>

<section class="my-2 w-full border-b border-slate-700 pb-2">
  <h3
    class="mb-2 w-fit min-w-[120px] underline-offset-2 hover:underline"
    contenteditable="true"
    bind:textContent={row.title}
  />

  <div class="flex w-full items-center overflow-x-auto">
    {#each rowButtons as { id, type, index }, i (i)}
      <ComboButton btn={$talents[id][type][index]} {totalDamage} />
    {/each}
    <ComboAddButton on:click={toggleModal} />
  </div>
  <div class="flex justify-between">
    <div class="mt-2 flex gap-1">
      <img
        class="h-5 w-5 self-center"
        src="/images/elements/physical.svg"
        alt="element"
      />
      <span>{Math.round($totalDamage).toLocaleString() || '-'}</span>
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
