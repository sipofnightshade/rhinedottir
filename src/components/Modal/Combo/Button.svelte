<script lang="ts">
  export let value: string;

  let toggled = false;
  function toggle() {
    toggled = !toggled;
  }

  /**
   * @todo Add all talents for $currentCharacter as these buttons
   */
</script>

<button
  class="flex w-full items-center justify-center rounded {toggled
    ? 'bg-slate-100'
    : 'bg-slate-400'} py-3 text-slate-900"
  on:click={toggle}
>
  {value}
</button>
