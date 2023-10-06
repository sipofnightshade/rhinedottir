<script lang="ts">
  // components
  import Minus from '$lib/icons/Minus.svelte';
  import Plus from '$lib/icons/Plus.svelte';
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

  function disableIncrement(p3: boolean, value: number) {
    // talents
    if (isTalent && p3 && value >= 13) return true;
    if (isTalent && !p3 && value >= 10) return true;

    // artifacts
    if (isArtifact && rating && value >= 20) return true;
    if (isArtifact && !rating && value >= 16) return true;
  }

  $: isDisabled = disableIncrement(plusThree, value);
  $: displayValue = id === 'lvl' ? labels.lvl[value] : value;
</script>

<div>
  <div class="mb-1 flex justify-between px-1 text-sm">
    <span class="text-slate-400">{label}</span>
    <strong class:text-emerald-400={plusThree}>{isArtifact && '+'}{displayValue}</strong>
  </div>
  <div class="flex h-10 overflow-hidden rounded-lg bg-slate-800">
    <button
      on:click={decreaseValue}
      class="flex w-full items-center justify-center"
      disabled={value <= 0}
      class:bg-slate-600={value <= 0}
    >
      <Minus class="h-3 w-3 fill-slate-300" />
    </button>
    <div class="h-full w-[1px] bg-slate-500" />
    <button
      on:click={increaseValue}
      class="flex w-full items-center justify-center"
      disabled={isDisabled}
      class:bg-slate-600={isDisabled}
    >
      <Plus class="h-3 w-3 fill-slate-300" />
    </button>
  </div>
</div>
