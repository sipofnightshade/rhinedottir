<script lang="ts">
  import type { Action, Target } from '$lib/types/actions';
  import type { Visions } from '$lib/types/global';
  import type { ActionId } from '$lib/stores/actionStore';

  import ActionButton from './ActionButton.svelte';
  import { action } from '$lib/stores/actionStore';

  export let element: Visions;
  export let data: Action;
  export let id: ActionId;

  const target = data.target ?? 'self';

  let isActive = false;

  function handleToggle() {
    isActive = !isActive;
    if (isActive) {
      data.values.forEach((stat) => {
        action.addStat(id, target as Target, stat.scaling, stat.coef as number);
      });
      return;
    } else {
      data.values.forEach((stat) =>
        action.removeStat(id, target as Target, stat.scaling, stat.coef as number)
      );
      return;
    }
  }
</script>

<button on:click={handleToggle}>
  <ActionButton {element} {isActive} />
</button>
