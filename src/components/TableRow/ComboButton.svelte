<script lang="ts">
  // export let tag:string;
  // export let img:string;
  let reaction = true;
</script>

<button
  class="mr-2 flex h-16 w-10 flex-col items-center justify-center rounded-lg bg-slate-700 "
>
  <span>N1</span>
  <div class=" flex h-6 w-full justify-center">
    <img class="h-5 w-5 self-center" src="/images/elements/anemo.svg" alt="element" />
    {#if reaction === true}
      <img
        class="relative -ml-[14px] h-6 w-6 self-center"
        src="/images/elements/separator.svg"
        alt="element"
      />
      <img
        class="-ml-[14px] h-5 w-5 self-center"
        src="/images/elements/hydro.svg"
        alt="element"
      />
      <!-- <img
        class="relative top-1 z-10 -m-[13px]  h-6 w-6 self-center"
        src="/images/elements/separator.svg"
        alt="element"
      />
      <img
        class="relative top-1.5 h-5 w-5 self-center"
        src="/images/elements/hydro.svg"
        alt="element"
      /> -->
    {/if}
  </div>
</button>

<!-- NEW BUTTON -->
<button
  class="relative mr-2 flex h-16 w-10 items-center justify-center rounded-lg bg-slate-700 "
  ><div
    class="top absolute top-0 z-10 flex h-full w-full justify-center rounded-lg bg-slate-500"
  >
    <img class="m-1 h-5 w-5" src="/images/elements/pyro.svg" alt="element" />
  </div>
  <img
    class="absolute bottom-0 m-1 h-5 w-5"
    src="/images/elements/anemo.svg"
    alt="element"
  />
  <div class="z-[11]  font-bold text-white">N1</div>
</button>

<style lang="postcss">
  .top {
    clip-path: polygon(0 0, 100% 0%, 100% 35%, 0 65%);
  }
</style>
