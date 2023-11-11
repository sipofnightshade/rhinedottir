<script lang="ts">
  export let vision: string | undefined = undefined;
  export let img: string;
  export let alt: string;
  //   export let rating: 5 | 4 | 3 | 1;
  export let hasBG: boolean = true;
  export let classes: string = '';
  export let imgClasses: string = '';

  const ratingColors = {
    5: 'bg-gradient-to-b from-yellow-600 via-yellow-700 to-yellow-700',
    4: 'bg-gradient-to-b from-violet-500 via-violet-600 to-violet-700',
    3: 'bg-gradient-to-b from-sky-500 via-sky-600 to-sky-700'
  };
</script>

<div
  class="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl {classes}"
  class:bg-slate-700={hasBG}
>
  <img src={img} alt="{alt} thumbnail" class={imgClasses} />
  {#if vision}
    <div
      class="absolute left-1 top-1 w-1/4 rounded outline-1 outline-offset-1 outline-slate-200"
    >
      <img src="/images/elements/{vision}.svg" alt="{vision} icon" />
    </div>
  {/if}
</div>
