<script lang="ts">
  // components
  import Loadout from './Loadout.svelte';

  // stores
  import { loadouts } from '$lib/stores/loadoutsStore';
  import { party } from '$lib/stores/partyStore';
  import { character } from '$lib/stores/characterStore';

  // props
  export let id: 'one' | 'two' | 'three';

  // state
  let profileH;
  let contentH;
</script>

<div class="h-full overflow-hidden" bind:clientHeight={contentH}>
  <div bind:clientHeight={profileH} class="mb-3 rounded-md bg-slate-800 p-4">
    <div class="w-full">Filters</div>
  </div>
  <div class="h-full">
    <div style="height:{contentH - profileH}px" class="overflow-y-auto">
      {#each $loadouts as item (item.id)}
        {#if item.character.id !== $character.selected.id}
          <Loadout {item} {id} /><br />
        {/if}
      {/each}
    </div>
  </div>
</div>
