<script lang="ts">
  // import components
  import ToggleButton from './_ToggleButton.svelte';
  import PassiveButton from './_PassiveButton.svelte';
  import StackButton from './_StackButton.svelte';
  import SelectButton from './_SelectButton.svelte';
  import MultiSelectButton from './_MultiSelectButton.svelte';
  import VisionMatchButton from './_VisionMatchButton.svelte';
  import VisionMatchToggle from './_VisionMatchToggle.svelte';
  import AddLevelButton from './_AddLevelButton.svelte';
  import RegionMatchButton from './_RegionMatchButton.svelte';
  // types
  import type { CurrentCharacter } from '$lib/stores/characterStore';
  import type { Index_Stats } from '$lib/data/Stats';
  import type { Action } from '$lib/types/actions';
  import { visions } from '$lib/stores/visionsStore';
  import { regions } from '$lib/stores/regionsStore';

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
    visionMatchToggle: VisionMatchToggle,
    addLevel: AddLevelButton,
    region: RegionMatchButton
  };

  // level requirements
  $: levelReq = data.level ?? 0;

  // constellation requirements
  $: constellationReq = data.constellation ?? 0;
  $: hideConst = data.hideAtConstellation
    ? currentChar.constellation >= data.hideAtConstellation
    : false;

  // vision requirements
  const hasVisionRequirement = data.hasVisionRequirement
    ? [...data.hasVisionRequirement]
    : null;
  $: visionReq = hasVisionRequirement
    ? $visions.every((value) => hasVisionRequirement.includes(value))
    : true;

  // region requirements
  const hasRegionRequirement = data.hasRegionRequirement
    ? [...data.hasRegionRequirement]
    : null;
  $: regionReq = hasRegionRequirement
    ? $regions.every((value) => hasRegionRequirement.includes(value))
    : true;

  // final logic evaluation
  $: isButtonMounted =
    currentChar.constellation >= constellationReq &&
    currentChar.lvl >= levelReq &&
    !hideConst &&
    visionReq &&
    regionReq;
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
