<script lang="ts">
  import Thumbnail from '../../Thumbnail/Thumbnail.svelte';

  //types
  import type { LoadoutItem } from '$lib/stores/loadoutsStore';
  import type { ArtifactType } from '$lib/types/artifacts';

  // stores
  import { loadouts } from '$lib/stores/loadoutsStore';
  import { party } from '$lib/stores/partyStore';

  // props
  export let id: 'one' | 'two' | 'three';
  export let item: LoadoutItem;

  const artifactTypes: ArtifactType[] = [
    'flower',
    'feather',
    'sands',
    'goblet',
    'circlet'
  ];

  function setPartyMember(data: any) {
    party.setPartyMember(id, item);
    console.log(data);
  }
</script>

<button on:click={() => setPartyMember(item)} class="mb-3 grid grid-cols-7 gap-1">
  <h3 class="col-span-7 text-left capitalize text-slate-300">{item.title}</h3>
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
    />
  {/each}
</button>
