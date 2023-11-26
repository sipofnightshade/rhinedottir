<script lang="ts">
  import Transition from 'svelte-transition';
  import { createPopover } from 'svelte-headlessui';
  import Chevron from '$lib/icons/Chevron.svelte';
  import Paragraph from '../Text/Paragraph.svelte';

  export let disabled = false;

  const popover = createPopover({});
</script>

<div class="relative col-span-3">
  <button
    {disabled}
    class:opacity-30={disabled}
    use:popover.button
    class="flex h-10 w-full items-center justify-between gap-2 rounded-md border border-slate-600 bg-slate-700 px-3 py-2 transition-colors hover:border-slate-500"
  >
    <div class="w-full overflow-hidden text-ellipsis whitespace-nowrap text-left text-sm">
      <slot name="title" />
    </div>
    <Chevron class="w-3 fill-slate-100" flip={!$popover.expanded} />
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
      class="triangle absolute left-1/2 top-10 z-10 mt-1 min-h-[36px] w-full -translate-x-1/2 transform"
    >
      <div
        class="w-full rounded-md border border-slate-600 bg-slate-700 p-3 text-left shadow-md shadow-slate-900"
      >
        <Paragraph>
          <slot name="details" />
        </Paragraph>
      </div>
    </div>
  </Transition>
</div>
