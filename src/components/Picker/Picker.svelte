<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';
  import type { SelectedCharacter, SelectedWeapon } from '$lib/types/global';
  // props
  export let data: any;
  export let type: string;
  export let h: number;

  const dispatch = createEventDispatcher();

  function handleClick(item: SelectedCharacter | SelectedWeapon) {
    dispatch('selected', {
      selected: item
    });
  }
</script>

<div
  style="height: {h}px;"
  class="mt-2 grid auto-rows-min grid-cols-4 gap-2 overflow-y-auto rounded-2xl border border-slate-600 p-2"
>
  {#each data as item}
    <button on:click={() => handleClick(item)}>
      <Thumbnail
        alt={item.fullName}
        img="/images/{type}/{item.name}.webp"
        vision={item.vision}
      />
      <!-- <p class="mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium">
        {item.fullName}
      </p> -->
    </button>
  {/each}
</div>
