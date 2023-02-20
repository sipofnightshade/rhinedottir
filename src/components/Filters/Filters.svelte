<script lang="ts">
  //   export let filters: string[];
  export let selected: string;
  const filters = ['anemo', 'cryo', 'dendro', 'electro', 'geo', 'hydro', 'pyro'];
</script>

<div class="grid w-full auto-cols-fr grid-flow-col gap-2">
  {#each filters as filter}
    <button
      class="relative flex aspect-square items-center justify-center rounded-lg"
      class:bg-slate-500={selected === filter}
    >
      <img src="/images/elements/{filter}.svg" alt={filter} class="w-8" />
    </button>
  {/each}
</div>
