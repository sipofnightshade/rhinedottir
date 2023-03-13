<script lang="ts">
  import { Talents } from '$lib/data/Talents';
  import { character } from '$lib/stores/characterStore';

  // import components
  import ToggleButton from './_ToggleButton.svelte';
  import PassiveButton from './_PassiveButton.svelte';
  import StackButton from './_StackButton.svelte';
  import SelectButton from './_SelectButton.svelte';
  import MultiSelectButton from './_MultiSelectButton.svelte';

  // import { onMount } from 'svelte';
  const charName = 'traveleranemo';
</script>

<section
  class="my-4 grid w-full grid-flow-col gap-1 self-end overflow-x-auto rounded-xl bg-slate-700 p-2 pt-1"
>
  {#each Talents[charName].actions as data}
    {#if data.actionType === 'toggle'}
      <ToggleButton {data} element={$character.selected.vision} />
    {:else if data.actionType === 'stack'}
      <StackButton {data} element={$character.selected.vision} />
    {:else if data.actionType === 'passive'}
      <PassiveButton {data} element={$character.selected.vision} />
    {:else if data.actionType === 'select'}
      <SelectButton {data} element={$character.selected.vision} />
    {:else if data.actionType === 'multiSelect'}
      <MultiSelectButton {data} element={$character.selected.vision} />
    {/if}
  {/each}
</section>
