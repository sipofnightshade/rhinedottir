<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import StatImage from '../Desktop/StatImage.svelte';
  export let filters: string[];
  export let selected: string;

  const dispatch = createEventDispatcher();

  function setFilter(value: string) {
    dispatch('filter', { selected: value });
  }
</script>

<div class="grid w-full auto-cols-fr grid-flow-col gap-2">
  {#each filters as filter}
    <button
      on:click={() => setFilter(filter)}
      class="relative flex aspect-square items-center justify-center rounded-lg transition-colors hover:bg-slate-700/50"
      class:bg-slate-700={filter === selected}
    >
      <StatImage stat={filter} lg />
    </button>
  {/each}
</div>
