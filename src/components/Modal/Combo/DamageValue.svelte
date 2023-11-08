<script lang="ts">
  import type { DamageType } from '$lib/types/global';
  import { Anemo, Cryo, Dendro, Electro, Hydro, Geo, Physical, Pyro } from '$lib/icons';

  export let value: number;
  export let type: DamageType | 'none';

  const elements = {
    anemo: { component: Anemo, text: 'text-anemo' },
    cryo: { component: Cryo, text: 'text-cryo' },
    dendro: { component: Dendro, text: 'text-dendro' },
    electro: { component: Electro, text: 'text-electro' },
    hydro: { component: Hydro, text: 'text-hydro' },
    geo: { component: Geo, text: 'text-geo' },
    physical: { component: Physical, text: 'text-slate-300' },
    pyro: { component: Pyro, text: 'text-pyro' }
  };

  $: damage = Math.round(value).toLocaleString();
</script>

{#if value > 0}
  <div class="flex items-center gap-0.5 text-base">
    {#if type !== 'none'}
      <svelte:component this={elements[type].component} class="h-5" />
      <span class={elements[type].text}>{damage}</span>
    {:else}
      <span class="text-slate-200">{damage}</span>
    {/if}
  </div>
{/if}
