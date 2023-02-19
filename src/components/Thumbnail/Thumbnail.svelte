<script lang="ts">
  export let vision: string | undefined;
  export let img: string;
  export let alt: string;
  //   export let rating: 5 | 4 | 3 | 1;
</script>

<div class="relative aspect-square overflow-hidden rounded-xl bg-slate-800">
  <img src={img} alt="{alt} thumbnail" />
  {#if vision}
    <div
      class="absolute top-1 left-1 w-1/4 rounded  outline-1 outline-offset-1 outline-slate-200"
    >
      <img src="/images/elements/{vision}.svg" alt="{vision} icon" />
    </div>
  {/if}
</div>
