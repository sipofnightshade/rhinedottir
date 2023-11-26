<script lang="ts">
  export let items: any = [];
  export let activeTabValue = 1;
  export let buttonGrid = 'grid-cols-3';

  const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<ul
  class="grid list-none grid-cols-2 justify-between rounded-full border border-slate-600 bg-slate-700 p-0 {buttonGrid}"
>
  {#each items as item}
    <li class="flex items-center justify-center rounded-full">
      <button
        class="h-full w-full rounded-full py-2.5 transition-colors"
        on:click={handleClick(item.value)}
        class:bg-slate-800={activeTabValue === item.value}
        class:text-slate-100={activeTabValue === item.value}>{item.label}</button
      >
    </li>
  {/each}
</ul>
<section class="flex h-full overflow-hidden">
  {#each items as item (item.value)}
    <!-- {#if activeTabValue === item.value} -->
    <div class="w-full {activeTabValue === item.value ? '' : 'hidden'}">
      <svelte:component this={item.component} />
    </div>
    <!-- {/if} -->
  {/each}
</section>
