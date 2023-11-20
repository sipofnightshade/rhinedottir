<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import StatImage from '../../Desktop/StatImage.svelte';
  import type { ArtifactStats } from '$lib/types/artifacts';

  export let filters: ArtifactStats[];
  export let selected: Set<ArtifactStats>;

  const dispatch = createEventDispatcher();

  function setFilter(value: ArtifactStats) {
    dispatch('filter', { selected: value });
  }
</script>

<div class="grid w-full grid-cols-8 gap-2">
  {#each filters as filter}
    <button
      on:click={() => setFilter(filter)}
      class="relative flex aspect-square items-center justify-center rounded-lg transition-colors hover:bg-slate-700/50"
      class:bg-slate-700={selected.has(filter)}
    >
      <StatImage stat={filter} lg />
    </button>
  {/each}
</div>
