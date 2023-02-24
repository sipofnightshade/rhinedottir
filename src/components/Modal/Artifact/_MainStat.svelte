<script lang="ts">
  import { createListbox } from 'svelte-headlessui';
  import Transition from 'svelte-transition';

  export let type: 'flower' | 'feather' | 'sands' | 'goblet' | 'circlet';

  let render = type == 'flower' || type == 'feather';

  const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' }
  ];

  const listbox = createListbox({ label: 'Actions', selected: people[2] });

  function onSelect(e: Event) {
    console.log('select', (e as CustomEvent).detail);
  }
</script>

<div class="mt-auto">
  <p class="mb-[1px] text-right text-2xl font-bold">3,765</p>
  {#if render}
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
        <span class="block">{$listbox.selected.name}</span>
      </button>
      <Transition
        show={$listbox.expanded}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul
          use:listbox.items
          class="absolute z-10 mt-0.5 w-full rounded-md bg-slate-800 shadow-md"
        >
          {#each people as value, i}
            {@const active = $listbox.active === value}
            {@const selected = $listbox.selected === value}
            <li
              class="cursor-default select-none p-2"
              class:bg-slate-300={active}
              class:text-slate-900={active}
              use:listbox.item={{ value }}
            >
              <span class="block truncate {selected ? 'font-medium' : 'font-normal'}"
                >{value.name}</span
              >
            </li>
          {/each}
        </ul>
      </Transition>
    </div>
  {/if}
</div>
