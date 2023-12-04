<script lang="ts">
  import { createArtifactGOOD, type GOODArtifact } from '$lib/helpers/createArtifact';
  import Close from '$lib/icons/Close.svelte';
  import { artifactStorage } from '$lib/stores/artifactStorageStore';
  import type { ArtifactType } from '$lib/types/artifacts';
  import type { SavedArtifactItem } from '$lib/types/loadout';

  export let type: ArtifactType;

  const typeLabels = {
    flower: 'Flowers',
    feather: 'Plumes',
    sands: 'Sands',
    goblet: 'Goblets',
    circlet: 'Circlets'
  };

  let inputData: JSON;
  let responseMsg: 'loading' | 'success' | 'error' | undefined = undefined;
  let count = 0;
  let disableBtn = false;

  function importData(data: any) {
    if (!data) return;
    responseMsg = undefined;

    const noOfArtifacts = $artifactStorage[type].length;

    try {
      responseMsg = 'loading';
      const parsedData = JSON.parse(data);

      parsedData.artifacts.forEach((item: GOODArtifact) => {
        const x = createArtifactGOOD(item);
        if (x?.artifact.selected && x.type) {
          saveArtifact(x.type, x.artifact);
        }
      });

      // remove all dupes after adding new
      artifactStorage.removeDuplicates();

      responseMsg = 'success';
      count = $artifactStorage[type].length - noOfArtifacts;

      disableBtn = true;
    } catch (error) {
      console.error('Error parsing or saving artifacts:', error);
      responseMsg = 'error';
      count = 0;
    }
  }

  function saveArtifact(type: ArtifactType, artifact: SavedArtifactItem) {
    artifactStorage.saveArtifact(type, artifact);
  }

  function handleEnterClick(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      importData(inputData);
    }
  }

  // re-enable button if type in input field
  $: (disableBtn = false), inputData;
</script>

<div>
  <!-- INPUT & BUTTON -->
  <div class="flex w-full gap-2">
    <input
      bind:value={inputData}
      on:keydown={handleEnterClick}
      type="text"
      class="h-10 w-full rounded-md border border-slate-600 bg-slate-800 p-2 focus:border-slate-400 focus:ring-slate-300"
      placeholder="Enter GOOD JSON Data"
    />
    <button
      disabled={disableBtn}
      on:click={() => importData(inputData)}
      class="h-10 rounded-lg border border-slate-600 bg-slate-700 px-3 transition-colors hover:border-slate-500 active:bg-slate-600"
      class:opacity-50={disableBtn}
    >
      Import
    </button>
  </div>

  {#if responseMsg}
    <div class="mt-2 flex items-center justify-between">
      {#if responseMsg === 'success'}
        <p class="text-sm text-rd-green">
          Successfully imported {count} new {typeLabels[type]}!
        </p>
      {:else if responseMsg === 'error'}
        <p class="text-sm text-red-500">Failed to import Artifacts!</p>
      {:else if responseMsg === 'loading'}
        <p class="text-sm text-slate-300">Importing...</p>
      {/if}

      <button
        class="rounded-full bg-slate-300 p-1.5 transition-colors hover:bg-opacity-80 active:bg-opacity-100"
        on:click={() => (responseMsg = undefined)}
        class:bg-slate-300={responseMsg === undefined || responseMsg === 'loading'}
        class:bg-rd-green={responseMsg === 'success'}
        class:bg-red-500={responseMsg === 'error'}
      >
        <Close class="h-2 fill-slate-800" />
      </button>
    </div>
  {/if}

  <!-- Divider -->
  <div class="mt-4 h-[1px] w-full bg-slate-600" />
</div>
