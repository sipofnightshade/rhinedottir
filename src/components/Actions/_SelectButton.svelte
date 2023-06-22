<script lang="ts">
  import type { Action } from '$lib/types/talents';
  import type { Visions } from '$lib/types/global';
  import type { ALL_STATS } from '$lib/types/talents';
  import { action } from '$lib/stores/actionStore';
  import { stripStat } from '$lib/helpers/stripStats';

  import ActionModal from '../Modal/ActionModal.svelte';
  import ActionButton from './ActionButton.svelte';

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

  let dialog: HTMLDialogElement;

  function toggleModal() {
    dialog.showModal();
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
  details={data.description}
>
  <form class="flex h-full items-center" class:bg-red-700={false} method="dialog">
    <div
      class="relative flex h-full w-full items-center  justify-center bg-slate-600"
      class:bg-slate-600={selected === undefined}
    >
      <input
        type="radio"
        bind:group={selected}
        name="radio"
        id="empty"
        value={undefined}
        class="opacity-0"
      />
      <span class="absolute flex h-full w-full items-center justify-center"
        ><img class="w-3.5" src="/images/ui/close.svg" alt="close" />
      </span>
    </div>
    {#each data.values as item}
      <div
        class="relative flex h-full w-full items-center  justify-center bg-slate-600"
        class:bg-slate-600={selected === item}
      >
        <input
          type="radio"
          bind:group={selected}
          name="radio"
          id={item.scaling}
          value={item}
          class="opacity-0"
        />
        <span class="absolute flex h-full w-full items-center justify-center"
          ><img
            class="w-6"
            src="/images/elements/{stripStat(item.scaling)}.svg"
            alt={item.scaling}
          />
        </span>
      </div>
    {/each}
  </form>
</ActionModal>
