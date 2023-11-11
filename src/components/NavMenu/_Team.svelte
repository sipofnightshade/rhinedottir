<script lang="ts">
  // modal pages
  import Character from '../Modal/Character/Character.svelte';
  import Weapon from '../Modal/Weapon/Weapon.svelte';
  import Flower from '../Modal/Artifact/Flower.svelte';
  import Feather from '../Modal/Artifact/Feather.svelte';
  import Sands from '../Modal/Artifact/Sands.svelte';
  import Goblet from '../Modal/Artifact/Goblet.svelte';
  import Circlet from '../Modal/Artifact/Circlet.svelte';

  // store imports
  import { character } from '$lib/stores/characterStore';
  import { weapon } from '$lib/stores/weaponStore';
  import { artifact } from '$lib/stores/artifactStore';
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';
  import type { ArtifactModalButtons } from '$lib/types/artifacts';
  import One from '../Modal/Party/One.svelte';
  import Two from '../Modal/Party/Two.svelte';
  import Three from '../Modal/Party/Three.svelte';
  import { party } from '$lib/stores/partyStore';
  import MultiModal from '../MultiModal/MultiModal.svelte';

  // initialise modal state and content

  let dialog: HTMLDialogElement;

  type PartyModal = {
    id: 'one' | 'two' | 'three';
    img: string;
    component: any;
  };

  const partyModals: PartyModal[] = [
    {
      id: 'one',
      img: '/images/ui/UI_BtnIcon_Team.png',
      component: One
    },
    {
      id: 'two',
      img: '/images/ui/UI_BtnIcon_Team.png',
      component: Two
    },
    {
      id: 'three',
      img: '/images/ui/UI_BtnIcon_Team.png',
      component: Three
    }
  ];

  const artifactModals: ArtifactModalButtons = [
    {
      id: 'flower',
      img: '/images/ui/UI_BtnIcon_RelicType1.png',
      component: Flower,
      title: 'Flower of Life'
    },
    {
      id: 'feather',
      img: '/images/ui/UI_BtnIcon_RelicType2.png',
      component: Feather,
      title: 'Plume of Death'
    },
    {
      id: 'sands',
      img: '/images/ui/UI_BtnIcon_RelicType3.png',
      component: Sands,
      title: 'Sands of Eon'
    },
    {
      id: 'goblet',
      img: '/images/ui/UI_BtnIcon_RelicType4.png',
      component: Goblet,
      title: 'Goblet of Eonothem'
    },
    {
      id: 'circlet',
      img: '/images/ui/UI_BtnIcon_RelicType5.png',
      component: Circlet,
      title: 'Circlet of Logos'
    }
  ];

  let modalContent: any = undefined;
  let modalTitle: string | undefined = undefined;

  // pass in component as parameter and toggle modal state
  function toggleModal(component: any, title: string) {
    dialog.showModal();
    modalContent = component;
    modalTitle = title;
  }
</script>

<div class="grid auto-rows-min grid-cols-5 gap-2">
  <button
    class=" flex aspect-square items-center justify-center rounded-md border-2 border-slate-800 bg-slate-800 hover:border-2 hover:border-slate-300"
    on:click={() => toggleModal(Character, 'Character')}
  >
    <Thumbnail
      img="/images/character/{$character.selected.name}.webp"
      vision={$character.selected.vision}
      alt={$character.selected.fullName}
    />
  </button>
  <button
    class="flex aspect-square items-center justify-center rounded-md border-2 border-slate-800 bg-slate-800 hover:border-2 hover:border-slate-300"
    on:click={() => toggleModal(Weapon, 'Weapon')}
  >
    <Thumbnail
      img="/images/weapon/{$weapon.selected.name}.webp"
      alt={$weapon.selected.fullName}
    />
  </button>

  <!-- Party buttons -->
  {#each partyModals as modal (modal.id)}
    <button
      class=" flex aspect-square items-center justify-center rounded-md border-2 border-slate-800 bg-slate-800 hover:border-2 hover:border-slate-300"
      on:click={() => toggleModal(modal.component, 'Select a Teammate')}
    >
      {#if $party[modal.id]}
        <Thumbnail
          img="/images/character/{$party[modal.id]?.character.selected.name}.webp"
          vision={$party[modal.id]?.character.selected.vision}
          alt={$party[modal.id]?.character.selected.name || 'character'}
        />
      {:else}
        <img src={modal.img} alt="{modal.id} image" class="w-3/5" />
      {/if}
    </button>
  {/each}

  <!-- Artifact buttons -->
  {#each artifactModals as modal (modal.id)}
    <button
      class="flex aspect-square items-center justify-center rounded-md border-2 border-slate-800 bg-slate-800 hover:border-2 hover:border-slate-300"
      on:click={() => toggleModal(modal.component, modal.title)}
    >
      {#if $artifact[modal.id].selected.name === 'none'}
        <img src={modal.img} alt="{modal.title} image" class="w-3/5" />
      {:else}
        <Thumbnail
          img="/images/artifact/{modal.id}/{$artifact[modal.id].selected.name}.webp"
          alt={$artifact[modal.id].selected.fullName}
        />
      {/if}
    </button>
  {/each}
</div>

<MultiModal bind:dialog>
  <h3 slot="title">{modalTitle}</h3>
  <svelte:component this={modalContent} />
</MultiModal>
