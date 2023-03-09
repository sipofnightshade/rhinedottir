<script lang="ts">
  import type { Action } from '$lib/types/talents';
  import type { Visions } from '$lib/types/global';
  import ActionButton from './ActionButton.svelte';
  import { action } from '$lib/stores/actionStore';

  export let element: Visions;
  export let data: Action;

  let isActive = false;

  function handleToggle() {
    isActive = !isActive;
    if (isActive) {
      data.values.forEach((stat) => action.addStat(stat.scaling, stat.coef));
      return;
    } else {
      data.values.forEach((stat) => action.removeStat(stat.scaling, stat.coef));
      return;
    }
  }
</script>

<button on:click={handleToggle}>
  <ActionButton {element} {isActive} />
</button>
