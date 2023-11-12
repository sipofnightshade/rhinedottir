<script lang="ts">
  import type { LoadOutTag } from '$lib/types/loadout';
  import { createEventDispatcher } from 'svelte';
  export let selected: LoadOutTag | '';

  const dispatch = createEventDispatcher();

  const filters: LoadOutTag[] = ['DPS', 'Sub DPS', 'Shield', 'Support', 'Healer'];
  const tags = {
    DPS: '!bg-rose-600',
    'Sub DPS': '!bg-amber-600',
    Shield: '!bg-stone-500',
    Support: '!bg-violet-600',
    Healer: '!bg-green-600'
  };

  function setFilter(value: string) {
    dispatch('filter', { selected: value });
  }
</script>

<div class="flex flex-wrap justify-between gap-y-2">
  {#each filters as filter}
    <button
      on:click={() => setFilter(filter)}
      class="w-fit rounded-full bg-slate-700 px-3 py-1.5 text-sm transition-all hover:bg-opacity-50
      {selected !== '' && selected === filter ? tags[selected] : ''}"
    >
      {filter}
    </button>
  {/each}
</div>
