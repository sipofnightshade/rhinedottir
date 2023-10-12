<script lang="ts">
  // components
  import Modal from '../Modal/Modal.svelte';
  import Loadout from './Loadout.svelte';

  //stores
  import { loadouts } from '$lib/stores/loadoutsStore';

  let dialog: HTMLDialogElement;
  let profileH;
  let contentH;

  function toggleModal() {
    dialog.showModal();
  }

  // loads the current loadout data into the application
</script>

<button
  class="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-slate-600"
  on:click={toggleModal}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-4 w-4 fill-slate-300"
    viewBox="0 0 512 512"
  >
    <path
      d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
    />
  </svg>
</button>

<Modal bind:dialog title="Select a loadout">
  <div class="h-full overflow-hidden" bind:clientHeight={contentH}>
    <div bind:clientHeight={profileH} class="mb-3 rounded-md bg-slate-800 p-4">
      <div class="w-full">Filters</div>
    </div>
    <div class="h-full">
      <div
        style="height:{contentH - profileH}px"
        class="flex flex-col gap-y-4 overflow-y-auto"
      >
        {#each $loadouts as item (item.id)}
          <Loadout {item} />
        {/each}
      </div>
    </div>
  </div>
</Modal>
