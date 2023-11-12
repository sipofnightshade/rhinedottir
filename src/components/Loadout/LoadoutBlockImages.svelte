<script lang="ts">
  // types
  import type { LoadoutItem } from '$lib/stores/loadoutsStore';
  import type { ArtifactType } from '$lib/types/artifacts';

  // components
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';

  export let item: LoadoutItem;

  const artifactTypes: ArtifactType[] = [
    'flower',
    'feather',
    'sands',
    'goblet',
    'circlet'
  ];
</script>

<!-- Images -->
<div class="pointer-events-none grid grid-cols-7 gap-1">
  <Thumbnail
    img="/images/character/{item.character.selected}.webp"
    vision={item.character.vision}
    alt={item.character.selected}
  />
  <Thumbnail
    img="/images/weapon/{item.weapon.selected}.webp"
    alt={item.weapon.selected}
  />
  {#each artifactTypes as type}
    <Thumbnail
      img="/images/artifact/{type}/{item.artifacts[type].selected}.webp"
      alt={item.artifacts[type].selected}
      imgClasses="w-3/4"
    />
  {/each}
</div>
