<script lang="ts">
  import type { ArtifactType, SelectedArtifact } from '$lib/types/artifacts';
  import {
    artifactStorage,
    type ArtifactStorageItem
  } from '$lib/stores/artifactStorageStore';
  import Thumbnail from '../../Thumbnail/Thumbnail.svelte';
  import Star from '../../Stars/Star.svelte';
  import { LongStatLabels, StatLabels } from '$lib/data/Stats';
  import StatImage from '../../Desktop/StatImage.svelte';
  import { ArtifactData } from '$lib/data/Artifacts';
  import { artifact } from '$lib/stores/artifactStore';
  import { longpress } from '$lib/actions/longpress';

  import { artifactStatFormatter } from '$lib/helpers/artifactStatFormatter';
  import Delete from '$lib/icons/Delete.svelte';
  import { getImageUrl } from '$lib/helpers/getImageURL';
  import { countArtifactSets } from '$lib/helpers/countArtifactSets';

  export let storedArtifact: ArtifactStorageItem;
  export let type: ArtifactType;

  // state
  let deletable = false;

  function handleLongPress() {
    deletable = !deletable;
  }

  function handleDelete() {
    if (deletable) {
      artifactStorage.removeArtifact(type, storedArtifact.storageID);
    }
  }

  function handleArtifactClick(savedArtifact: ArtifactStorageItem) {
    const { lvl, isFiveStar, mainStat, substats, statsID } = savedArtifact;

    const currentlySelected = ArtifactData.find(
      (data) => data.name === savedArtifact.selected
    ) as SelectedArtifact;

    $artifact[type].selected = currentlySelected;
    $artifact[type].lvl = lvl;
    $artifact[type].isFiveStar = isFiveStar;
    $artifact[type].mainStat = mainStat;
    $artifact[type].substats = substats;
    $artifact[type].statsID = statsID;

    return;
  }
  /** @todo Use  $artifact[type].statsID */

  $: usedByMain = storedArtifact.statsID === $artifact[type].statsID;

  // count current global artifact pieces
  $: artifactCount = countArtifactSets($artifact, storedArtifact.selected);
</script>

<div
  class="relative flex w-full items-center gap-2 rounded-xl bg-slate-700/80 pr-2 text-sm transition-colors"
>
  <div>
    <Thumbnail
      img={getImageUrl(type, storedArtifact.url, storedArtifact.selected)}
      alt={storedArtifact.selected}
      classes="w-12 xs-300:w-16 xs-375:w-20 xs-375:p-1"
      hasBG={false}
    />
  </div>
  <div class="flex w-full flex-col gap-2 py-3">
    <!-- title -->
    <div class="flex items-center justify-between">
      <h3 class="truncate">
        <span class="mr-1 font-bold text-slate-400">+{storedArtifact.lvl}</span
        >{storedArtifact.fullName ?? 'Unidentifed'}
        <span
          class="ml-1 font-bold"
          class:hidden={artifactCount === 0}
          class:text-slate-400={artifactCount === 1}
          class:text-rd-green={artifactCount > 1}
        >
          {`(${artifactCount}/4)`}
        </span>
      </h3>

      <span
        class:text-amber-500={storedArtifact.isFiveStar}
        class:text-violet-500={!storedArtifact.isFiveStar}><Star class="w-4" /></span
      >
    </div>
    <!-- main stat -->
    <div class="flex items-center justify-between rounded bg-slate-800 py-1 pl-1.5 pr-2">
      <div class="flex items-center gap-0.5">
        <StatImage stat={storedArtifact.mainStat.stat} sm />
        <h3 class="hidden font-bold uppercase text-slate-300 xs:block">
          {LongStatLabels[storedArtifact.mainStat.stat]}
        </h3>
        <h3 class="font-bold uppercase text-slate-300 xs:hidden">
          {StatLabels[storedArtifact.mainStat.stat]}
        </h3>
      </div>
      <span class="font-bold text-slate-300">
        +{artifactStatFormatter(
          storedArtifact.mainStat.stat,
          storedArtifact.mainStat.value
        )}
      </span>
    </div>
    <!-- substats -->
    <div class="grid grid-cols-2 gap-1">
      {#each storedArtifact.substats as substat}
        {#if substat.stat}
          <div class="flex items-center justify-start">
            <StatImage stat={substat.stat} sm />
            <span class="ml-0.5 hidden truncate text-slate-300 xs:block"
              >{StatLabels[substat.stat]}</span
            >
            <span class="ml-2 font-bold text-[#DFD2B9] xs:ml-0">
              +{artifactStatFormatter(substat.stat, substat.value)}
            </span>
          </div>
        {:else}
          <div
            class="h-full w-full rounded border border-dashed border-slate-500 bg-slate-600"
          />
        {/if}
      {/each}
    </div>
  </div>
  <button
    on:longpress={handleLongPress}
    use:longpress={300}
    disabled={deletable || usedByMain}
    on:click={() => handleArtifactClick(storedArtifact)}
    class="absolute z-[5] h-full w-full rounded-xl border transition-colors"
    class:border-slate-600={!deletable && !usedByMain}
    class:hover:border-slate-500={!deletable && !usedByMain}
    class:active:border-slate-300={!deletable && !usedByMain}
    class:border-red-500={deletable}
    class:hover:border-red-500={deletable}
    class:border-2={usedByMain}
    class:border-green-500={usedByMain}
  >
    <span class="hidden">Artifact Button</span>
  </button>
</div>
{#if deletable}
  <div class="flex justify-between gap-2 text-slate-200">
    <button
      class="w-full rounded-md border border-slate-600 bg-slate-700 p-2 transition-colors hover:border-slate-500 active:bg-slate-600"
      on:click={() => (deletable = false)}
    >
      Cancel
    </button>
    <button
      class="flex w-full items-center justify-center gap-1.5 rounded-md border border-red-700 bg-red-600 p-2 text-slate-100 transition-colors hover:border-red-500 active:bg-red-500"
      on:click={handleDelete}
    >
      <Delete class="h-4 fill-slate-200" />
      <span>Delete</span>
    </button>
  </div>
{/if}
