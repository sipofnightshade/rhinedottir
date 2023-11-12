<script lang="ts">
  import type { LoadOutTag } from '$lib/types/loadout';
  import { createEventDispatcher } from 'svelte';
  export let filters: string[];
  export let selected: LoadOutTag | '';

  const dispatch = createEventDispatcher();

  const tags = {
    DPS: '!bg-rose-600',
    'Sub DPS': '!bg-sky-600',
    Shield: '!bg-stone-500',
    Support: '!bg-violet-600',
    Healer: '!bg-green-600'
  };

  function setFilter(value: string) {
    dispatch('filter', { selected: value });
  }
</script>

<div class="flex justify-between">
  {#each filters as filter}
    <button
      on:click={() => setFilter(filter)}
      class="w-fit rounded-full bg-slate-700 px-3 py-2 text-sm transition-all hover:bg-opacity-50
      {selected !== '' && selected === filter ? tags[selected] : ''}"
    >
      {filter}
    </button>
  {/each}
</div>
