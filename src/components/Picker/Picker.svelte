<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';
  import type { SelectedCharacter, SelectedWeapon } from '$lib/types/global';
  import type { ArtifactType } from '$lib/types/artifacts';
  import { getImageUrl } from '$lib/helpers/getImageURL';

  type PickerType = 'character' | 'weapon' | ArtifactType;

  // props
  export let data: any;
  export let type: PickerType;

  const dispatch = createEventDispatcher();

  function handleClick(item: SelectedCharacter | SelectedWeapon) {
    dispatch('selected', {
      selected: item
    });
  }

  function getArtifactRating(arr: number[], name: string) {
    if (arr === undefined) return undefined;
    if (name === 'none') return 1;
    if (!Array.isArray(arr)) return arr;
    if (arr && arr.length === 2) return 5;
    return 4;
  }
</script>

<div class="scrollbar mt-2 grid grid-cols-4 items-start gap-2 overflow-y-auto md:pr-2">
  {#each data as item}
    <button on:click={() => handleClick(item)}>
      <Thumbnail
        alt={item.fullName}
        img={getImageUrl(type, item.url, item.name)}
        vision={item.vision}
        rating={getArtifactRating(item.rating, item.name)}
        classes="bg-slate-700 border border-slate-600  hover:border-slate-400  active:border-2 active:border-slate-200 transition-colors"
      />
      <p class="mt-1 text-xs">
        {item.fullName}
      </p>
    </button>
  {/each}
</div>
