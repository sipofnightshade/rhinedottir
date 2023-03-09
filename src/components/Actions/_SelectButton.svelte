<script lang="ts">
  import type { Action } from '$lib/types/talents';
  import type { Visions } from '$lib/types/global';
  import ActionButton from './ActionButton.svelte';
  import ActionModal from '../ActionModal/ActionModal.svelte';
  import type { ALL_STATS } from '$lib/types/talents';
  import { action } from '$lib/stores/actionStore';
  import { stripStat } from '$lib/helpers/stripStats';

  export let element: Visions;
  export let data: Action;

  let selected: { scaling: ALL_STATS; coef: number } | undefined;
  let prevSelected: { scaling: ALL_STATS; coef: number } | undefined;

  function onSelect(selected: { scaling: ALL_STATS; coef: number } | undefined) {
    if (selected !== undefined) {
      action.addStat(selected.scaling, selected.coef);
      //   console.log(`ADD -> ${selected.scaling}`);
      if (prevSelected) {
        action.removeStat(prevSelected.scaling, prevSelected.coef);
        // console.log(`MINUS -> ${prevSelected.scaling}`);
      }
    } else {
      if (prevSelected !== undefined) {
        // console.log(`MINUS -> ${prevSelected.scaling}`);
        action.removeStat(prevSelected.scaling, prevSelected.coef);
      }
    }

    prevSelected = selected;
  }

  $: {
    onSelect(selected);
  }

  // handle Modal
  let showModal = false;
  function toggleModal() {
    showModal = !showModal;
  }
</script>

<button on:click={toggleModal} class="relative">
  <ActionButton {element} isActive={selected != undefined} />
  {#if selected != undefined}
    <div class="absolute bottom-0 right-0 z-10 flex ">
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
{#if showModal}
  <ActionModal
    on:click={toggleModal}
    on:escapeClick={toggleModal}
    modalTitle={data.name}
    actionType="Elemental Burst"
    buttonType="Select"
    details={data.description}
  >
    <ul class="flex space-x-1" class:bg-red-700={false}>
      <li
        class="flex h-10 w-10 items-center justify-center rounded-full"
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
        <label for="empty"
          ><img class="w-3.5" src="/images/ui/close.svg" alt="close" />
        </label>
      </li>
      {#each data.values as item}
        <li
          class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-600"
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
          <label for={item.scaling}
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
{/if}
