<script lang="ts">
  // import components
  import ToggleButton from './_ToggleButton.svelte';
  import PassiveButton from './_PassiveButton.svelte';
  import StackButton from './_StackButton.svelte';
  import SelectButton from './_SelectButton.svelte';
  import MultiSelectButton from './_MultiSelectButton.svelte';

  // misc
  import type { ArtifactState } from '$lib/stores/artifactStore';
  import { getArtifactSetBonuses } from '$lib/helpers/getArtifactSetBonus';
  import { action } from '$lib/stores/actionStore';
  import type { ALL_STATS } from '$lib/types/talents';
  import type { Action } from '$lib/types/actions';

  // props
  export let setData: ArtifactState;
  export let id: 'main' | 'one' | 'two' | 'three';

  type Stats = { scaling: ALL_STATS; coef: number | number[] };

  const buttons = {
    toggle: ToggleButton,
    passive: PassiveButton,
    stack: StackButton,
    select: SelectButton,
    multiSelect: MultiSelectButton,
    input: MultiSelectButton,
    visionMatch: ToggleButton
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

  function setBonuses(data: ArtifactState) {
    const artifactSetBonuses = getArtifactSetBonuses(data);
    const newPassives = artifactSetBonuses.passives;
    if (JSON.stringify(newPassives) !== JSON.stringify(prevPassives)) {
      updateBonuses(prevPassives, false);
      updateBonuses(newPassives, true);
      // Update prevPassives with the latest value
      prevPassives = newPassives;
    }
    currentActive = artifactSetBonuses.active as Action;
    console.log('currentActive', currentActive);
  }

  $: setBonuses(setData);
</script>

{#if currentActive?.actionType}
  <svelte:component
    this={buttons[currentActive.actionType]}
    data={currentActive}
    type="artifact"
    {id}
  />
{/if}
