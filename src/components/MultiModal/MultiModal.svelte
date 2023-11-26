<script lang="ts">
  import Close from '$lib/icons/Close.svelte';

  export let dialog: HTMLDialogElement;
  export let small = false;
  export let hasFooter = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:click|self={() => dialog.close()}
  class="h-full w-11/12 overflow-hidden rounded-xl border border-slate-600 bg-slate-800 text-slate-200 shadow-md shadow-slate-950 backdrop:bg-slate-950/70 xs-300:p-2 xs:h-[90vh] xs:p-4"
  class:max-w-md={!small}
  class:max-w-sm={small}
  class:!h-fit={small}
>
  <!-- Dialog Container starts here -->
  <div class="flex h-full flex-col">
    <header
      class="flex w-full items-center justify-between border-b border-slate-600 p-1 xs-300:p-3 xs-300:pr-2 xs:p-4 xs:pr-3"
    >
      <slot name="title" />
      <button
        on:click={() => dialog.close()}
        class="self-start rounded-full p-2 hover:bg-slate-700"
      >
        <Close class="w-2.5 fill-slate-100" />
      </button>
    </header>
    <div class="h-full overflow-hidden p-1 xs-300:p-3 xs:p-4">
      <slot />
    </div>
    {#if hasFooter}
      <footer
        class="flex w-full justify-between border-t border-slate-600 p-1 xs-300:p-3 xs:p-4"
      >
        <slot name="footer" />
      </footer>
    {/if}
  </div>
</dialog>

<style lang="postcss">
  dialog {
    padding: 0;
  }
</style>
