<script lang="ts">
  import Modal from '../Modal/Modal.svelte';
  import Builds from './_Builds.svelte';
  import Updates from './_Updates.svelte';
  import Team from './_Team.svelte';

  // initialise modal state and content
  let showModal = false;
  let modalContent: string | undefined = undefined;

  // pass in component as parameter and toggle modal state
  function toggleModal(component: any) {
    modalContent = component;
    showModal = !showModal;
  }
</script>

<div class="grid auto-rows-min grid-cols-5 gap-2">
  <button
    class="aspect-square rounded-md bg-slate-800"
    on:click={() => toggleModal(Builds)}
  >
    <img src="/images/character/wanderer.webp" alt="wanderer icon" />
  </button>
  <button
    class="aspect-square rounded-md bg-slate-800"
    on:click={() => toggleModal(Updates)}
  >
    <img src="/images/weapon/thewidsith.webp" alt="wanderer icon" />
  </button>
  <button
    class="aspect-square rounded-md bg-slate-800"
    on:click={() => toggleModal(Team)}
  >
    <img src="/images/character/faruzan.webp" alt="wanderer icon" />
  </button>
  <button class="aspect-square rounded-md bg-slate-800">
    <img src="/images/character/bennett.webp" alt="wanderer icon" />
  </button>
  <button class="aspect-square rounded-md bg-slate-800">
    <img src="/images/character/zhongli.webp" alt="wanderer icon" />
  </button>
  <button class="aspect-square rounded-md bg-slate-800">
    <img src="/images/ui/UI_BtnIcon_RelicType1.png" alt="wanderer icon" />
  </button>
  <button class="aspect-square rounded-md bg-slate-800">
    <img src="/images/ui/UI_BtnIcon_RelicType2.png" alt="wanderer icon" />
  </button>
  <button class="aspect-square rounded-md bg-slate-800">
    <img src="/images/ui/UI_BtnIcon_RelicType3.png" alt="wanderer icon" />
  </button>
  <button class="aspect-square rounded-md bg-slate-800">
    <img src="/images/ui/UI_BtnIcon_RelicType4.png" alt="wanderer icon" />
  </button>
  <button class="aspect-square rounded-md bg-slate-800">
    <img src="/images/ui/UI_BtnIcon_RelicType5.png" alt="wanderer icon" />
  </button>
</div>
{#if showModal}
  <Modal
    on:click={toggleModal}
    {modalContent}
    classes="h-screen w-screen xs:w-[452px] xs:h-[90vh] mx-auto rounded-xl flex flex-col items-center bg-slate-700 relative"
  />
{/if}
