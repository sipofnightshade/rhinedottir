<script lang="ts">
  // stores & context
  import { character } from '$lib/stores/characterStore';
  import { party } from '$lib/stores/partyStore';
  import { artifact } from '$lib/stores/artifactStore';
  import { stats } from '$lib/stores/statsStore';

  // import components
  import ToggleButton from './_ToggleButton.svelte';
  import PassiveButton from './_PassiveButton.svelte';
  import StackButton from './_StackButton.svelte';
  import SelectButton from './_SelectButton.svelte';
  import MultiSelectButton from './_MultiSelectButton.svelte';
  import { action } from '$lib/stores/actionStore';

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

  $: if ($character.selected) action.reset('main');
  $: if ($party.one && $party.one.character) action.reset('one');
  $: if ($party.two && $party.two.character) action.reset('two');
  $: if ($party.three && $party.three.character) action.reset('three');
</script>

<section
  class="grid w-full auto-cols-min grid-flow-col gap-1 self-end overflow-x-auto rounded-xl bg-slate-700 p-2 pt-1"
  class:my-4={margin}
>
  {#each $character.selected.actions as data (data.name)}
    {#if data.actionType === 'toggle'}
      <svelte:component
        this={buttons[data.actionType]}
        {data}
        type={$character.selected.vision}
        id="main"
        character={$character}
        stats={$stats.main}
      />
    {/if}
  {/each}
  <!-- main weapon actions -->
  <!-- main artifact actions -->
</section>
