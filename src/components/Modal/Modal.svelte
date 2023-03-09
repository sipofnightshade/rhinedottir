<script lang="ts">
  // import { createEventDispatcher, onMount } from 'svelte';

  export let modalContent: any;
  export let modalTitle: string | undefined;
  export let classes: string;

  // const dispatch = createEventDispatcher();

  // function handleEscape(event: KeyboardEvent) {
  //   if (event.key === 'Escape') {
  //     event.stopPropagation();
  //     dispatch('escapeClick');
  //   }
  // }

  // onMount(() => {
  //   window.addEventListener('keydown', handleEscape);
  //   return () => {
  //     window.removeEventListener('keydown', handleEscape);
  //   };
  // });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click|self|stopPropagation
  class="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-slate-900/40"
>
  <div class={classes}>
    <div
      class="relative flex w-full items-start justify-center border-b border-slate-500 p-2 xs:p-4"
    >
      <h3>{modalTitle}</h3>
      <button
        on:click|self|stopPropagation
        class="absolute right-2 rounded-md bg-anemo px-3 text-slate-200 xs:right-4"
        >X</button
      >
    </div>
    <div class="h-full overflow-hidden p-2 xs:p-4">
      <svelte:component this={modalContent} />
    </div>
  </div>
</div>
