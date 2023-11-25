<script lang="ts">
  import { loadouts } from '$lib/stores/loadoutsStore';
  import { uid } from 'uid';
  import type { LoadOutTag } from '$lib/types/loadout';
  import { artifactStorage } from '$lib/stores/artifactStorageStore';

  // components
  import MultiModal from '../MultiModal/MultiModal.svelte';
  import LoadoutBlockImages from '../Loadout/LoadoutBlockImages.svelte';
  import LoadoutTags from '../Loadout/LoadoutFilters.svelte';
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';

  export let build: any;

  let dialog: HTMLDialogElement;
  let title: string;
  let tag: LoadOutTag = 'DPS';

  function setTag(event: any) {
    tag = event.detail.selected;
  }

  function toggleModal() {
    dialog.showModal();
    (tag = 'DPS'),
      (title = `C${build.character.constellation} ${tag} - ${build.character.selected} - C${build.character.constellation}`);
  }

  function saveLoadout(data: any) {
    // Save each valid artifact to storage
    Object.keys(data.artifacts).forEach((type: any) => {
      if (data.artifacts[type].selected !== 'none') {
        artifactStorage.saveArtifact(type, data.artifacts[type]);
      }
    });

    loadouts.addLoadout({ ...currentLoadout });
    dialog.close();
  }

  $: currentLoadout = {
    id: uid(),
    tag,
    title,
    character: { ...build.character },
    weapon: { ...build.weapon },
    artifacts: { ...build.artifacts }
  };
</script>

<button
  class="overflow-hidden rounded-full border border-slate-600 bg-slate-700 transition-colors hover:border-slate-400 active:border-2 active:border-slate-200"
  on:click={toggleModal}
>
  <Thumbnail
    img="https://enka.network/ui/{build.character.url}.png"
    vision={build.character.vision}
    alt={build.character.selected}
    classes="pointer-events-none"
    rating={build.character.rating}
    hasBG
  />
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
        on:click={() => saveLoadout(currentLoadout)}
        class="mx-auto mt-2 h-9 w-full rounded-lg bg-slate-200 uppercase text-slate-900 transition-colors hover:bg-slate-300 active:bg-slate-200 md:h-10"
        >Save</button
      >
    {/if}
  </div>
</MultiModal>
