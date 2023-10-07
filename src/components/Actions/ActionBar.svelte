<script lang="ts">
  // stores & context
  import { character } from '$lib/stores/characterStore';
  import { weapon } from '$lib/stores/weaponStore';
  import { party } from '$lib/stores/partyStore';
  import { artifact } from '$lib/stores/artifactStore';
  import { stats } from '$lib/stores/statsStore';
  import { action } from '$lib/stores/actionStore';

  // import components
  import ArtifactButton from './ArtifactButton.svelte';
  import WeaponButton from './WeaponButton.svelte';
  import CharacterButton from './CharacterButton.svelte';

  export let margin = true;

  $: $character.selected, action.reset('main');
  $: $party.one && $party.one.character, action.reset('one');
  $: $party.two && $party.two.character, action.reset('two');
  $: $party.three && $party.three.character, action.reset('three');
</script>

<section
  class="grid h-[76px] w-full auto-cols-min grid-flow-col gap-1 self-end overflow-x-auto rounded-xl bg-slate-700 p-2 pt-1"
  class:my-4={margin}
>
  {#each $character.selected.actions as data (data.name)}
    <CharacterButton
      {data}
      id="main"
      currentChar={$character}
      currentStats={$stats.main}
    />
  {/each}
  <ArtifactButton
    setData={$artifact}
    id="main"
    currentChar={$character}
    currentStats={$stats.main}
  />
  <WeaponButton
    currentWeapon={$weapon}
    id="main"
    currentChar={$character}
    currentStats={$stats.main}
  />
</section>
