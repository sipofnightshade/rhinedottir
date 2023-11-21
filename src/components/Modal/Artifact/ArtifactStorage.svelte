<script lang="ts">
  import type {
    ArtifactStats,
    ArtifactType,
    SelectedArtifact
  } from '$lib/types/artifacts';
  import {
    artifactStorage,
    type ArtifactStorageItem
  } from '$lib/stores/artifactStorageStore';
  import StorageFilters from './StorageFilters.svelte';
  import Thumbnail from '../../Thumbnail/Thumbnail.svelte';
  import Star from '../../Stars/Star.svelte';
  import { LongStatLabels, StatLabels } from '$lib/data/Stats';
  import StatImage from '../../Desktop/StatImage.svelte';
  import { ArtifactData } from '$lib/data/Artifacts';
  import { artifact } from '$lib/stores/artifactStore';

  import { artifactStatFormatter } from '$lib/helpers/artifactStatFormatter';

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

  function handleArtifactClick(savedArtifact: ArtifactStorageItem) {
    const { lvl, isFiveStar, mainStat, substats } = savedArtifact;

    const currentlySelected = ArtifactData.find(
      (data) => data.name === savedArtifact.selected
    ) as SelectedArtifact;

    $artifact[type].selected = currentlySelected;
    $artifact[type].lvl = lvl;
    $artifact[type].isFiveStar = isFiveStar;
    $artifact[type].mainStat = mainStat;
    $artifact[type].substats = substats;

    return;
  }

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
    {#each filteredData as artifact}
      <button
        on:click={() => handleArtifactClick(artifact)}
        class="flex w-full items-center gap-2 rounded-xl border border-slate-600 bg-slate-700/80 pr-2 text-sm transition-colors hover:border-slate-500 active:bg-slate-600"
      >
        <div>
          <Thumbnail
            img="/images/artifact/{type}/{artifact.selected}.webp"
            alt={artifact.selected}
            classes="w-12 xs-300:w-16 xs-375:w-24 xs-375:p-2"
            hasBG={false}
          />
        </div>
        <div class="flex w-full flex-col gap-2 py-3">
          <!-- title -->
          <div class="flex items-center justify-between">
            <h3>
              <span class="mr-1 font-bold text-slate-400">+{artifact.lvl}</span
              >{artifact.fullName ?? 'Unidentifed'}
            </h3>

            <span
              class:text-amber-500={artifact.isFiveStar}
              class:text-violet-500={!artifact.isFiveStar}><Star class="w-4" /></span
            >
          </div>
          <!-- main stat -->
          <div
            class="flex items-center justify-between rounded bg-slate-800 py-1 pl-1.5 pr-2"
          >
            <div class="flex items-center gap-0.5">
              <StatImage stat={artifact.mainStat.stat} />
              <h3 class="font-bold uppercase text-slate-300">
                {LongStatLabels[artifact.mainStat.stat]}
              </h3>
            </div>
            <span class="font-bold text-slate-300">
              +{artifactStatFormatter(artifact.mainStat.stat, artifact.mainStat.value)}
            </span>
          </div>
          <!-- substats -->
          <div class="grid grid-cols-2 gap-1">
            {#each artifact.substats as substat}
              {#if substat.stat}
                <div class="flex items-center justify-start">
                  <StatImage stat={substat.stat} />
                  <span class="ml-0.5 hidden truncate text-slate-300 xs:block"
                    >{StatLabels[substat.stat]}</span
                  >
                  <span class="ml-2 font-bold text-[#DFD2B9] xs:ml-0">
                    +{artifactStatFormatter(substat.stat, substat.value)}
                  </span>
                </div>
              {:else}
                <div
                  class="h-full w-full rounded border border-dashed border-slate-600 bg-slate-600"
                />
              {/if}
            {/each}
          </div>
        </div>
      </button>
    {/each}
  </div>
</div>
