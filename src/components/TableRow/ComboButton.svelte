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
