<script lang="ts">
  // components
  import MultiModal from '../MultiModal/MultiModal.svelte';
  import Loadout from './Loadout.svelte';
  import EnkaImport from '../EnkaImport/EnkaImport.svelte';
  import LoadoutFilters from './LoadoutFilters.svelte';

  //stores
  import { loadouts } from '$lib/stores/loadoutsStore';

  // types
  import type { LoadOutTag } from '$lib/types/loadout';

  let dialog: HTMLDialogElement;

  // Filter Logic
  let filter: LoadOutTag | '' = '';

  function handleFilters(event: any) {
    if (event.detail.selected === filter) {
      filter = '';
    } else {
      filter = event.detail.selected;
    }
  }

  $: filteredData = filter ? $loadouts.filter((item) => item.tag === filter) : $loadouts;

  function toggleModal() {
    dialog.showModal();
  }
</script>

<button
  class="flex items-center gap-x-1.5 rounded-full border border-slate-600 bg-slate-700 transition-colors hover:border-slate-500 active:bg-slate-600 md:w-full md:p-0.5"
  on:click={toggleModal}
>
  <div
    class="flex h-12 w-12 items-center justify-center rounded-full xs:bg-slate-800 md:h-9 md:w-9"
  >
    <img class="h-[22px]" src="/images/ui/UI_BtnIcon_AvatarList.png" alt="UI Team" />
  </div>
  <p class="mr-2.5 hidden font-bold xs:block">Load</p>
</button>

<MultiModal bind:dialog>
  <h3 slot="title">Select a loadout</h3>
  <!-- Content -->
  <div class="flex h-full flex-col gap-4">
    <EnkaImport />

    <!-- Filters -->
    <LoadoutFilters selected={filter} on:filter={handleFilters} />
    <!-- Loadouts -->
    <div
      class="scrollbar flex flex-col gap-y-4 overflow-y-auto pb-0.5 md:gap-y-3 md:pr-2"
    >
      {#each filteredData as loadout (loadout.id)}
        <Loadout item={loadout} />
      {/each}
    </div>
  </div>
</MultiModal>
