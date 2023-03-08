<script lang="ts">
  import type { Action } from '$lib/types/talents';
  import type { Visions } from '$lib/types/global';
  import ActionButton from './ActionButton.svelte';
  import ActionModal from '../ActionModal/ActionModal.svelte';

  import { action } from '$lib/stores/actionStore';

  export let element: Visions;
  export let data: Action;

  let scoops = 1;

  function handleSelect() {}

  let showModal = false;

  function toggleModal() {
    showModal = !showModal;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<button on:click={toggleModal} class="relative shadow-red-300">
  <ActionButton {element} isActive={scoops > 0} />
  {#if scoops > 0}
    <div class="absolute bottom-0 right-0">
      <input type="radio" bind:group={scoops} name="scoops" value={1} />

      <input type="radio" bind:group={scoops} name="scoops" value={2} />

      <input type="radio" bind:group={scoops} name="scoops" value={3} />
    </div>
  {/if}
</button>
{#if showModal}
  <ActionModal
    on:click={closeModal}
    on:escapeClick={closeModal}
    modalTitle={data.name}
    actionType="Elemental Burst"
    buttonType="Select"
    details={data.description}
  >
    <input type="text" />
  </ActionModal>
{/if}
