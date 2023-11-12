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
  class="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-slate-600"
  on:click={toggleModal}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4 fill-slate-300"
    viewBox="0 0 512 512"
  >
    <path
      d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
    />
  </svg>
</button>

<MultiModal bind:dialog>
  <h3 slot="title">Select a loadout</h3>
  <!-- Content -->
  <div class="flex h-full flex-col gap-4">
    <EnkaImport />

    <!-- Filters -->
    <LoadoutFilters selected={filter} on:filter={handleFilters} />
    <!-- Loadouts -->
    <div class="scrollbar flex flex-col gap-y-4 overflow-y-auto md:pr-0.5">
      {#each filteredData as loadout (loadout.id)}
        <Loadout item={loadout} />
      {/each}
    </div>
  </div>
</MultiModal>
