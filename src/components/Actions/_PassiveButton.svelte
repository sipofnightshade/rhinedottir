<script lang="ts">
  import type { Action } from '$lib/types/talents';
  import type { Visions } from '$lib/types/global';
  import ActionButton from './ActionButton.svelte';
  import { action } from '$lib/stores/actionStore';
  import { onMount } from 'svelte';

  export let element: Visions;
  export let data: Action;

  let isActive = true;

  function handleToggle() {
    isActive = !isActive;
    if (isActive) {
      data.values.forEach((stat) => action.addStat(stat.scaling, stat.coef as number));
      return;
    } else {
      data.values.forEach((stat) => action.removeStat(stat.scaling, stat.coef as number));
      return;
    }
  }

  onMount(() => {
    data.values.forEach((stat) => action.addStat(stat.scaling, stat.coef as number));

    // this return might be problematic if the state is reset when character changes
    // because then this might run after and substract values that were not added
    return () =>
      data.values.forEach((stat) => action.removeStat(stat.scaling, stat.coef as number));
  });
</script>

<button data-testid="passive-action-button">
  <ActionButton {element} {isActive} />
</button>
