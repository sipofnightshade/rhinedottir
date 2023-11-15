<script lang="ts">
  import type { ActionButtonColor } from '$lib/types/actions';

  // props
  export let type: ActionButtonColor;
  export let url: string;
  export let isActive = true;

  const backgrounds = {
    anemo: 'bg-anemo',
    cryo: 'bg-cryo',
    dendro: 'bg-dendro',
    electro: 'bg-electro',
    hydro: 'bg-hydro',
    geo: 'bg-geo',
    pyro: 'bg-pyro',
    weapon: 'bg-slate-300',
    artifact: 'bg-slate-300',
    resonance: 'bg-slate-300'
  };

  const gradients = {
    anemo: 'bg-gradient-to-b from-anemo to-anemoDark',
    cryo: 'bg-gradient-to-b from-cryo to-cryoDark',
    dendro: 'bg-gradient-to-b from-dendro to-dendroDark',
    electro: 'bg-gradient-to-b from-electro to-electroDark',
    hydro: 'bg-gradient-to-b from-hydro to-hydroDark',
    geo: 'bg-gradient-to-b from-geo to-geoDark',
    pyro: 'bg-gradient-to-b from-pyro to-pyroDark',
    weapon: 'bg-gradient-to-b from-slate-400 to-slate-500',
    artifact: 'bg-gradient-to-b from-slate-400 to-slate-500',
    resonance: 'bg-gradient-to-b from-slate-400 to-slate-500'
  };

  const outlines = {
    anemo: 'outline-anemo',
    cryo: 'outline-cryo',
    dendro: 'outline-dendro',
    electro: 'outline-electro',
    hydro: 'outline-hydro',
    geo: 'outline-geo',
    pyro: 'outline-pyro',
    weapon: 'outline-slate-300',
    artifact: 'outline-slate-300',
    resonance: 'outline-slate-300'
  };
</script>

<div
  data-testid="action-button"
  class="relative flex h-16 w-16 flex-shrink-0 items-center justify-center"
  class:grayscale-[30%]={!isActive}
  class:opacity-50={!isActive}
>
  <div
    class="absolute h-12 w-12 rounded-full {backgrounds[type]} opacity-0 blur-md"
    class:opacity-50={isActive}
  />
  <div class="absolute h-[46px] w-[46px] rotate-45 rounded-sm {backgrounds[type]}" />
  <div
    class="absolute h-[52px] w-[52px] rounded-full {gradients[
      type
    ]} outline outline-1 {outlines[type]}"
  />
  {#if type === 'artifact'}
    <img
      class="z-10 h-[52px] w-[52px] rounded-full border-2 border-slate-200"
      src="/images/artifact/flower/{url}.webp"
      alt={url}
    />
  {:else if type === 'weapon'}
    <img
      class="z-10 h-[52px] w-[52px] rounded-full border-2 border-slate-200"
      src="/images/weapon/{url}.webp"
      alt={url}
    />
  {:else}
    <img
      class="z-10 h-[52px] w-[52px] rounded-full border-2 border-slate-200"
      src="/images/talents/{url}.webp"
      alt={url}
    />
  {/if}
</div>
