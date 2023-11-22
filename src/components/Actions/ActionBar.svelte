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
  import ResonanceButton from './ResonanceButton.svelte';

  $: $character.selected, action.reset('main');
  $: $party.one && $party.one.character, action.reset('one');
  $: $party.two && $party.two.character, action.reset('two');
  $: $party.three && $party.three.character, action.reset('three');
</script>

<section
  class="horizontalScrollbar flex w-full auto-cols-min grid-flow-col items-center gap-1 overflow-x-auto overflow-y-hidden rounded-lg bg-slate-700 px-2 py-4 md:py-2"
>
  {#each $character.selected.actions as data (data.name)}
    <CharacterButton
      {data}
      id="main"
      currentChar={$character}
      currentStats={$stats.main}
    />
  {/each}
  <WeaponButton
    currentWeapon={$weapon}
    id="main"
    currentChar={$character}
    currentStats={$stats.main}
  />
  <ArtifactButton
    id="main"
    currentChar={$character}
    currentStats={$stats.main}
    currentArtifacts={$artifact}
  />

  <!-- Party one -->
  {#if $party.one && $stats.one}
    {#each $party.one.character.selected.actions as data (data.name)}
      <CharacterButton
        {data}
        id="one"
        currentChar={$party.one.character}
        currentStats={$stats.one}
      />
    {/each}
    <WeaponButton
      currentWeapon={$party.one.weapon}
      id="one"
      currentChar={$party.one.character}
      currentStats={$stats.one}
    />
    <ArtifactButton
      id="one"
      currentChar={$party.one.character}
      currentStats={$stats.one}
      currentArtifacts={$party.one.artifacts}
    />
  {/if}

  <!-- Party two -->
  {#if $party.two && $stats.two}
    {#each $party.two.character.selected.actions as data (data.name)}
      <CharacterButton
        {data}
        id="two"
        currentChar={$party.two.character}
        currentStats={$stats.two}
      />
    {/each}
    <WeaponButton
      currentWeapon={$party.two.weapon}
      id="two"
      currentChar={$party.two.character}
      currentStats={$stats.two}
    />
    <ArtifactButton
      id="two"
      currentChar={$party.two.character}
      currentStats={$stats.two}
      currentArtifacts={$party.two.artifacts}
    />
  {/if}
  <!-- Party three -->
  {#if $party.three && $stats.three}
    {#each $party.three.character.selected.actions as data (data.name)}
      <CharacterButton
        {data}
        id="three"
        currentChar={$party.three.character}
        currentStats={$stats.three}
      />
    {/each}
    <WeaponButton
      currentWeapon={$party.three.weapon}
      id="three"
      currentChar={$party.three.character}
      currentStats={$stats.three}
    />
    <ArtifactButton
      id="three"
      currentChar={$party.three.character}
      currentStats={$stats.three}
      currentArtifacts={$party.three.artifacts}
    />
  {/if}

  <ResonanceButton />
</section>
