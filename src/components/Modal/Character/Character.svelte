<script lang="ts">
  // components
  import CharacterBuilder from './CharacterBuilder.svelte';
  import CharacterLoadouts from './CharacterLoadouts.svelte';

  const items: any = [
    { label: 'Builder', value: 1, component: CharacterBuilder },
    { label: 'Loadouts', value: 2, component: CharacterLoadouts }
  ];

  let activeTabValue = 1;

  const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<!-- Artifact TABS -->
<div class="flex h-full flex-col gap-2 overflow-hidden xs:gap-4">
  <ul
    class="grid list-none grid-cols-2 justify-between rounded-full border border-slate-600 bg-slate-700 p-0"
  >
    {#each items as item}
      <li class="flex items-center justify-center rounded-full">
        <button
          class="h-full w-full rounded-full py-2.5"
          on:click={handleClick(item.value)}
          class:bg-slate-800={activeTabValue === item.value}
          class:text-slate-100={activeTabValue === item.value}>{item.label}</button
        >
      </li>
    {/each}
  </ul>
  <section class="flex h-full flex-col overflow-hidden">
    {#each items as item (item.value)}
      <!-- {#if activeTabValue === item.value} -->
      <div
        class="flex h-full w-full flex-col overflow-hidden {activeTabValue === item.value
          ? ''
          : 'hidden'}"
      >
        <svelte:component this={item.component} />
      </div>
      <!-- {/if} -->
    {/each}
  </section>
</div>
