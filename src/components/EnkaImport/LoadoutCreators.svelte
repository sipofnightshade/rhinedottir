<script lang="ts">
  import ImportButton from './ImportButton.svelte';
  export let playerBuilds: any[];
</script>

<div class="mt-2">
  <h3>Select to import:</h3>
  <div class="mt-2 grid grid-cols-8 gap-2">
    {#each playerBuilds as build (build.character.selected)}
      <ImportButton {build} />
    {/each}
  </div>
</div>
