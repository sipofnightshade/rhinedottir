<script lang="ts">
  export let deletable = false;
</script>

<button
  class="mr-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 transition-transform"
  on:click
  class:rotate-45={deletable}
  title="Clear All"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 448 512"
    class:fill-slate-300={!deletable}
    class:fill-red-500={deletable}
  >
    <path
      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
    />
  </svg>
</button>
