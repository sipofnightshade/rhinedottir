<script lang="ts">
  export let modalTitle: string;
  export let actionType: string;
  export let buttonType: string;
  export let details: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click|self|stopPropagation
  class="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-slate-900/40"
>
  <div
    class="relative mx-auto flex h-fit w-[90vw] flex-col items-center overflow-hidden  rounded-xl bg-slate-700 xs:w-[380px]"
  >
    <div class="relative flex w-full items-start justify-between px-4 py-3">
      <div class="text-slate-100">
        <h2 class="text-base font-bold">{modalTitle}</h2>
        <h3 class="mt-1 text-sm text-anemo">{actionType} Lv. 10</h3>
      </div>
      <button on:click|stopPropagation class="w-3 ">
        <img class="mt-1 " src="/images/ui/close.svg" alt="close icon" />
      </button>
    </div>
    <div class="h-full overflow-hidden px-4 pb-4">
      <p class="text-base">
        {details}
      </p>
    </div>
    <div
      class="grid h-12 w-full grid-flow-col items-center gap-x-4 border-t border-slate-500"
    >
      <h4 class="px-4 py-2">{buttonType}:</h4>
      <slot />
    </div>
  </div>
</div>
