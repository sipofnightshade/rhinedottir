<script lang="ts">
  import { loadouts } from '$lib/stores/loadoutsStore';
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';
  import { uid } from 'uid';
  import type { LoadOutTag } from '$lib/types/loadout';
  import ShortModal from '../Modal/ShortModal.svelte';
  import TagInputLabel from '../Loadout/TagInputLabel.svelte';

  export let build: any;

  let dialog: HTMLDialogElement;
  let title: string;
  let tags: LoadOutTag = 'DPS';

  const roleTags = [
    { label: 'DPS', color: 'peer-checked:bg-rose-600' },
    { label: 'Sub DPS', color: 'peer-checked:bg-amber-600' },
    { label: 'Shield', color: 'peer-checked:bg-stone-500' },
    { label: 'Healer', color: 'peer-checked:bg-emerald-500' },
    { label: 'Support', color: 'peer-checked:bg-violet-600' }
  ];

  function toggleModal() {
    dialog.showModal();
  }

  function saveLoadout(data: any) {
    const loadoutTitle =
      title ??
      `C${data.character.constellation} ${tags} - ${data.character.selected} - C${data.character.constellation}`;

    const newLoadout = {
      id: uid(),
      tag: tags,
      title: loadoutTitle,
      character: { ...data.character },
      weapon: { ...data.weapon },
      artifacts: { ...data.artifacts }
    };

    loadouts.addLoadout({ ...newLoadout });
    dialog.close();
  }
</script>

<button class="bg-slate-500" on:click={toggleModal}>
  <Thumbnail
    img="/images/character/{build.character.selected}.webp"
    vision={build.character.vision}
    alt={build.character.selected}
  />
</button>

<ShortModal bind:dialog modalTitle="Save Character Loadout">
  <label for="loadoutTitle" class="text-slate-300">Loadout Name</label>
  <input
    type="text"
    id="loadoutTitle"
    placeholder="Enter a descriptive title for your loadout..."
    bind:value={title}
    class="my-2 h-9 w-full appearance-none rounded-md border border-slate-700 bg-slate-700 p-1 focus:border-slate-400 focus:ring-slate-300"
  />
  <h4 class="mt-2 text-slate-300">Tag</h4>
  <div class="my-2">
    <fieldset class="grid grid-cols-3 gap-2">
      {#each roleTags as item (item.label)}
        <input
          id={item.label}
          class="peer absolute h-0 w-0 opacity-0"
          type="radio"
          bind:group={tags}
          name="type"
          value={item.label}
        />
        <TagInputLabel color={item.color} label={item.label} />
      {/each}
    </fieldset>
  </div>
  <button
    on:click={() => saveLoadout(build)}
    class="ml-auto mt-2 h-9 w-full rounded-full bg-emerald-600 px-4 py-2">Save</button
  >
</ShortModal>
