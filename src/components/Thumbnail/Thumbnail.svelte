<script lang="ts">
  import { settings } from '$lib/stores/settingsStore';
  import { Anemo, Cryo, Dendro, Electro, Hydro, Geo, Pyro } from '$lib/icons';
  import type { Visions } from '$lib/types/global';

  export let vision: Visions | undefined = undefined;
  export let img: string;
  export let alt: string;
  export let hasBG: boolean = true;
  export let classes: string = '';
  export let imgClasses: string = '';
  export let rating: 5 | 4 | 3 | 1 | undefined = undefined;

  const iconMap = {
    anemo: Anemo,
    cryo: Cryo,
    dendro: Dendro,
    electro: Electro,
    geo: Geo,
    hydro: Hydro,
    pyro: Pyro
  };

  const ratingColors = {
    5: 'bg-gradient-to-b from-yellow-700 via-yellow-700 to-yellow-600',
    4: 'bg-gradient-to-b from-purple-800 via-purple-700 to-purple-600',
    3: 'bg-gradient-to-b from-sky-700 via-sky-600 to-sky-600',
    1: ''
  };

  $: bgColor = rating && !$settings.limitedColors ? ratingColors[rating] : '';
</script>

<div
  class="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl {bgColor} {classes}"
  class:bg-slate-700={$settings.limitedColors && hasBG}
>
  <img
    loading="lazy"
    src={img}
    alt="{alt} thumbnail"
    class="pointer-events-none {imgClasses}"
  />
  {#if vision}
    <div class="absolute left-1 top-1 w-1/4">
      <svelte:component this={iconMap[vision]} class="w-full" />
    </div>
  {/if}
</div>
