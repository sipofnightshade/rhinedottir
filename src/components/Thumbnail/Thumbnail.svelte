<script lang="ts">
  export let vision: string | undefined = undefined;
  export let img: string;
  export let alt: string;
  //   export let rating: 5 | 4 | 3 | 1;
  export let hasBG: boolean = true;
  export let classes: string = '';
  export let imgClasses: string = '';
  export let rating: 5 | 4 | 3 | undefined = undefined;

  const ratingColors = {
    5: 'bg-gradient-to-b from-yellow-700 via-yellow-600 to-yellow-700',
    4: 'bg-gradient-to-b from-violet-500 via-violet-600 to-violet-700',
    3: 'bg-gradient-to-b from-sky-700 via-sky-600 to-sky-700'
  };

  $: bgColor = rating ? ratingColors[rating] : '';
</script>

<div
  class="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl {bgColor} {classes}"
  class:bg-slate-700={rating === undefined && hasBG}
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
