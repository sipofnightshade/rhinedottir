<script lang="ts">
  import type { ArtifactStats, ArtifactType } from '$lib/types/artifacts';
  import { artifactStorage } from '$lib/stores/artifactStorageStore';
  import StorageFilters from './StorageFilters.svelte';

  import StorageButton from './StorageButton.svelte';
  import ArtifactImport from './ArtifactImport.svelte';
  import { elementalText } from '$lib/data/Colors';
  import { character } from '$lib/stores/characterStore';
  import { getImageUrl } from '$lib/helpers/getImageURL';

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
  {#if $artifactStorage[type].length > 0}
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
  {:else}
    <div class="mt-4 flex flex-col items-center">
      <img class="opacity-70" src={getImageUrl(type, 'none', 'none')} alt="UI Team" />
      <h3 class="mt-4 font-bold {elementalText[$character.selected.vision]}">
        You have no artifacts!
      </h3>
      <p class="mt-1 w-4/5 text-center text-sm text-slate-300">
        Import artifacts from your account above using GOOD format or create them in the
        Artifact Builder!
      </p>
    </div>
  {/if}
</div>
