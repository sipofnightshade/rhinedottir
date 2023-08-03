<script lang="ts">
  import type { Action, Target } from '$lib/types/actions';
  import type { Visions } from '$lib/types/global';
  import type { ALL_STATS } from '$lib/types/talents';

  import { action, type ActionId } from '$lib/stores/actionStore';
  import { stripStat } from '$lib/helpers/stripStats';
  import { onDestroy, onMount } from 'svelte';

  // component imports
  import ActionButton from './ActionButton.svelte';
  import ActionModal from '../Modal/ActionModal.svelte';

  export let type: Visions | 'other';
  export let data: Action;
  export let id: ActionId;

  $: target = data.target ?? 'self';

  type SELECTED = { [key in ALL_STATS]?: boolean };
  type STAT = { scaling: ALL_STATS; coef: number | number[] };

  let selectedStats: SELECTED = {};
  let isActive = false;
  let addedStats: STAT[] = [];

  onMount(() => {
    data.values.forEach(({ scaling }) => {
      selectedStats[scaling] = false;
    });
  });

  function handleClick(stat: STAT) {
    selectedStats[stat.scaling] = !selectedStats[stat.scaling];
    if (selectedStats[stat.scaling] === true) {
      action.addStat(id, target as Target, stat.scaling, stat.coef as number);
      addedStats.push(stat);
    } else {
      action.removeStat(id, target as Target, stat.scaling, stat.coef as number);
      addedStats = addedStats.filter((s) => s.scaling !== stat.scaling);
    }
  }

  // remove any added stats if
  onDestroy(() => {
    addedStats.forEach((stat: STAT) => {
      action.removeStat(id, target as Target, stat.scaling, stat.coef as number);
    });
  });

  // handle Modal
  let dialog: HTMLDialogElement;

  function toggleModal() {
    dialog.showModal();
  }

  $: {
    // check if at least one value in toggle is true
    const toggleValues = Object.values(selectedStats) as Array<boolean>;
    isActive = toggleValues.some((value) => value === true);
  }
</script>

<button on:click={toggleModal} class="relative">
  <ActionButton {type} {isActive} />
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
<ActionModal
  bind:dialog
  modalTitle={data.name}
  actionType="Elemental Burst"
  buttonType="Select"
  details={data.description ?? ''}
>
  <div class="flex h-full items-center">
    <!-- <li class="h-10 w-10">
        <button
          on:click={clearState}
          class="flex h-full w-full items-center justify-center rounded-full "
        >
          <img class="w-3.5" src="/images/ui/close.svg" alt={'close'} />
        </button>
      </li> -->
    {#each data.values as value}
      <button
        class="flex h-full w-full items-center justify-center bg-slate-600"
        class:bg-slate-600={selectedStats[value.scaling] === true}
        on:click={() => handleClick(value)}
      >
        <img
          class="w-6"
          src="/images/elements/{stripStat(value.scaling)}.svg"
          alt={stripStat(value.scaling)}
        />
      </button>
    {/each}
  </div>
</ActionModal>
