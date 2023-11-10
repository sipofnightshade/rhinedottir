<script lang="ts">
  // components
  import Minus from '$lib/icons/Minus.svelte';
  import Plus from '$lib/icons/Plus.svelte';
  import Label from '../Text/Label.svelte';
  // types
  import type { ArtifactType } from '$lib/types/artifacts';
  import type { Adjustable } from '$lib/stores/characterStore';
  // misc
  import { createEventDispatcher } from 'svelte';
  import { labels } from '$lib/data/Levels';

  // props
  export let label: string;
  export let value: number;
  export let id: Adjustable | 'refinement' | ArtifactType;
  export let plusThree = false;
  export let rating = false;

  const dispatch = createEventDispatcher();
  const isTalent = id === 'atk' || id === 'skill' || id === 'burst';
  const isArtifact =
    id === 'flower' ||
    id === 'feather' ||
    id === 'sands' ||
    id === 'goblet' ||
    id === 'circlet';

  function decreaseValue() {
    dispatch('decrement', {
      groupID: id
    });
  }

  function increaseValue() {
    dispatch('increment', {
      groupID: id
    });
  }

  function disableIncrement(p3: boolean, rating: boolean, value: number) {
    // talents
    if (isTalent && p3 && value >= 13) return true;
    if (isTalent && !p3 && value >= 10) return true;

    // artifacts
    if (isArtifact && rating && value >= 20) return true;
    if (isArtifact && !rating && value >= 16) return true;

    // level
    if (id === 'lvl' && value >= 13) return true;
    if (id === 'constellation' && value >= 6) return true;
    if (id === 'refinement' && value >= 4) return true;
  }

  $: isDisabled = disableIncrement(plusThree, rating, value);
  $: displayValue =
    id === 'lvl' || id === 'refinement' || id === 'constellation'
      ? labels[id][value]
      : value;
</script>

<div>
  <div class="mb-1 flex justify-between px-1">
    <Label>
      {label}
    </Label>
    <Label class={plusThree && ' text-emerald-400'}>
      {#if isArtifact}
        +
      {/if}
      {displayValue}
    </Label>
  </div>
  <div
    class="grid h-9 w-full grid-cols-2 gap-0.5 rounded-lg md:h-10 [&>button]:bg-slate-700"
  >
    <button
      on:click={decreaseValue}
      class="flex w-full items-center justify-center rounded-l-lg rounded-r-sm"
      disabled={value <= 0}
      class:opacity-30={value <= 0}
    >
      <Minus class="pointer-events-none h-3 w-3 fill-slate-200" />
    </button>
    <button
      on:click={increaseValue}
      class="flex w-full items-center justify-center rounded-l-sm rounded-r-lg"
      disabled={isDisabled}
      class:opacity-30={isDisabled}
    >
      <Plus class="pointer-events-none h-3 w-3 fill-slate-200" />
    </button>
  </div>
</div>
