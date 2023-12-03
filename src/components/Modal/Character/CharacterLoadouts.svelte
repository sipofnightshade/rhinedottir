<script lang="ts">
  // components
  import Loadout from '../../Loadout/Loadout.svelte';
  import EnkaImport from '../../EnkaImport/EnkaImport.svelte';
  import LoadoutFilters from '../../Loadout/LoadoutFilters.svelte';
  import NoLoadouts from '../../EmptyStates/NoLoadouts.svelte';

  //stores
  import { loadouts } from '$lib/stores/loadoutsStore';

  // types
  import type { LoadOutTag } from '$lib/types/loadout';

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
</script>

<div class="flex h-full flex-col gap-4">
  <EnkaImport />
  {#if filteredData.length > 0}
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
  {:else}
    <NoLoadouts />
  {/if}
</div>
