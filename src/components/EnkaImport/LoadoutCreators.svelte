<script lang="ts">
  import TeamIcon from '$lib/icons/TeamIcon.svelte';
  import ImportButton from './ImportButton.svelte';
  export let playerBuilds: any[];
</script>

<div class="mt-3">
  <div
    class="horizontalScrollbar mt-2 flex gap-2 overflow-auto py-1 md:justify-between md:py-0"
  >
    {#each Array(8) as _, index (index)}
      {#if playerBuilds[index]}
        <ImportButton build={playerBuilds[index]} />
      {:else}
        <div
          class="flex aspect-square h-12 items-center justify-center rounded-full border border-dashed border-slate-400 md:h-11"
        >
          <TeamIcon class="w-1/2" />
        </div>
      {/if}
    {/each}
  </div>
</div>
