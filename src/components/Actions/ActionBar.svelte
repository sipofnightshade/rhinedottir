<script lang="ts">
  // stores & context
  import { character } from '$lib/stores/characterStore';
  import { party } from '$lib/stores/partyStore';
  import { artifact } from '$lib/stores/artifactStore';

  // import components
  import ToggleButton from './_ToggleButton.svelte';
  import PassiveButton from './_PassiveButton.svelte';
  import StackButton from './_StackButton.svelte';
  import SelectButton from './_SelectButton.svelte';
  import MultiSelectButton from './_MultiSelectButton.svelte';
  import ArtifactButton from './ArtifactButton.svelte';

  export let margin = true;

  const buttons = {
    toggle: ToggleButton,
    passive: PassiveButton,
    stack: StackButton,
    select: SelectButton,
    multiSelect: MultiSelectButton,
    input: MultiSelectButton
    // visionMatch: VisionMatchButton
  };
</script>

<section
  class="grid w-full auto-cols-min grid-flow-col gap-1 self-end overflow-x-auto rounded-xl bg-slate-700 p-2 pt-1"
  class:my-4={margin}
>
  {#each $character.selected.actions as data}
    <svelte:component
      this={buttons[data.actionType]}
      {data}
      type={$character.selected.vision}
      id="main"
      character={$character}
    />
  {/each}
  <!-- main weapon actions -->
  <!-- main artifact actions -->
  <ArtifactButton id="main" setData={$artifact} character={$character} />

  <!-- Party 1 -->
  {#if $party.one}
    {#each $party.one.character.selected.actions as data}
      <svelte:component
        this={buttons[data.actionType]}
        {data}
        type={$party.one.character.selected.vision}
        id="one"
        character={$party.one.character}
      />
    {/each}
    <ArtifactButton
      id="one"
      setData={$party.one.artifacts}
      character={$party.one.character}
    />
  {/if}
  <!-- Party 2 -->
  {#if $party.two}
    {#each $party.two.character.selected.actions as data}
      <svelte:component
        this={buttons[data.actionType]}
        {data}
        type={$party.two.character.selected.vision}
        id="two"
        character={$party.two.character}
      />
    {/each}
    <ArtifactButton
      id="two"
      setData={$party.two.artifacts}
      character={$party.two.character}
    />
  {/if}

  <!-- Party 3 -->
  {#if $party.three}
    {#each $party.three.character.selected.actions as data}
      <svelte:component
        this={buttons[data.actionType]}
        {data}
        type={$party.three.character.selected.vision}
        id="three"
        character={$party.three.character}
      />
    {/each}
    <ArtifactButton
      id="three"
      setData={$party.three.artifacts}
      character={$party.three.character}
    />
  {/if}
</section>
