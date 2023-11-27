<script lang="ts">
  // types
  import type { LoadOutTag } from '$lib/types/loadout';

  // stores & helpers
  import { character } from '$lib/stores/characterStore';
  import { weapon } from '$lib/stores/weaponStore';
  import { artifact, type Artifact } from '$lib/stores/artifactStore';
  import { loadouts, type LoadoutItem } from '$lib/stores/loadoutsStore';
  import { uid } from 'uid';

  // components
  import MultiModal from '../MultiModal/MultiModal.svelte';
  import LoadoutBlockImages from './LoadoutBlockImages.svelte';
  import LoadoutTags from './LoadoutFilters.svelte';

  let dialog: HTMLDialogElement;
  let title: string;
  let tag: LoadOutTag = 'DPS';

  function setTag(event: any) {
    tag = event.detail.selected;
  }

  function createArtifactItem(baseArtifact: Artifact) {
    return {
      ...baseArtifact,
      selected: baseArtifact.selected.name,
      uid: baseArtifact.selected.uid,
      url: baseArtifact.selected.url,
      rating: baseArtifact.selected.rating,
      fullName: baseArtifact.selected.fullName
    };
  }

  function toggleModal() {
    dialog.showModal();
    tag = 'DPS';

    title = `C${$character.constellation} ${tag} - ${$character.selected.fullName}`;
  }

  function saveLoadout() {
    if (currentLoadout) {
      loadouts.addLoadout({ ...(currentLoadout as LoadoutItem) });
    }
    dialog.close();
  }

  $: currentLoadout = {
    id: uid(),
    tag: tag,
    title,
    character: {
      selected: $character.selected.name,
      vision: $character.selected.vision,
      id: $character.selected.id,
      url: $character.selected.url,
      atk: $character.atk,
      rating: $character.selected.rating,
      skill: $character.skill,
      burst: $character.burst,
      weapon: $character.selected.weapon,
      lvlBonus: $character.lvlBonus,
      constellation: $character.constellation,
      lvl: $character.lvl
    },
    weapon: {
      selected: $weapon.selected.name,
      url: $weapon.selected.url,
      lvl: $weapon.lvl,
      refinement: $weapon.refinement,
      rating: $weapon.selected.rating
    },
    artifacts: {
      flower: createArtifactItem($artifact.flower),
      feather: createArtifactItem($artifact.feather),
      sands: createArtifactItem($artifact.sands),
      goblet: createArtifactItem($artifact.goblet),
      circlet: createArtifactItem($artifact.circlet)
    }
  };
</script>

<button
  class="flex items-center rounded-full border border-slate-600 bg-slate-700 transition-colors hover:border-slate-500 active:bg-slate-600 xs:gap-x-1.5 md:p-0.5"
  on:click={toggleModal}
>
  <div
    class="flex h-12 w-12 items-center justify-center rounded-full md:h-9 md:w-9 md:bg-slate-800"
  >
    <svg viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]">
      <path
        d="M2.78571 0C1.525 0 0.5 1.025 0.5 2.28571V13.7143C0.5 14.975 1.525 16 2.78571 16H14.2143C15.475 16 16.5 14.975 16.5 13.7143V5.04643C16.5 4.43929 16.2607 3.85714 15.8321 3.42857L13.0714 0.667857C12.6429 0.239286 12.0607 0 11.4536 0H2.78571ZM2.78571 3.42857C2.78571 2.79643 3.29643 2.28571 3.92857 2.28571H10.7857C11.4179 2.28571 11.9286 2.79643 11.9286 3.42857V5.71429C11.9286 6.34643 11.4179 6.85714 10.7857 6.85714H3.92857C3.29643 6.85714 2.78571 6.34643 2.78571 5.71429V3.42857ZM8.5 9.14286C9.10621 9.14286 9.68759 9.38367 10.1162 9.81233C10.5449 10.241 10.7857 10.8224 10.7857 11.4286C10.7857 12.0348 10.5449 12.6162 10.1162 13.0448C9.68759 13.4735 9.10621 13.7143 8.5 13.7143C7.89379 13.7143 7.31241 13.4735 6.88376 13.0448C6.4551 12.6162 6.21429 12.0348 6.21429 11.4286C6.21429 10.8224 6.4551 10.241 6.88376 9.81233C7.31241 9.38367 7.89379 9.14286 8.5 9.14286Z"
        class="fill-slate-200"
      />
    </svg>
  </div>

  <p class="mr-2.5 hidden font-bold md:block">Save</p>
</button>

<MultiModal bind:dialog small>
  <h3 slot="title">Save Character Loadout</h3>
  <div class=" flex flex-col gap-y-4 pb-1">
    {#if currentLoadout}
      <LoadoutBlockImages item={currentLoadout} hasBorder />
      <div>
        <label for="loadoutTitle" class="text-sm font-bold uppercase text-slate-300">
          Title
        </label>
        <input
          type="text"
          id="loadoutTitle"
          placeholder="Enter a descriptive title for your loadout..."
          bind:value={title}
          autocomplete="off"
          class="mt-2 h-9 w-full rounded-md border border-slate-600 bg-slate-800 p-2 transition-colors hover:border-slate-500 focus:border-slate-400 focus:ring-slate-300 md:h-10"
        />
      </div>

      <div>
        <h4 class="mb-2 text-sm font-bold uppercase text-slate-300">Tag</h4>
        <LoadoutTags selected={tag} on:filter={setTag} />
      </div>
      <button
        on:click={saveLoadout}
        class="mx-auto mt-2 h-9 w-full rounded-lg bg-slate-200 uppercase text-slate-900 transition-colors hover:bg-slate-300 active:bg-slate-200 md:h-10"
        >Save</button
      >
    {/if}
  </div>
</MultiModal>
