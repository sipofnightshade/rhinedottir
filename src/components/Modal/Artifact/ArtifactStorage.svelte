<script lang="ts">
  import type { ArtifactStats, ArtifactType } from '$lib/types/artifacts';
  import { artifactStorage } from '$lib/stores/artifactStorageStore';
  import StorageFilters from './StorageFilters.svelte';

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
    'physical',
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

  // convert set to array
  $: artifacts = Array.from($artifactStorage[type]);

  $: filteredData =
    filter.size > 0
      ? artifacts.filter((artifact) =>
          // convert tags to an array
          [...artifact.tags].every((tag) => !filter.has(tag as ArtifactStats))
        )
      : artifacts;
</script>

<div class="flex flex-col gap-4 overflow-hidden">
  {#if type === 'goblet'}
    <StorageFilters filters={gobletFilters} selected={filter} on:filter={handleFilters} />
  {:else if type === 'circlet'}
    <StorageFilters filters={cicletfilters} selected={filter} on:filter={handleFilters} />
  {:else}
    <StorageFilters filters={basefilters} selected={filter} on:filter={handleFilters} />
  {/if}
</div>
