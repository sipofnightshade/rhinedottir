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

  let selectedStats: { scaling: ALL_STATS; coef: number }[] = [];
  let prevStats: { scaling: ALL_STATS; coef: number }[] = [];

  // function clearState() {
  //   if (selectedStats) {
  //     // selectedStats.forEach((stat) => {
  //     //   action.removeStat(stat.scaling, stat.coef);
  //     // });
  //     console.log('ClearState:', selectedStats);
  //     selectedStats = [];
  //   }
  // }

  $: {
    if (selectedStats && selectedStats.length > prevStats.length) {
      let latestStat = selectedStats[selectedStats.length - 1];
      // add latest stat to store
      action.addStat(latestStat.scaling, latestStat.coef);
    } else if (selectedStats && selectedStats.length < prevStats.length) {
      // remove stat from the store

      let removedStat = prevStats.filter((stat) => !selectedStats.includes(stat))[0];
      action.removeStat(removedStat.scaling, removedStat.coef);
    }

    prevStats = selectedStats ? [...selectedStats] : [];
  }

  // handle Modal
  let showModal = false;
  function toggleModal() {
    showModal = !showModal;
  }
</script>

<button on:click={toggleModal} class="relative">
  <ActionButton {element} isActive={selectedStats.length > 0} />
  {#if selectedStats.length > 0}
    <div class="absolute bottom-0 right-0 z-10 flex -space-x-2.5">
      {#each selectedStats as stat}
        <div class="rounded-full bg-slate-800 p-1">
          <img
            class="w-4"
            src="/images/elements/{stripStat(stat.scaling)}.svg"
            alt="close"
          />
        </div>
      {/each}
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
      <!-- <li class="h-10 w-10">
        <button
          on:click={clearState}
          class="flex h-full w-full items-center justify-center rounded-full "
        >
          <img class="w-3.5" src="/images/ui/close.svg" alt={'close'} />
        </button>
      </li> -->
      {#each data.values as stat}
        <li
          class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-600"
          class:bg-slate-600={selectedStats && selectedStats.includes(stat)}
        >
          <input
            type="checkbox"
            bind:group={selectedStats}
            name="multiselect"
            value={stat}
            class="hidden"
            id={stat.scaling}
          />
          <label for={stat.scaling}>
            <img
              class="w-6"
              src="/images/elements/{stripStat(stat.scaling)}.svg"
              alt={stripStat(stat.scaling)}
            />
          </label>
        </li>
      {/each}
    </ul>
  </ActionModal>
{/if}
