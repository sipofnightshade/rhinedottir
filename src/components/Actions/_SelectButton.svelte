<script lang="ts">
  import type { Action, Target } from '$lib/types/actions';
  import type { Visions } from '$lib/types/global';
  import type { ALL_STATS } from '$lib/types/talents';
  import { action, type ActionId } from '$lib/stores/actionStore';
  import { stripStat } from '$lib/helpers/stripStats';

  import ActionModal from '../Modal/ActionModal.svelte';
  import ActionButton from './ActionButton.svelte';
  import { onDestroy } from 'svelte';

  export let type: Visions | 'other';
  export let data: Action;
  export let id: ActionId;

  type Stat = { scaling: ALL_STATS; coef: number };

  $: target = data.target ?? 'self';

  let selected: Stat | undefined;
  let prevSelected: Stat | undefined;

  function onSelect(selected: Stat | undefined) {
    if (selected !== undefined) {
      action.addStat(id, target as Target, selected.scaling, selected.coef);
      if (prevSelected) {
        action.removeStat(id, target as Target, prevSelected.scaling, prevSelected.coef);
      }
    } else {
      if (prevSelected !== undefined) {
        action.removeStat(id, target as Target, prevSelected.scaling, prevSelected.coef);
      }
    }

    prevSelected = selected;
  }

  // remove any added stats if
  onDestroy(() => {
    if (selected) {
      action.removeStat(id, target as Target, selected.scaling, selected.coef as number);
    }
  });

  $: {
    onSelect(selected);
  }

  let dialog: HTMLDialogElement;

  function toggleModal() {
    dialog.showModal();
  }
</script>

<button on:click={toggleModal} class="relative">
  <ActionButton {type} isActive={selected != undefined} />
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
