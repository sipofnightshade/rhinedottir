<script lang="ts">
  import type { Action } from '$lib/types/talents';
  import type { Visions } from '$lib/types/global';
  import ActionButton from './ActionButton.svelte';
  import ActionModal from '../ActionModal/ActionModal.svelte';
  import type { ALL_STATS } from '$lib/types/talents';
  import { action } from '$lib/stores/actionStore';
  import { stripStat } from '$lib/helpers/stripStats';
  import { onMount } from 'svelte';

  export let element: Visions;
  export let data: Action;

  type SELECTED = { [key in ALL_STATS]?: boolean };

  let selectedStats: SELECTED = {};

  onMount(() => {
    data.values.forEach(({ scaling }) => {
      selectedStats[scaling] = false;
    });
  });

  function handleClick(stat: { scaling: ALL_STATS; coef: number }) {
    selectedStats[stat.scaling] = !selectedStats[stat.scaling];
    if (selectedStats[stat.scaling] === true) {
      action.addStat(stat.scaling, stat.coef);
    } else {
      action.removeStat(stat.scaling, stat.coef);
    }
  }

  // handle Modal
  let showModal = false;
  function toggleModal() {
    showModal = !showModal;
  }
  console.log(selectedStats);

  // $: console.log('Selected', selectedStats);
</script>

<button on:click={toggleModal} class="relative">
  <ActionButton {element} isActive={true} />
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
{#if showModal}
  <ActionModal
    on:click={toggleModal}
    on:escapeClick={toggleModal}
    modalTitle={data.name}
    actionType="Elemental Burst"
    buttonType="Multi-Select"
    details={'hi'}
  >
    <ul class="flex space-x-1" class:bg-red-700={false}>
      <!-- <li class="h-10 w-10">
        <button
          on:click={clearState}
          class="flex h-full w-full items-center justify-center rounded-full "
        >
          <img class="w-3.5" src="/images/ui/close.svg" alt={'close'} />
        </button>
      </li> -->
      {#each data.values as value}
        <li>
          <button
            class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-600"
            class:bg-slate-600={selectedStats[value.scaling] === true}
            on:click={() => handleClick(value)}
          >
            <img
              class="w-6"
              src="/images/elements/{stripStat(value.scaling)}.svg"
              alt={stripStat(value.scaling)}
            />
          </button>
        </li>
      {/each}
    </ul>
  </ActionModal>
{/if}
