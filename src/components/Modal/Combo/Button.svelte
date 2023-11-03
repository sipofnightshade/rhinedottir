<script lang="ts">
  export let value: string | undefined;
  export let el: string = 'physical';
  export let constellation: number;
  export let talentConstellation: number | undefined;

  $: show = constellation >= (talentConstellation ?? 0);
  // $: console.log(value, show);
</script>

{#if value}
  <button
    class="flex w-full select-none items-center justify-center rounded bg-slate-400 py-3 text-sm text-slate-900 transition hover:bg-slate-50"
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
{/if}
