<script lang="ts">
  import Transition from 'svelte-transition';
  import { createPopover } from 'svelte-headlessui';
  import Chevron from '$lib/icons/Chevron.svelte';
  import Paragraph from '../../Text/Paragraph.svelte';

  export let name: string;
  export let effectDetails: string;

  const popover = createPopover({});
</script>

<div class="relative col-span-3">
  <button
    use:popover.button
    class="flex h-9 w-full items-center justify-between gap-2 rounded-md bg-slate-800 px-3 py-2 text-slate-300"
  >
    <span class="w-full overflow-hidden text-ellipsis whitespace-nowrap text-left"
      >{name}</span
    >
    <Chevron
      class="h-3 fill-slate-300 transition-transform duration-300 {$popover.expanded
        ? ''
        : 'rotate-180'}"
    />
  </button>
  <Transition
    show={$popover.expanded}
    enter="transition ease-out duration-200"
    enterFrom="opacity-0 translate-y-1"
    enterTo="opacity-100 translate-y-0"
    leave="transition ease-in duration-150"
    leaveFrom="opacity-100 translate-y-0"
    leaveTo="opacity-0 translate-y-1"
  >
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      use:popover.panel
      class="triangle absolute left-1/2 top-9 z-10 mt-1 w-full -translate-x-1/2 transform"
    >
      <div
        class="w-full rounded-md border border-slate-500 bg-slate-800 p-2 px-3 py-2 text-left"
      >
        <Paragraph>{effectDetails}</Paragraph>
      </div>
    </div>
  </Transition>
</div>
