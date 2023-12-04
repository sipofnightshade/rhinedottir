<script lang="ts">
  import type { ArtifactStats, ArtifactType } from '$lib/types/artifacts';
  import { artifactStorage } from '$lib/stores/artifactStorageStore';
  import StorageFilters from './StorageFilters.svelte';

  import StorageButton from './StorageButton.svelte';
  import ArtifactImport from './ArtifactImport.svelte';

  export let type: ArtifactType;
  // filter data
  const basefilters: ArtifactStats[] = [
    'atk%',
    'def%',
    'hp%',
    'em',
    'critrate',
    'critdmg',
    'energy'
  ];

  const cicletfilters: ArtifactStats[] = [
    'atk%',
    'def%',
    'hp%',
    'em',
    'critrate',
    'critdmg',
    'energy',
    'healing'
  ];

  const gobletFilters: ArtifactStats[] = [
    'anemo',
    'cryo',
    'dendro',
    'electro',
    'geo',
    'hydro',
    'pyro',
    'physical',
    'atk%',
    'def%',
    'hp%',
    'em',
    'critrate',
    'critdmg',
    'energy'
  ];

  // state
  let filter: Set<ArtifactStats> = new Set();

  function handleFilters(event: { detail: { selected: ArtifactStats } }) {
    if (filter.has(event.detail.selected)) {
      filter.delete(event.detail.selected);
    } else {
      filter.add(event.detail.selected);
    }

    filter = new Set(filter);
  }

  $: filteredData =
    filter.size > 0
      ? $artifactStorage[type].filter((item) =>
          Array.from(filter).every((tag) => item.tags.includes(tag))
        )
      : $artifactStorage[type];
</script>

<div class="flex flex-col gap-4 overflow-hidden">
  <ArtifactImport {type} />
  {#if type === 'goblet'}
    <StorageFilters
      class="grid-cols-8"
      filters={gobletFilters}
      selected={filter}
      on:filter={handleFilters}
    />
  {:else if type === 'circlet'}
    <StorageFilters
      class="grid-cols-8"
      filters={cicletfilters}
      selected={filter}
      on:filter={handleFilters}
    />
  {:else}
    <StorageFilters
      class="grid-cols-7"
      filters={basefilters}
      selected={filter}
      on:filter={handleFilters}
    />
  {/if}

  <div class="scrollbar flex flex-col gap-y-2 overflow-y-auto md:pr-2">
    {#each filteredData as artifact (artifact.storageID)}
      <StorageButton storedArtifact={artifact} {type} />
    {/each}
  </div>
</div>
