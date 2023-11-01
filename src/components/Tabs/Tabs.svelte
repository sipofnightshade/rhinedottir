<script lang="ts">
  export let items: any = [];
  export let activeTabValue = 1;
  export let buttonGrid = 'grid-cols-3';

  const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<ul class="grid list-none justify-between rounded-full bg-slate-700 p-1 {buttonGrid}">
  {#each items as item}
    <li
      class="flex items-center justify-center rounded-full"
      class:bg-slate-50={activeTabValue === item.value}
      class:text-slate-700={activeTabValue === item.value}
    >
      <button class="h-full w-full rounded-full py-1.5" on:click={handleClick(item.value)}
        >{item.label}</button
      >
    </li>
  {/each}
</ul>
<section class="flex overflow-hidden">
  {#each items as item (item.value)}
    {#if activeTabValue == item.value}
      <div class="w-full">
        <svelte:component this={item.component} />
      </div>
    {/if}
  {/each}
</section>
