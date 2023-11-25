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
  class="pointer-events-none relative flex h-14 w-14 flex-shrink-0 items-center justify-center xs:h-16 xs:w-16"
  class:grayscale-[30%]={!isActive}
  class:opacity-50={!isActive}
>
  <div
    class="absolute h-10 w-10 rounded-full xs:h-12 xs:w-12 {backgrounds[
      type
    ]} opacity-0 blur-md"
    class:opacity-50={isActive}
  />
  <div
    class="absolute h-[42px] w-[42px] rotate-45 rounded-sm xs:h-[46px] xs:w-[46px] {backgrounds[
      type
    ]}"
  />
  <div
    class="absolute h-12 w-12 rounded-full xs:h-[52px] xs:w-[52px] {gradients[
      type
    ]} outline outline-1 {outlines[type]}"
  />
  {#if type === 'artifact'}
    <img
      class="z-10 h-12 w-12 rounded-full border-2 border-slate-200 xs:h-[52px] xs:w-[52px]"
      src="https://enka.network/ui/{url}_4.png"
      alt={url}
    />
  {:else if type === 'weapon'}
    <img
      class="z-10 h-12 w-12 rounded-full border-2 border-slate-200 xs:h-[52px] xs:w-[52px]"
      src="https://enka.network/ui/{url}.png"
      alt={url}
    />
  {:else if type === 'resonance'}
    <img
      class="z-10 h-12 w-12 rounded-full border-2 border-slate-200 xs:h-[52px] xs:w-[52px]"
      src="images/resonance/{url}.webp"
      alt={url}
    />
  {:else}
    <img
      class="z-10 h-12 w-12 rounded-full border-2 border-slate-200 xs:h-[52px] xs:w-[52px]"
      src="https://enka.network/ui/{url}.png"
      alt={url}
    />
  {/if}
</div>
