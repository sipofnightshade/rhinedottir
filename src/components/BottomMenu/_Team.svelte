<script lang="ts">
  import Modal from '../Modal/Modal.svelte';
  import { DefaultWeapons } from '$lib/data/DefaultWeapons';
  import type { WeaponNames } from '$lib/types/weapons';
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

  // store imports
  import { character } from '$lib/stores/characterStore';
  import { weapon } from '$lib/stores/weaponStore';
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';

  // initialise modal state and content

  const menuModals = [
    {
      id: 'Party 1',
      img: '/images/ui/UI_BtnIcon_Team.png',
      component: Party1
    },
    {
      id: 'Party 2',
      img: '/images/ui/UI_BtnIcon_Team.png',
      component: Party2
    },
    {
      id: 'Party 3',
      img: '/images/ui/UI_BtnIcon_Team.png',
      component: Party3
    },
    {
      id: 'Flower',
      img: '/images/ui/UI_BtnIcon_RelicType1.png',
      component: Flower
    },
    {
      id: 'Feather',
      img: '/images/ui/UI_BtnIcon_RelicType2.png',
      component: Feather
    },
    {
      id: 'Sands',
      img: '/images/ui/UI_BtnIcon_RelicType3.png',
      component: Sands
    },
    {
      id: 'Goblet',
      img: '/images/ui/UI_BtnIcon_RelicType4.png',
      component: Goblet
    },
    {
      id: 'Circlet',
      img: '/images/ui/UI_BtnIcon_RelicType5.png',
      component: Circlet
    }
  ];

  let showModal = false;
  let modalContent: any = undefined;
  let modalTitle: string | undefined = undefined;

  // pass in component as parameter and toggle modal state
  function toggleModal(component: any, title: string) {
    modalContent = component;
    modalTitle = title;
    showModal = !showModal;
  }

  function closeModal() {
    modalContent = undefined;
    modalTitle = undefined;
    showModal = false;
  }
</script>

<div class="grid auto-rows-min grid-cols-5 gap-2">
  <button
    class=" flex aspect-square items-center justify-center rounded-md border-2  border-slate-800 bg-slate-800 hover:border-2 hover:border-slate-300"
    on:click={() => toggleModal(Character, 'Character')}
  >
    <Thumbnail
      img="/images/character/{$character.selected.name}.webp"
      vision={$character.selected.vision}
      alt={$character.selected.fullName}
    />
  </button>
  <button
    class=" flex aspect-square items-center justify-center rounded-md border-2  border-slate-800 bg-slate-800 hover:border-2 hover:border-slate-300"
    on:click={() => toggleModal(Weapon, 'Weapon')}
  >
    <Thumbnail
      img="/images/weapon/{$weapon.selected.name}.webp"
      alt={$weapon.selected.fullName}
    />
  </button>
  {#each menuModals as modal (modal.id)}
    <button
      class=" flex aspect-square items-center justify-center rounded-md border-2  border-slate-800 bg-slate-800 hover:border-2 hover:border-slate-300"
      on:click={() => toggleModal(modal.component, modal.id)}
    >
      <img src={modal.img} alt="{modal.id} image" />
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
