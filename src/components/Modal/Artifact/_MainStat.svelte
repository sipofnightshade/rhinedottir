<script lang="ts">
  import { createListbox } from 'svelte-headlessui';
  import { artifactStatFormatter } from '$lib/helpers/artifactStatFormatter';
  import { artifactMainStats, StatLabels } from '$lib/data/Stats';
  import Transition from 'svelte-transition';
  import { createEventDispatcher } from 'svelte';
  import { artifact } from '$lib/stores/artifactStore';
  import Chevron from '$lib/icons/Chevron.svelte';
  import StatImage from '../../Desktop/StatImage.svelte';

  export let type: 'flower' | 'feather' | 'sands' | 'goblet' | 'circlet';

  const dispatch = createEventDispatcher();

  let listbox = createListbox({
    label: 'MainStats',
    selected: $artifact[type].mainStat.stat
  });

  function onSelect(e: Event) {
    dispatch('selected', {
      value: (e as CustomEvent).detail.selected.value
    });
  }
</script>

<div class="mt-auto w-full">
  <p class="text-right text-2xl font-bold">
    {artifactStatFormatter($artifact[type].mainStat.stat, $artifact[type].mainStat.value)}
  </p>
  {#if type === 'flower' || type === 'feather'}
    <div
      class="flex h-10 w-full items-center justify-center rounded-md bg-slate-900 py-2 pl-2"
    >
      <p>{type === 'flower' ? 'HP' : 'ATK'}</p>
    </div>
  {:else}
    <div class="relative text-sm">
      <button
        use:listbox.button
        on:select={onSelect}
        class="relative flex h-9 w-full items-center justify-between gap-2 rounded-lg border border-slate-600 bg-slate-700 p-2 transition-colors duration-200 hover:border-slate-500 active:bg-slate-600 sm:text-sm md:h-10"
        class:border-slate-300={$listbox.expanded}
        class:border-slate-600={!$listbox.expanded}
      >
        <div class="pointer-events-none flex items-center gap-2">
          <StatImage stat={$artifact[type].mainStat.stat} />
          <span class="hidden truncate xs-300:flex"
            >{StatLabels[$artifact[type].mainStat.stat]}</span
          >
        </div>
        <Chevron class="w-3 fill-slate-100" flip={!$listbox.expanded} />
      </button>
      <Transition show={$listbox.expanded}>
        <ul
          use:listbox.items
          class="scrollbar absolute z-10 mt-1 max-h-52 w-full overflow-y-auto rounded-md bg-slate-700 p-0.5 shadow-lg"
        >
          {#each artifactMainStats[type] as stat, i (i)}
            {@const active = $listbox.active === stat}
            <li
              class="flex cursor-default select-none items-center gap-1 rounded-md p-2.5"
              class:bg-slate-800={active}
              use:listbox.item={{ value: stat }}
            >
              <StatImage stat={stat.value} />

              <span
                class=" center pointer-events-none hidden truncate capitalize xs-300:flex"
                >{stat.label}</span
              >
            </li>
          {/each}
        </ul>
      </Transition>
    </div>
  {/if}
</div>

<style>
  .scrollbar::-webkit-scrollbar-thumb {
    background-color: #64748b;
  }

  .scrollbar::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: #334155;
    padding: 1px;
  }
</style>
