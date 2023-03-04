<script lang="ts">
  import { createListbox } from 'svelte-headlessui';
  import { artifactStatFormatter } from '$lib/helpers/artifactStatFormatter';
  import { artifactMainStats, StatLabels } from '$lib/data/Stats';
  import Transition from 'svelte-transition';
  import { createEventDispatcher } from 'svelte';
  import { artifact } from '$lib/stores/artifactStore';

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

<div class="mt-auto">
  <p class="mb-[1px] text-right text-2xl font-bold">
    {artifactStatFormatter($artifact[type].mainStat.stat, $artifact[type].mainStat.value)}
  </p>
  {#if type === 'flower' || type === 'feather'}
    <div
      class="flex h-10 w-full items-center justify-center rounded-md bg-slate-600 py-2 pl-2"
    >
      <p>{type === 'flower' ? 'HP' : 'ATK'}</p>
    </div>
  {:else}
    <div class="relative text-sm">
      <button
        use:listbox.button
        on:select={onSelect}
        class="relative h-10 w-full cursor-default text-ellipsis rounded-md border-2 border-slate-800 bg-slate-800 py-2 pl-2 text-left sm:text-sm"
        class:border-slate-400={$listbox.expanded}
      >
        <span class="block">{StatLabels[$artifact[type].mainStat.stat]}</span>
      </button>
      <Transition show={$listbox.expanded}>
        <ul
          use:listbox.items
          class="absolute z-10 mt-0.5 max-h-40 w-full overflow-y-scroll rounded-md bg-slate-800 shadow-md"
        >
          {#each artifactMainStats[type] as value, i}
            {@const active = $listbox.active === value}
            {@const selected = $listbox.selected === value}
            <li
              class="cursor-default select-none p-2"
              class:bg-slate-300={active}
              class:text-slate-900={active}
              use:listbox.item={{ value }}
            >
              <span
                class="center block truncate capitalize {selected
                  ? 'font-medium'
                  : 'font-normal'}">{value.label}</span
              >
            </li>
          {/each}
        </ul>
      </Transition>
    </div>
  {/if}
</div>
