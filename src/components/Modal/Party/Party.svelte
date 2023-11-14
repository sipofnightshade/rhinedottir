<script lang="ts">
  // components
  import PartyLoadout from './PartyLoadout.svelte';

  // stores
  import { loadouts } from '$lib/stores/loadoutsStore';
  import { character } from '$lib/stores/characterStore';
  import LoadoutFilters from '../../Loadout/LoadoutFilters.svelte';
  import type { LoadOutTag } from '$lib/types/loadout';

  // props
  export let id: 'one' | 'two' | 'three';

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
  <LoadoutFilters selected={filter} on:filter={handleFilters} />
  <div class="scrollbar flex flex-col gap-y-4 overflow-y-auto md:pr-0.5">
    {#each filteredData as item (item.id)}
      {#if item.character.id !== $character.selected.id}
        <PartyLoadout {item} {id} />
      {/if}
    {/each}
  </div>
</div>
