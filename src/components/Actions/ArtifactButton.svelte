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
  import { getArtifactSetCount } from '$lib/helpers/getArtifactSetCount';

  // types
  import type { ArtifactState } from '$lib/stores/artifactStore';
  import type { Action } from '$lib/types/actions';
  import type { CurrentCharacter } from '$lib/stores/characterStore';
  import type { Index_Stats } from '$lib/data/Stats';
  import type { ArtifactNames } from '$lib/types/artifacts';

  // props
  export let id: 'main' | 'one' | 'two' | 'three';
  export let currentStats: Index_Stats;
  export let currentChar: CurrentCharacter;
  export let currentArtifacts: ArtifactState;

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

  /** @todo 💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡💡
   * - Use Context to share Passives with ActionStats
   */

  const weaponType = currentChar.selected.weapon;
  let prevPassives: Stats[] = [];
  let prevActiveName: ArtifactNames;

  function handleSetPassives(passives: Stats[]) {
    // if passives didn't change, then return
    if (JSON.stringify(passives) === JSON.stringify(prevPassives)) return;

    prevPassives.forEach((passive) => {
      action.removeStat(id, 'self', passive.scaling, passive.coef as number);
    });
    passives.forEach((passive) => {
      action.addStat(id, 'self', passive.scaling, passive.coef as number);
    });

    prevPassives = passives;
  }

  function handleActiveSets(name: ArtifactNames) {
    if (!name) {
      activeSets.removeActiveSet(name, id);
      return;
    }

    activeSets.setActiveSet(name, id);
  }

  $: setCount = getArtifactSetCount(currentArtifacts);
  $: setBonuses = getArtifactSetBonuses(setCount, weaponType);

  $: currentPassives = setBonuses.passives;
  $: handleSetPassives(currentPassives);

  $: currentActive = setBonuses.active as Action;
  $: handleActiveSets(currentActive.name as ArtifactNames);

  $: showAction = currentActive.unique
    ? $activeSets.get(currentActive.name as ArtifactNames) === id
    : true;
</script>

{#if currentActive && showAction}
  <svelte:component
    this={buttons[currentActive.actionType]}
    data={currentActive}
    type="artifact"
    {id}
    {currentChar}
    {currentStats}
  />
{/if}
