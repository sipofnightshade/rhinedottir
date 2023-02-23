<script lang="ts">
  import { createListbox } from 'svelte-headlessui';
  import Transition from 'svelte-transition';

  let stats = [
    { id: 1, label: 'CRIT DMG' },
    { id: 2, label: 'CRIT Rate' },
    { id: 3, label: 'ATK %' }
  ];

  let selected: any;
  let statValue: any;

  type Person = { name: string };
  type People = Person[];

  // prettier-ignore
  const people = [
		{ name: 'Wade Cooper' },
		{ name: 'Arlene Mccoy' },
		{ name: 'Devon Webb' },
		{ name: 'Tom Cook' },
		{ name: 'Tanya Fox' },
		{ name: 'Hellen Schmidt' },
	]

  // TODO: type list so 'selected' isn't 'any'
  const listbox = createListbox({ label: 'Actions', selected: people[2] });

  function onSelect(e: Event) {
    console.log('select', (e as CustomEvent).detail);
  }
</script>

<div class="grid grid-cols-3 gap-x-1">
  <!-- <select
    style="appearance: none;"
    class="col-span-2 appearance-none rounded-md bg-slate-800 py-2 pl-1"
    bind:value={selected}
    on:change={() => console.log(selected)}
  >
    {#each stats as stat}
      <option value={stat}>
        {stat.label}
      </option>
    {/each}
  </select> -->
  <div class="relative col-span-2 text-sm">
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
  <input
    class="col-span-1 appearance-none rounded-md border border-slate-800 bg-slate-800 py-1 px-1 text-right focus:border-slate-400 focus:ring-slate-300"
    bind:value={statValue}
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
