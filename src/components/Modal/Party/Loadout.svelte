<script lang="ts">
  import Thumbnail from '../../Thumbnail/Thumbnail.svelte';
  import Close from '$lib/icons/Close.svelte';
  import RoleTag from './RoleTag.svelte';
  import { labels } from '$lib/data/Levels';

  //types
  import type { LoadoutItem } from '$lib/stores/loadoutsStore';
  import type { ArtifactType } from '$lib/types/artifacts';

  // stores & actions
  import { loadouts } from '$lib/stores/loadoutsStore';
  import { party } from '$lib/stores/partyStore';
  import { longpress } from '$lib/actions/longpress';

  // props
  export let id: 'one' | 'two' | 'three';
  export let item: LoadoutItem;

  let deletable = false;

  const artifactTypes: ArtifactType[] = [
    'flower',
    'feather',
    'sands',
    'goblet',
    'circlet'
  ];

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

<button
  on:click={handleClick}
  on:longpress={handleLongPress}
  use:longpress={500}
  class="flex w-full flex-col gap-y-2 rounded-lg border border-slate-600 p-3 transition-all"
  class:bg-slate-950={isActive}
  class:opacity-50={deletable}
  class:hover:border-slate-300={!deletable}
  disabled={deletable}
>
  <!-- Title -->
  <div class="pointer-events-none flex w-full items-center justify-between px-1">
    <h3 class="text-left capitalize text-slate-300">{item.title}</h3>
    {#if isActive}
      <Close class="h-3 w-3 fill-slate-300" />
    {/if}
  </div>
  <!-- Tags -->
  <div class="pointer-events-none flex w-full items-center text-sm">
    <div class="mr-4">
      <span class="w-fit rounded-full bg-slate-800 px-2.5 py-1">
        {labels.lvl[item.character.lvl]}
      </span>
      <span class="w-fit rounded-full bg-slate-800 px-2.5 py-1">
        C{item.character.constellation}
      </span>
    </div>
    <div>
      <span
        class="rounded-full bg-slate-800 px-2 py-1"
        class:text-green-500={item.character.lvlBonus.atk > 0}
      >
        {item.character.atk + 1 + item.character.lvlBonus.atk}
      </span>
      <span
        class="rounded-full bg-slate-800 px-2 py-1"
        class:text-green-500={item.character.lvlBonus.skill > 0}
      >
        {item.character.skill + 1 + item.character.lvlBonus.skill}
      </span>
      <span
        class="rounded-full bg-slate-800 px-2 py-1"
        class:text-green-500={item.character.lvlBonus.burst > 0}
      >
        {item.character.burst + 1 + item.character.lvlBonus.burst}
      </span>
    </div>

    <div class="ml-auto">
      <RoleTag role={item.tag} />
    </div>
  </div>
  <!-- Images -->
  <div class="pointer-events-none grid grid-cols-7 gap-1">
    <Thumbnail
      img="/images/character/{item.character.selected}.webp"
      vision={item.character.vision}
      alt={item.character.selected}
    />
    <Thumbnail
      img="/images/weapon/{item.weapon.selected}.webp"
      alt={item.weapon.selected}
    />
    {#each artifactTypes as type}
      <Thumbnail
        img="/images/artifact/{type}/{item.artifacts[type].selected}.webp"
        alt={item.artifacts[type].selected}
        imgClasses="w-3/4"
      />
    {/each}
  </div>
</button>
{#if deletable}
  <div class="mt-1 flex justify-between gap-2">
    <button
      class="w-full rounded-md border border-slate-500 p-2"
      on:click={() => (deletable = false)}>Cancel</button
    >
    <button class="w-full rounded-md bg-red-700 p-2" on:click={handleDelete}
      >Delete</button
    >
  </div>
{/if}
