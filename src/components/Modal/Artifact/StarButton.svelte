<script lang="ts">
  import { artifact } from '$lib/stores/artifactStore';
  import type { ArtifactNames, ArtifactType } from '$lib/types/artifacts';
  import Star from '../../Stars/Star.svelte';
  import Thumbnail from '../../Thumbnail/Thumbnail.svelte';

  export let type: ArtifactType;
  export let name: ArtifactNames;

  $: rating = $artifact[type].isFiveStar ? 5 : 4;
</script>

<button
  class="relative rounded-xl border-2 border-slate-600 transition-colors hover:bg-slate-700/70 active:bg-slate-600"
  on:click={() => artifact.setRating(type)}
  disabled={name === 'none'}
  class:text-yellow-500={name !== 'none' && rating === 5}
  class:border-yellow-500={name !== 'none' && rating === 5}
  class:text-violet-500={name !== 'none' && rating === 4}
  class:border-violet-500={name !== 'none' && rating === 4}
>
  <Thumbnail
    img="/images/artifact/{type}/{name}.webp"
    alt={name}
    classes="w-14 xs-300:w-16  p-1 xs-300:p-2"
    hasBG={false}
  />
  <Star class="absolute -bottom-[9px] left-[22px] w-5 stroke-slate-800 stroke-2" />
</button>
