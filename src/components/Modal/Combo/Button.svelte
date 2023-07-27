<script lang="ts">
  import type { DamageType } from '$lib/types/global';

  export let value: string | undefined;
  export let el: DamageType = 'physical';

  // let toggled = false;
  // function toggle() {
  //   toggled = !toggled;
  // }
</script>

<!-- @component
- Add `+1` animation whenever button is clicked
- Show a count of each button that is in play
 -->

{#if value}
  <button
    class="flex w-full items-center justify-center rounded bg-slate-400 py-3 text-slate-900 transition hover:bg-slate-50"
    on:click
    class:bg-slate-400={el === 'physical'}
    class:bg-anemo={el === 'anemo'}
    class:bg-cryo={el === 'cryo'}
    class:bg-dendro={el === 'dendro'}
    class:bg-electro={el === 'electro'}
    class:bg-hydro={el === 'hydro'}
    class:bg-geo={el === 'geo'}
    class:bg-pyro={el === 'pyro'}
  >
    {value}
  </button>
{/if}
