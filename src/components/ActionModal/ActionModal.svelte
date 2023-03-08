<script lang="ts">
  export let modalTitle: string;
  export let actionType: string;
  export let buttonType: string;
  export let details: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click|self|stopPropagation
  class="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-slate-900/40"
>
  <div
    class="relative mx-auto flex h-fit w-[90vw] flex-col items-center overflow-hidden  rounded-xl bg-slate-700 xs:w-[380px]"
  >
    <div
      class="relative flex w-full items-start justify-between border-b border-slate-500 px-4 py-3"
    >
      <div class="text-slate-100">
        <h2 class="text-base font-bold">{modalTitle}</h2>
        <h3 class="mt-0.5 text-xs">{actionType} Lv. 10</h3>
      </div>
      <button on:click|stopPropagation class="w-3 ">
        <img class="mt-1 " src="/images/ui/close.svg" alt="close icon" />
      </button>
    </div>
    <div class="h-full overflow-hidden px-4 pt-3 pb-4">
      <p class="text-base">
        {details}
      </p>
    </div>
    <div
      class="flex h-16 w-full items-center justify-between border-t border-slate-500 p-4"
    >
      <h4>{buttonType}</h4>
      <slot />
    </div>
  </div>
</div>
