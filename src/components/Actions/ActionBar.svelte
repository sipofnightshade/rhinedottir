<script lang="ts">
  import { character } from '$lib/stores/characterStore';

  // import components
  import ToggleButton from './_ToggleButton.svelte';
  import PassiveButton from './_PassiveButton.svelte';
  import StackButton from './_StackButton.svelte';
  import SelectButton from './_SelectButton.svelte';
  import MultiSelectButton from './_MultiSelectButton.svelte';

  export let margin = true;

  const buttons = {
    toggle: ToggleButton,
    passive: PassiveButton,
    stack: StackButton,
    select: SelectButton,
    multiSelect: MultiSelectButton,
    input: MultiSelectButton
  };

  // import { onMount } from 'svelte';
  const charName = 'traveleranemo';
  const weaponName = 'polarstar';
</script>

<section
  class="grid w-full auto-cols-min grid-flow-col gap-1 self-end overflow-x-auto rounded-xl bg-slate-700 p-2 pt-1"
  class:my-4={margin}
>
  {#each $character.selected.actions as data}
    <!-- {#if data.actionType === 'toggle'}
      <ToggleButton {data} element={$character.selected.vision} />
    {:else if data.actionType === 'stack'}
      <StackButton {data} element={$character.selected.vision} />
    {:else if data.actionType === 'passive'}
      <PassiveButton {data} element={$character.selected.vision} />
    {:else if data.actionType === 'select'}
      <SelectButton {data} element={$character.selected.vision} />
    {:else if data.actionType === 'multiSelect'}
      <MultiSelectButton {data} element={$character.selected.vision} />
    {/if} -->
    <svelte:component
      this={buttons[data.actionType]}
      {data}
      element={$character.selected.vision}
      id="main"
    />
  {/each}
</section>
