<script lang="ts">
  export let dialog: HTMLDialogElement;
  export let title: string = 'Title';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:click|self={() => dialog.close()}
  class="h-full items-start rounded-xl border-b border-slate-500 bg-slate-700 p-1 text-slate-200 backdrop:bg-black/75 xs-300:p-2 xs:h-[90vh] xs:w-[452px] xs:rounded-2xl xs:p-4"
>
  <div class="flex h-full flex-col rounded-xl bg-slate-700">
    <div class="flex w-full justify-between border-b border-slate-500 p-2 xs:p-4">
      <h3>{title}</h3>
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
    <div class="h-full overflow-hidden p-1 xs-300:p-2 xs:p-4">
      <slot />
    </div>
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
