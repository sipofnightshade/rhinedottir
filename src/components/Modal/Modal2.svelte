<script lang="ts">
  export let dialog: HTMLDialogElement;
  export let title: string = 'Title';
</script>

<dialog
  bind:this={dialog}
  class="h-full items-start rounded-2xl border-b border-slate-500 bg-slate-700 p-2 text-slate-200 backdrop:bg-slate-900/75 xs:h-[90vh] xs:w-[452px] xs:p-4"
>
  <div class="flex h-full flex-col items-center rounded-xl bg-slate-700 ">
    <div
      class="flex w-full items-start justify-between border-b border-slate-500 p-2 xs:p-4"
    >
      <h3>{title}</h3>
      <button on:click={() => dialog.close()} class="px-3 xs:right-4">X</button>
    </div>
    <div class="h-full overflow-hidden p-2 xs:p-4">
      <slot />
    </div>
  </div>
</dialog>

<style lang="postcss">
  dialog:modal {
    max-width: 100vw;
    max-height: 100vh;
  }
</style>
