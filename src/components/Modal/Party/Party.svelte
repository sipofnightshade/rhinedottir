<script lang="ts">
  // components
  import PartyLoadout from './PartyLoadout.svelte';
  import EnkaImport from '../../EnkaImport/EnkaImport.svelte';
  import LoadoutFilters from '../../Loadout/LoadoutFilters.svelte';
  import NoLoadouts from '../../EmptyStates/NoLoadouts.svelte';

  // stores
  import { loadouts } from '$lib/stores/loadoutsStore';
  import { character } from '$lib/stores/characterStore';

  // types
  import type { LoadOutTag } from '$lib/types/loadout';

  // props
  export let id: 'one' | 'two' | 'three';
  export let dialog: HTMLDialogElement;

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
      {#each filteredData as item (item.id)}
        {#if item.character.id !== $character.selected.id}
          <PartyLoadout {item} {id} {dialog} />
        {/if}
      {/each}
    </div>
  {:else}
    <NoLoadouts />
  {/if}
</div>
