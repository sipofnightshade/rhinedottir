<script lang="ts">
  //types
  import type { LoadoutItem } from '$lib/stores/loadoutsStore';

  // stores & actions
  import { loadouts } from '$lib/stores/loadoutsStore';
  import { party } from '$lib/stores/partyStore';
  import { longpress } from '$lib/actions/longpress';
  import LoadoutBlock from '../../Loadout/LoadoutBlock.svelte';

  // props
  export let id: 'one' | 'two' | 'three';
  export let item: LoadoutItem;

  let deletable = false;

  function handleClick() {
    if ($party[id]?.loadoutID === item.id) {
      party.removePartyMember(id);
      return;
    } else {
      party.setPartyMember(id, item);
      removeDuplicateParty(item.character.id);
      return;
    }
  }

  function removeDuplicateParty(selected: string) {
    if (id !== 'one' && selected === $party.one?.character.selected.id) {
      party.removePartyMember('one');
    }

    if (id !== 'two' && selected === $party.two?.character.selected.id) {
      party.removePartyMember('two');
    }

    if (id !== 'three' && selected === $party.three?.character.selected.id) {
      party.removePartyMember('three');
    }
  }

  function handleLongPress() {
    deletable = !deletable;
  }

  function handleDelete() {
    if (deletable) {
      loadouts.removeLoadout(item.id);
    }
  }

  $: isActive = $party[id]?.loadoutID === item.id;
</script>

<div>
  <button
    on:click={handleClick}
    on:longpress={handleLongPress}
    use:longpress={500}
    disabled={deletable}
  >
    <LoadoutBlock {item} {isActive} {deletable} />
  </button>
  {#if deletable}
    <div class="mt-1 flex justify-between gap-2">
      <button
        class="w-full rounded-md border border-slate-500 p-2"
        on:click={() => (deletable = false)}>Cancel</button
      >
      <button class="w-full rounded-md bg-red-700 p-2" on:click={handleDelete}>
        Delete
      </button>
    </div>
  {/if}
</div>
