<script lang="ts">
  import ShortModal from '../Modal/ShortModal.svelte';
  import TagInputLabel from './TagInputLabel.svelte';
  import { allStats } from '$lib/data/Stats';
  import { uid } from 'uid';
  import type { LoadOutTag } from '$lib/types/loadout';

  //stores
  import { character } from '$lib/stores/characterStore';
  import { weapon } from '$lib/stores/weaponStore';
  import { artifact } from '$lib/stores/artifactStore';
  import { loadouts } from '$lib/stores/loadoutsStore';

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

  function saveLoadout() {
    const newLoadout = {
      id: uid(),
      tag: tags,
      title,
      character: {
        ...$character,
        selected: $character.selected.name,
        weapon: $character.selected.weapon,
        vision: $character.selected.vision,
        id: $character.selected.id,
        additionalStats: { ...allStats }
      },
      weapon: { ...$weapon, selected: $weapon.selected.name },
      artifacts: {
        flower: { ...$artifact.flower, selected: $artifact.flower.selected.name },
        feather: { ...$artifact.feather, selected: $artifact.feather.selected.name },
        sands: { ...$artifact.sands, selected: $artifact.sands.selected.name },
        goblet: { ...$artifact.goblet, selected: $artifact.goblet.selected.name },
        circlet: { ...$artifact.circlet, selected: $artifact.circlet.selected.name }
      }
    };

    loadouts.addLoadout({ ...newLoadout });
    dialog.close();
  }

  $: console.log(tags);
</script>

<button
  class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-400"
  on:click={toggleModal}
>
  <svg viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
    <path
      d="M2.78571 0C1.525 0 0.5 1.025 0.5 2.28571V13.7143C0.5 14.975 1.525 16 2.78571 16H14.2143C15.475 16 16.5 14.975 16.5 13.7143V5.04643C16.5 4.43929 16.2607 3.85714 15.8321 3.42857L13.0714 0.667857C12.6429 0.239286 12.0607 0 11.4536 0H2.78571ZM2.78571 3.42857C2.78571 2.79643 3.29643 2.28571 3.92857 2.28571H10.7857C11.4179 2.28571 11.9286 2.79643 11.9286 3.42857V5.71429C11.9286 6.34643 11.4179 6.85714 10.7857 6.85714H3.92857C3.29643 6.85714 2.78571 6.34643 2.78571 5.71429V3.42857ZM8.5 9.14286C9.10621 9.14286 9.68759 9.38367 10.1162 9.81233C10.5449 10.241 10.7857 10.8224 10.7857 11.4286C10.7857 12.0348 10.5449 12.6162 10.1162 13.0448C9.68759 13.4735 9.10621 13.7143 8.5 13.7143C7.89379 13.7143 7.31241 13.4735 6.88376 13.0448C6.4551 12.6162 6.21429 12.0348 6.21429 11.4286C6.21429 10.8224 6.4551 10.241 6.88376 9.81233C7.31241 9.38367 7.89379 9.14286 8.5 9.14286Z"
      class="fill-slate-700"
    />
  </svg>
</button>
<!-- @component
- Properly implement the `saveLoadout` modal design
 -->
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
      {#each roleTags as item}
        <div class="relative">
          <input
            id={item.label}
            class="peer absolute h-0 w-0 opacity-0"
            type="radio"
            bind:group={tags}
            name="type"
            value={item.label}
          />
          <TagInputLabel color={item.color} label={item.label} />
        </div>
      {/each}
    </fieldset>
  </div>
  <button
    on:click={saveLoadout}
    class="ml-auto mt-2 h-9 w-full rounded-full bg-emerald-600 px-4 py-2">Save</button
  >
</ShortModal>
