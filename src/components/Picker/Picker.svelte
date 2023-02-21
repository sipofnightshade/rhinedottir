<script lang="ts">
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';
  // props
  export let data: any;
  export let type: string;
  export let h: number;
</script>

<div
  style="height: {h}px;"
  class="mt-2 grid auto-rows-min grid-cols-4 gap-2 overflow-y-auto rounded-2xl border border-slate-600 p-2"
>
  {#each data as item}
    <button on:click={() => console.log(item.name)}>
      <Thumbnail
        alt={item.fullName}
        img="/images/{type}/{item.name}.webp"
        vision={item.vision}
      />
      <p class="mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium">
        {item.fullName}
      </p>
    </button>
  {/each}
</div>
