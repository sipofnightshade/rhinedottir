<script lang="ts">
  import { createEventDispatcher } from 'svelte';
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
      class="relative flex aspect-square items-center justify-center rounded-lg"
      class:bg-slate-500={filter === selected}
    >
      <img src="/images/elements/{filter}.svg" alt={filter} class="w-8" />
    </button>
  {/each}
</div>
