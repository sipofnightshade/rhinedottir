<script lang="ts">
  import type { Action, Target } from '$lib/types/actions';
  import type { Visions } from '$lib/types/global';
  import ActionButton from './ActionButton.svelte';
  import { action, type ActionId } from '$lib/stores/actionStore';
  import { onMount } from 'svelte';

  export let type: Visions | 'weapon' | 'artifact';
  export let data: Action;
  export let id: ActionId;

  $: target = data.target ?? 'self';

  let isActive = true;

  function handleToggle() {
    isActive = !isActive;
    if (isActive) {
      data.values.forEach((stat) =>
        action.addStat(id, target as Target, stat.scaling, stat.coef as number)
      );
      return;
    } else {
      data.values.forEach((stat) =>
        action.removeStat(id, target as Target, stat.scaling, stat.coef as number)
      );
      return;
    }
  }

  onMount(() => {
    data.values.forEach((stat) =>
      action.addStat(id, target as Target, stat.scaling, stat.coef as number)
    );

    // this return might be problematic if the state is reset when character changes
    // because then this might run after and substract values that were not added
    return () =>
      data.values.forEach((stat) =>
        action.removeStat(id, target as Target, stat.scaling, stat.coef as number)
      );
  });
</script>

<button data-testid="passive-action-button">
  <ActionButton {type} {isActive} url={data.url} />
</button>
