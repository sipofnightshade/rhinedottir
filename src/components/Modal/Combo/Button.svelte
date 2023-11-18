<script lang="ts">
  import { Bloom, Burgeon, Burning, Hyperbloom, Shattered } from '$lib/icons';
  type ButtonReactions = 'bloom' | 'hyperbloom' | 'burgeon' | 'burning' | 'shattered';

  export let value: string | undefined;
  export let el: string = 'physical';
  export let constellation: number;
  export let talentConstellation: number | undefined;
  export let rxn: ButtonReactions;

  const reactions = {
    bloom: { component: Bloom, text: 'text-dendro' },
    hyperbloom: { component: Hyperbloom, text: 'text-dendro' },
    burgeon: { component: Burgeon, text: 'text-dendro' },
    burning: { component: Burning, text: 'text-pyro' },
    shattered: { component: Shattered, text: '' }
  };

  $: show = constellation >= (talentConstellation ?? 0);
</script>

{#if value && !reactions[rxn]}
  <button
    class="flex w-full select-none items-center justify-center rounded bg-slate-400 py-3 text-sm text-slate-900 transition hover:opacity-80 active:bg-slate-500"
    on:click
    class:bg-slate-400={el === 'physical'}
    class:bg-anemo={el === 'anemo'}
    class:bg-cryo={el === 'cryo'}
    class:bg-dendro={el === 'dendro'}
    class:bg-electro={el === 'electro'}
    class:bg-hydro={el === 'hydro'}
    class:bg-geo={el === 'geo'}
    class:bg-pyro={el === 'pyro'}
    class:hidden={!show}
  >
    {value}
  </button>
{:else if value && reactions[rxn]}
  <button
    on:click
    class="flex w-full select-none items-center justify-center rounded border border-slate-600 bg-slate-700 py-2 text-sm transition hover:opacity-80"
  >
    <svelte:component this={reactions[rxn].component} class="h-6" />
  </button>
{/if}
