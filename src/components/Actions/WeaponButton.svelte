<script lang="ts">
  // import components
  import ToggleButton from './_ToggleButton.svelte';
  import PassiveButton from './_PassiveButton.svelte';
  import StackButton from './_StackButton.svelte';
  import SelectButton from './_SelectButton.svelte';
  import MultiSelectButton from './_MultiSelectButton.svelte';
  import VisionMatchButton from './_VisionMatchButton.svelte';
  import VisionMatchToggle from './_VisionMatchToggle.svelte';
  import AddLevelButton from './AddLevelButton.svelte';
  // stores / helpers / context

  // types
  import type { Action } from '$lib/types/actions';
  import type { CurrentCharacter } from '$lib/stores/characterStore';
  import type { Index_Stats } from '$lib/data/Stats';
  import type { CurrentWeapon } from '$lib/stores/weaponStore';

  // props
  export let currentWeapon: CurrentWeapon;
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
    addLevel: AddLevelButton
  };

  let actionData: Action[] = [];

  $: selected = currentWeapon.selected;
  $: actions = currentWeapon.selected.action;
  $: refinement = currentWeapon.refinement;

  /**
   * @todo
   * - set weapon passives on mount
   * ✅ - handle weapon refinement.
   */

  function setWeaponBonuses(actions: any, refinement: number) {
    if (!actions) return;
    // ------------------
    actions.forEach((action: Action) => {
      actionData.push({
        ...action,
        name: selected.fullName,
        url: selected.name,
        // @ts-ignore
        values: action.values[refinement]
      });
    });
  }

  $: if (selected) {
    actionData = [];
    setWeaponBonuses(actions, refinement);
  }
</script>

{#each actionData as action}
  <svelte:component
    this={buttons[action.actionType]}
    data={action}
    type="weapon"
    {id}
    {currentChar}
    {currentStats}
  />
{/each}
