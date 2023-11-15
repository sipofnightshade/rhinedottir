<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';
  import type { SelectedCharacter, SelectedWeapon } from '$lib/types/global';
  // props
  export let data: any;
  export let type: string;

  const dispatch = createEventDispatcher();

  function handleClick(item: SelectedCharacter | SelectedWeapon) {
    dispatch('selected', {
      selected: item
    });
  }
</script>

<div class="scrollbar mt-2 grid grid-cols-4 items-start gap-2 overflow-y-auto md:pr-2">
  {#each data as item}
    <button on:click={() => handleClick(item)}>
      <Thumbnail
        alt={item.fullName}
        img="/images/{type}/{item.name}.webp"
        vision={item.vision}
        classes="bg-slate-700 border border-slate-600"
      />
      <p class="mt-1 text-xs">
        {item.fullName}
      </p>
    </button>
  {/each}
</div>
