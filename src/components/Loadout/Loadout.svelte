<script lang="ts">
  //types
  import type { LoadoutItem } from '$lib/stores/loadoutsStore';

  // stores & actions
  import { loadouts } from '$lib/stores/loadoutsStore';
  import { party } from '$lib/stores/partyStore';
  import { longpress } from '$lib/actions/longpress';
  import { character } from '$lib/stores/characterStore';
  import { weapon } from '$lib/stores/weaponStore';
  import { artifact } from '$lib/stores/artifactStore';
  // components
  import LoadoutBlock from '../Loadout/LoadoutBlock.svelte';

  type PartyID = 'one' | 'two' | 'three';
  // props
  export let item: LoadoutItem;

  let deletable = false;

  function removeDuplicateParty(selected: string) {
    const partyIDs: PartyID[] = ['one', 'two', 'three'];
    partyIDs.forEach((id) => {
      if ($party[id]?.character.selected.id === selected) {
        party.removePartyMember(id);
      }
    });
  }

  function handleClick() {
    character.importChar(item.character);
    weapon.importWeapon(item.weapon, item.character.weapon);
    artifact.importArtifacts(item.artifacts);

    // remove any of the same character from party
    removeDuplicateParty(item.character.id);
  }

  function handleLongPress() {
    deletable = !deletable;
  }

  function handleDelete() {
    if (deletable) {
      loadouts.removeLoadout(item.id);
    }
  }
</script>

<div>
  <button
    on:click={handleClick}
    on:longpress={handleLongPress}
    use:longpress={500}
    disabled={deletable}
  >
    <LoadoutBlock {item} {deletable} />
  </button>
  {#if deletable}
    <div class="mt-1 flex justify-between gap-2">
      <button
        class="w-full rounded-md border border-slate-500 p-2"
        on:click={() => (deletable = false)}
      >
        Cancel
      </button>
      <button class="w-full rounded-md bg-red-700 p-2" on:click={handleDelete}>
        Delete
      </button>
    </div>
  {/if}
</div>
