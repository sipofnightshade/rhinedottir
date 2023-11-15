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

  // stores / helpers / context
  import { getArtifactSetBonuses } from '$lib/helpers/getArtifactSetBonus';
  import { action } from '$lib/stores/actionStore';
  import { activeSets } from '$lib/stores/activeSetsStore';

  // types
  import type { ArtifactState } from '$lib/stores/artifactStore';
  import type { Action } from '$lib/types/actions';
  import type { WeaponCategory } from '$lib/types/global';
  import type { ArtifactNames } from '$lib/types/artifacts';
  import type { CurrentCharacter } from '$lib/stores/characterStore';
  import type { Index_Stats } from '$lib/data/Stats';

  // props
  export let setData: ArtifactState;
  export let id: 'main' | 'one' | 'two' | 'three';
  export let currentStats: Index_Stats;
  export let currentChar: CurrentCharacter;

  type Stats = { scaling: string; coef: number | number[] };

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

  let prevPassives: Stats[] = [];
  let currentActive: Action;

  // Function to add or remove passive stats from the store
  function updateBonuses(bonuses: Stats[], isAdding: boolean) {
    for (const bonus of bonuses) {
      const { scaling, coef } = bonus;
      if (isAdding) {
        action.addStat(id, 'self', scaling, coef as number);
      } else {
        action.removeStat(id, 'self', scaling, coef as number);
      }
    }
  }

  function setBonuses(data: ArtifactState, weapon: WeaponCategory) {
    const artifactSetBonuses = getArtifactSetBonuses(data, weapon, $activeSets.artifacts);
    const newPassives = artifactSetBonuses.passives;
    if (JSON.stringify(newPassives) !== JSON.stringify(prevPassives)) {
      updateBonuses(prevPassives, false);
      updateBonuses(newPassives, true);
      // Update prevPassives with the latest value
      prevPassives = newPassives;
    }
    currentActive = artifactSetBonuses.active as Action;
    activeSets.setActiveSet('artifacts', id, currentActive.url as ArtifactNames);
  }

  $: setBonuses(setData, currentChar.selected.weapon);
</script>

{#if currentActive?.actionType}
  <svelte:component
    this={buttons[currentActive.actionType]}
    data={currentActive}
    type="artifact"
    {id}
    {currentChar}
    {currentStats}
  />
{/if}
