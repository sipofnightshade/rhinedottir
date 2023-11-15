<script lang="ts">
  import { createListbox } from 'svelte-headlessui';
  import { artifactSubStats, StatLabels, type All_Stats } from '$lib/data/Stats';
  import Transition from 'svelte-transition';
  import { createEventDispatcher } from 'svelte';
  import { artifact } from '$lib/stores/artifactStore';
  import StatImage from '../../Desktop/StatImage.svelte';
  import Chevron from '$lib/icons/Chevron.svelte';
  import Caret from '$lib/icons/Caret.svelte';

  export let type: 'flower' | 'feather' | 'sands' | 'goblet' | 'circlet';
  export let id: 0 | 1 | 2 | 3;

  const dispatch = createEventDispatcher();

  let statValue: number;
  let listbox = createListbox({
    label: 'SubStats',
    selected: $artifact[type].substats[id].stat
  });

  function onSelect(e: Event) {
    dispatch('selected', {
      value: (e as CustomEvent).detail.selected.value,
      id: id
    });
  }

  function setInputValue() {
    dispatch('inputBlur', {
      value: statValue,
      id: id
    });
  }

  function evaluateStat(stat: string) {
    if (!stat) return false;
    switch (stat) {
      case 'atk':
      case 'def':
      case 'hp':
        return true;
      default:
        return false;
    }
  }

  $: isBadStat = evaluateStat($artifact[type].substats[id].stat);
</script>

<div class="grid grid-cols-12 gap-x-2 pr-0.5">
  <div class="relative col-span-8 text-sm">
    <button
      use:listbox.button
      on:select={onSelect}
      class="relative flex h-9 w-full items-center justify-between gap-2 rounded-lg border border-slate-600 bg-slate-700 p-2 transition-colors duration-200 sm:text-sm md:h-10"
      class:border-slate-300={$listbox.expanded}
      class:border-slate-600={!$listbox.expanded}
    >
      <div
        class="pointer-events-none flex items-center gap-2"
        class:opacity-60={isBadStat}
      >
        {#if $artifact[type].substats[id].stat}
          <StatImage stat={$artifact[type].substats[id].stat} />
        {/if}
        <span class="text-ellipsis">{StatLabels[$artifact[type].substats[id].stat]}</span>
      </div>
      <Chevron class="w-3 fill-slate-100" flip={!$listbox.expanded} />
    </button>
    <Transition show={$listbox.expanded}>
      <ul
        use:listbox.items
        class="scrollbar absolute z-10 mt-1 max-h-52 w-full overflow-y-auto rounded-md border border-slate-600 bg-slate-700 p-0.5 shadow-md shadow-slate-900"
      >
        {#each artifactSubStats as stat, i (i)}
          {@const active = $listbox.active === stat}
          <li
            class="flex cursor-default select-none items-center gap-1 rounded-md p-2.5"
            class:bg-slate-800={active}
            use:listbox.item={{ value: stat }}
          >
            {#if stat.value}
              <StatImage stat={stat.value} />
            {/if}
            <span class=" center pointer-events-none block truncate capitalize"
              >{stat.label}</span
            >
          </li>
        {/each}
      </ul>
    </Transition>
  </div>
  <input
    class="col-span-3 h-9 appearance-none rounded-md border border-slate-600 bg-slate-800 p-2 text-right focus:border-slate-400 focus:ring-slate-300 md:h-10"
    class:opacity-60={isBadStat}
    bind:value={$artifact[type].substats[id].value}
    autocomplete="off"
    type="number"
  />
  <div
    class="col-span-1 flex items-center gap-1 fill-slate-100"
    class:opacity-60={isBadStat}
  >
    <span>5</span>
    <Caret class="w-2.5 " />
  </div>
</div>

<style lang="postcss">
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -webkit-appearance: none;
    margin: 0;
  }

  .scrollbar::-webkit-scrollbar-thumb {
    background-color: #64748b;
  }

  .scrollbar::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: #334155;
    padding: 1px;
  }
</style>
