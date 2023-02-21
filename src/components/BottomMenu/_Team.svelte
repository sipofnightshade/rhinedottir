<script lang="ts">
  import Modal from '../Modal/Modal.svelte';
  // modal pages
  import Character from '../Modal/Character/Character.svelte';
  import Weapon from '../Modal/Weapon/Weapon.svelte';
  import Party1 from '../Modal/Party/Party1.svelte';
  import Party2 from '../Modal/Party/Party2.svelte';
  import Party3 from '../Modal/Party/Party3.svelte';
  import Flower from '../Modal/Artifact/Flower.svelte';
  import Feather from '../Modal/Artifact/Feather.svelte';
  import Sands from '../Modal/Artifact/Sands.svelte';
  import Goblet from '../Modal/Artifact/Goblet.svelte';
  import Circlet from '../Modal/Artifact/Circlet.svelte';

  // initialise modal state and content

  const menuModals = [
    {
      id: 'Character',
      size: 'lg',
      img: '/images/character/wanderer.webp',
      component: Character
    },
    {
      id: 'Weapon',
      size: 'lg',
      img: '/images/weapon/thewidsith.webp',
      component: Weapon
    },
    {
      id: 'Party 1',
      size: 'sm',
      img: '/images/ui/UI_BtnIcon_Team.png',
      component: Party1
    },
    {
      id: 'Party 2',
      size: 'sm',
      img: '/images/ui/UI_BtnIcon_Team.png',
      component: Party2
    },
    {
      id: 'Party 3',
      size: 'sm',
      img: '/images/ui/UI_BtnIcon_Team.png',
      component: Party3
    },
    {
      id: 'Flower',
      size: 'sm',
      img: '/images/ui/UI_BtnIcon_RelicType1.png',
      component: Flower
    },
    {
      id: 'Feather',
      size: 'sm',
      img: '/images/ui/UI_BtnIcon_RelicType2.png',
      component: Feather
    },
    {
      id: 'Sands',
      size: 'sm',
      img: '/images/ui/UI_BtnIcon_RelicType3.png',
      component: Sands
    },
    {
      id: 'Goblet',
      size: 'sm',
      img: '/images/ui/UI_BtnIcon_RelicType4.png',
      component: Goblet
    },
    {
      id: 'Circlet',
      size: 'sm',
      img: '/images/ui/UI_BtnIcon_RelicType5.png',
      component: Circlet
    }
  ];

  let showModal = false;
  let modalContent: any = undefined;
  let modalTitle: string | undefined = undefined;

  // pass in component as parameter and toggle modal state
  function toggleModal(modal: any) {
    modalContent = modal.component;
    modalTitle = modal.id;
    showModal = !showModal;
  }

  function closeModal() {
    modalContent = undefined;
    modalTitle = undefined;
    showModal = false;
  }

  /**
   * @Important
   * use the temporary image icon to show the placeholder images
   * but render a Thumbnail component for selected buttons
   */
</script>

<div class="grid auto-rows-min grid-cols-5 gap-2">
  {#each menuModals as modal (modal.id)}
    <button
      class=" flex aspect-square items-center justify-center rounded-md border-2  border-slate-800 bg-slate-800 hover:border-2 hover:border-slate-300"
      on:click={() => toggleModal(modal)}
    >
      <img src={modal.img} alt="{modal.id} image" class:w-10={modal.size === 'sm'} />
      <!-- <Thumbnail/> -->
    </button>
  {/each}
</div>
{#if showModal}
  <Modal
    on:click={closeModal}
    on:escapeClick={closeModal}
    {modalTitle}
    {modalContent}
    classes="h-screen w-screen xs:w-[452px] xs:h-[90vh] mx-auto rounded-xl flex flex-col items-center bg-slate-700 relative"
  />
{/if}
