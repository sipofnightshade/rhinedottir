<script lang="ts">
  import { artifact } from '$lib/stores/artifactStore';
  import type { ArtifactType } from '$lib/types/artifacts';

  export let type: ArtifactType;
  let rating: 5 | 4;

  $: rating = $artifact[type].isFiveStar ? 5 : 4;

  const ratingClasses = {
    5: [
      'text-yellow-500',
      'text-yellow-500',
      'text-yellow-500',
      'text-yellow-500',
      'text-yellow-500'
    ],
    4: [
      'text-purple-500',
      'text-purple-500',
      'text-purple-500',
      'text-purple-500',
      'text-slate-500'
    ]
  };
</script>

<button
  on:click={() => artifact.setRating(type)}
  class="flex h-9 w-32 items-center justify-between rounded-lg bg-slate-700 p-3 md:h-10"
  class:opacity-0={$artifact[type].selected.name === 'none'}
  disabled={$artifact[type].selected.name === 'none'}
>
  {#each ratingClasses[rating] as item}
    <div class="flex items-center justify-between">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 26"
        class="h-3.5 w-3.5 fill-current {item}"
      >
        <path
          d="M13.05.93a1 1 0 0 1 1.9 0l2.42 7.43a1 1 0 0 0 .95.7h7.82a1 1 0 0 1 .59 1.8l-6.33 4.6a1 1 0 0 0-.36 1.12l2.41 7.44a1 1 0 0 1-1.54 1.12l-6.32-4.6a1 1 0 0 0-1.18 0l-6.32 4.6a1 1 0 0 1-1.54-1.12l2.41-7.44a1 1 0 0 0-.36-1.12l-6.33-4.6a1 1 0 0 1 .6-1.8h7.81a1 1 0 0 0 .95-.7L13.05.93Z"
        />
      </svg>
    </div>
  {/each}
</button>
