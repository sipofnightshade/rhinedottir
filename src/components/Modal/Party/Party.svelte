<script lang="ts">
  import { loadouts } from '$lib/stores/loadoutsStore';
  import { party } from '$lib/stores/partyStore';
  import Thumbnail from '../../Thumbnail/Thumbnail.svelte';

  // props
  export let id: 'one' | 'two' | 'three';

  // state
  let profileH;
  let contentH;

  function toggleLoadoutButton(loadout: any) {
    party.setPartyMember(id, loadout);
  }

  $: console.log(id, $party);
</script>

<div class="h-full overflow-hidden" bind:clientHeight={contentH}>
  <div bind:clientHeight={profileH} class="">
    <div class="h-64 w-full">
      <div class="mx-auto flex w-2/3 flex-col items-center text-slate-400">
        <p class="text-center text-xl">You have no teemmate selected</p>
        <img
          class="mt-2 h-40 w-40 opacity-50"
          src="images/ui/UI_EmotionIcon262.webp"
          alt="Sad Collei"
        />
      </div>
    </div>
  </div>
  <div class="h-full">
    <div style="height:{contentH - profileH}px" class="overflow-y-scroll">
      {#each $loadouts as item}
        <button
          on:click={() => toggleLoadoutButton(item)}
          class="mb-3 grid grid-cols-7 gap-1"
        >
          <h3 class="col-span-7 text-left capitalize text-slate-300">{item.title}</h3>
          <Thumbnail
            img="/images/character/{item.character.selected.name}.webp"
            vision={item.character.selected.vision}
            alt={item.character.selected.fullName}
          />
          <Thumbnail
            img="/images/weapon/{item.weapon.selected.name}.webp"
            alt={item.weapon.selected.fullName}
          />
          <Thumbnail
            img="/images/artifact/flower/{item.artifacts.flower.selected.name}.webp"
            alt={item.artifacts.flower.selected.fullName}
          />
          <Thumbnail
            img="/images/artifact/feather/{item.artifacts.feather.selected.name}.webp"
            alt={item.artifacts.feather.selected.fullName}
          />
          <Thumbnail
            img="/images/artifact/sands/{item.artifacts.sands.selected.name}.webp"
            alt={item.artifacts.sands.selected.fullName}
          />
          <Thumbnail
            img="/images/artifact/goblet/{item.artifacts.goblet.selected.name}.webp"
            alt={item.artifacts.goblet.selected.fullName}
          />
          <Thumbnail
            img="/images/artifact/circlet/{item.artifacts.circlet.selected.name}.webp"
            alt={item.artifacts.circlet.selected.fullName}
          />
        </button>
      {/each}
    </div>
  </div>
</div>
