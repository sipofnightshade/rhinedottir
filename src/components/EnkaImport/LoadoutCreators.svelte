<script lang="ts">
  import TeamIcon from '$lib/icons/TeamIcon.svelte';
  import ImportButton from './ImportButton.svelte';
  export let playerBuilds: any[];
</script>

<div class="mt-2">
  <div class="mt-2 grid grid-cols-4 gap-2 xs-375:grid-cols-6 xs:grid-cols-8">
    {#each Array(8) as _, index (index)}
      {#if playerBuilds[index]}
        <ImportButton build={playerBuilds[index]} />
      {:else}
        <div
          class="flex aspect-square items-center justify-center rounded-full border border-dashed border-slate-400"
        >
          <TeamIcon class="w-1/2" />
        </div>
      {/if}
    {/each}
  </div>
</div>
