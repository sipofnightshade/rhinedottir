<script lang="ts">
  export let value: string | undefined;

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
  >
    {value}
  </button>
{/if}
