<script lang="ts">
  import Formatted from '../Text/Formatted.svelte';

  export let dialog: HTMLDialogElement;

  export let modalTitle: string;
  export let actionType: string;
  export let buttonType: string;
  export let details: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:click|self={() => dialog.close()}
  class="items-start rounded-xl border-b border-slate-500 bg-slate-700 p-1 text-slate-200 backdrop:bg-black/75 xs-300:p-2 xs:w-96 xs:rounded-2xl xs:p-4"
>
  <div class="flex w-full items-start justify-between px-4 py-3">
    <div class="text-slate-100">
      <h2 class="text-base font-bold">{modalTitle}</h2>
      <h3 class="mt-1 text-sm text-anemo">{actionType} Lv. 10</h3>
    </div>
    <button on:click={() => dialog.close()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 fill-slate-200"
        viewBox="0 0 384 512"
      >
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>
    </button>
  </div>
  <div class="h-full overflow-hidden px-4 pb-4">
    <Formatted content={details} />
  </div>
  <div
    class="grid h-12 w-full grid-flow-col items-center gap-x-4 border-t border-slate-500"
  >
    <h4 class="px-4 py-2">{buttonType}:</h4>
    <slot />
  </div>
</dialog>

<style lang="postcss">
  dialog {
    padding: 0;
  }
  dialog:modal {
    max-width: 95vw;
    max-height: 95vh;
  }
</style>
