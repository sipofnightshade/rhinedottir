<script lang="ts">
  // stores
  import { character } from '$lib/stores/characterStore';
  import { party } from '$lib/stores/partyStore';

  // import components
  import ToggleButton from './_ToggleButton.svelte';
  import PassiveButton from './_PassiveButton.svelte';
  import StackButton from './_StackButton.svelte';
  import SelectButton from './_SelectButton.svelte';
  import MultiSelectButton from './_MultiSelectButton.svelte';
  import ArtifactButton from './ArtifactButton.svelte';
  import { artifact } from '$lib/stores/artifactStore';

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

  // import { onMount } from 'svelte';
  // const charName = 'traveleranemo';
  // const weaponName = 'polarstar';

  /**
   * @todo
   * -
   */
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
    />
  {/each}
  <!-- main weapon actions -->
  <!-- main artifact actions -->
  <ArtifactButton id="main" setData={$artifact} />

  <!-- Party 1 -->
  {#if $party.one}
    {#each $party.one.character.selected.actions as data}
      <svelte:component
        this={buttons[data.actionType]}
        {data}
        type={$party.one.character.selected.vision}
        id="one"
      />
    {/each}
  {/if}
</section>
