<script lang="ts">
  // import components
  import ToggleButton from './_ToggleButton.svelte';
  import PassiveButton from './_PassiveButton.svelte';
  import StackButton from './_StackButton.svelte';
  import SelectButton from './_SelectButton.svelte';
  import MultiSelectButton from './_MultiSelectButton.svelte';
  import VisionMatchButton from './_VisionMatchButton.svelte';
  import VisionMatchToggle from './_VisionMatchToggle.svelte';

  // types
  import type { CurrentCharacter } from '$lib/stores/characterStore';
  import type { Index_Stats } from '$lib/data/Stats';
  import type { Action } from '$lib/types/actions';

  // props
  export let data: Action;
  export let id: 'main' | 'one' | 'two' | 'three';
  export let currentStats: Index_Stats;
  export let currentChar: CurrentCharacter;

  const buttons = {
    toggle: ToggleButton,
    passive: PassiveButton,
    stack: StackButton,
    select: SelectButton,
    multiSelect: MultiSelectButton,
    input: MultiSelectButton,
    visionMatch: VisionMatchButton,
    visionMatchToggle: VisionMatchToggle
  };

  const constellationReq = data.constellation ?? 0;
  const levelReq = data.level ?? 0;

  $: isButtonMounted = currentChar.constellation >= constellationReq && true;
</script>

{#if isButtonMounted}
  <svelte:component
    this={buttons[data.actionType]}
    {data}
    type={currentChar.selected.vision}
    {id}
    {currentChar}
    {currentStats}
  />
{/if}
