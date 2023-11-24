<script lang="ts">
  // types
  import type { LoadoutItem } from '$lib/stores/loadoutsStore';
  import type { ArtifactType } from '$lib/types/artifacts';

  // components
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';

  export let item: LoadoutItem;
  export let hasBorder = false;

  const artifactTypes: ArtifactType[] = [
    'flower',
    'feather',
    'sands',
    'goblet',
    'circlet'
  ];

  function getArtifactRating(arr: number[]) {
    if (arr === undefined) return undefined;
    if (arr && arr.length === 2) return 5;
    return 4;
  }
</script>

<!-- Images -->
<div
  class="pointer-events-none grid grid-cols-7 gap-1 {hasBorder
    ? '[&>*]:border [&>*]:border-slate-600 [&>*]:bg-slate-800'
    : ' [&>*]:bg-slate-800'}"
>
  <Thumbnail
    img="/images/character/{item.character.selected}.webp"
    vision={item.character.vision}
    alt={item.character.selected}
    rating={item.character.rating}
    classes="!rounded-lg"
  />
  <Thumbnail
    img="/images/weapon/{item.weapon.selected}.webp"
    alt={item.weapon.selected}
    rating={item.weapon.rating}
    classes="!rounded-lg"
  />
  {#each artifactTypes as type}
    <Thumbnail
      img="/images/artifact/{type}/{item.artifacts[type].selected}.webp"
      alt={item.artifacts[type].selected}
      imgClasses="w-5/6"
      classes="!rounded-lg"
      rating={getArtifactRating(item.artifacts[type].rating)}
    />
  {/each}
</div>
