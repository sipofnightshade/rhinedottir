<script lang="ts">
  import { createListbox } from 'svelte-headlessui';
  import { artifactSubStats } from '$lib/data/Stats';
  import Transition from 'svelte-transition';
  import { artifact } from '$lib/stores/artifactStore';

  export let type: 'flower' | 'feather' | 'sands' | 'goblet' | 'circlet';
  export let id: 0 | 1 | 2 | 3;

  let statValue: number;

  let listbox = createListbox({
    label: 'SubStats',
    selected: artifactSubStats[0]
  });

  function onSelect(e: Event) {
    artifact.setSubstats(type, id, (e as CustomEvent).detail.selected.value);
  }

  function setInputValue() {
    artifact.setInput(type, id, statValue);
  }
</script>

<div class="grid grid-cols-3 gap-x-1 pr-0.5">
  <div class="relative col-span-2 text-sm">
    <button
      use:listbox.button
      on:select={onSelect}
      class="relative h-10 w-full cursor-default text-ellipsis rounded-md border-2 border-slate-800 bg-slate-800 py-2 pl-2 text-left sm:text-sm"
      class:border-slate-400={$listbox.expanded}
    >
      <span class="block">{$listbox.selected.label}</span>
    </button>
    <Transition show={$listbox.expanded}>
      <ul
        use:listbox.items
        class="absolute z-10 mt-0.5 max-h-40 w-full overflow-y-scroll rounded-md bg-slate-800 shadow-md"
      >
        {#each artifactSubStats as value, i}
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
  <input
    class="col-span-1 appearance-none rounded-md border border-slate-800 bg-slate-800 py-1 px-1 text-right focus:border-slate-400 focus:ring-slate-300"
    bind:value={statValue}
    on:blur={setInputValue}
    placeholder="0"
    autocomplete="off"
    type="number"
  />
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
</style>
