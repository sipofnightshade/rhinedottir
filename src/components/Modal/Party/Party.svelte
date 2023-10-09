<script lang="ts">
  import Loadout from './Loadout.svelte';

  import { loadouts } from '$lib/stores/loadoutsStore';
  import { party } from '$lib/stores/partyStore';
  import { character } from '$lib/stores/characterStore';
  import type { CharacterRecord } from '$lib/types/global';

  // props
  export let id: 'one' | 'two' | 'three';

  // state
  let profileH;
  let contentH;

  function toggleLoadoutButton(loadout: any) {
    party.setPartyMember(id, loadout);
  }

  function removeDuplicateCharacter(selected: CharacterRecord) {
    if (selected.id === $party.one?.character.selected.id) {
      party.removePartyMember('one');
    }

    if (selected.id === $party.two?.character.selected.id) {
      party.removePartyMember('two');
    }

    if (selected.id === $party.three?.character.selected.id) {
      party.removePartyMember('three');
    }
  }

  $: removeDuplicateCharacter($character.selected);
</script>

<div class="h-full overflow-hidden" bind:clientHeight={contentH}>
  <div bind:clientHeight={profileH} class="">
    <div class="w-full">Filters</div>
  </div>
  <div class="h-full">
    <div style="height:{contentH - profileH}px" class="overflow-y-auto">
      {#each $loadouts as item}
        {#if item.character.selected !== $character.selected.name}
          <Loadout {item} {id} />
        {/if}
      {/each}
    </div>
  </div>
</div>
