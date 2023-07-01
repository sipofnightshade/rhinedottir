<script lang="ts">
  export let value: string | undefined;

  let toggled = false;
  function toggle() {
    toggled = !toggled;
  }
</script>

<!-- @component
- Add `+1` animation whenever button is clicked
- Show a count of each button that is in play
 -->

{#if value}
  <button
    class="flex w-full items-center justify-center rounded {toggled
      ? 'bg-slate-100'
      : 'bg-slate-400'} py-3 text-slate-900"
    on:click={toggle}
  >
    {value}
  </button>
{/if}
