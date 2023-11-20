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

<div class="grid w-full gap-2 {$$props.class}">
  {#each filters as filter}
    <button
      on:click={() => setFilter(filter)}
      class="relative flex aspect-square items-center justify-center rounded-lg border border-slate-800 transition-colors hover:border-slate-600 active:bg-slate-500"
      class:bg-slate-700={selected.has(filter)}
    >
      <StatImage stat={filter} lg />
    </button>
  {/each}
</div>
