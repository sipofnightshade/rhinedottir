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
  import { getImageUrl } from '$lib/helpers/getImageURL';
  import TeamIcon from '$lib/icons/TeamIcon.svelte';

  // initialise modal state and content

  let dialog: HTMLDialogElement;

  type PartyModal = {
    id: 'one' | 'two' | 'three';
    component: any;
  };

  const partyModals: PartyModal[] = [
    {
      id: 'one',
      component: One
    },
    {
      id: 'two',
      component: Two
    },
    {
      id: 'three',
      component: Three
    }
  ];

  const artifactModals: ArtifactModalButtons = [
    {
      id: 'flower',
      img: '/images/artifact/none_4.webp',
      component: Flower,
      title: 'Flower of Life'
    },
    {
      id: 'feather',
      img: '/images/artifact/none_2.webp',
      component: Feather,
      title: 'Plume of Death'
    },
    {
      id: 'sands',
      img: '/images/artifact/none_5.webp',
      component: Sands,
      title: 'Sands of Eon'
    },
    {
      id: 'goblet',
      img: '/images/artifact/none_1.webp',
      component: Goblet,
      title: 'Goblet of Eonothem'
    },
    {
      id: 'circlet',
      img: '/images/artifact/none_3.webp',
      component: Circlet,
      title: 'Circlet of Logos'
    }
  ];

  let modalContent: any = undefined;
  let modalTitle: string | undefined = undefined;

  function getArtifactRating(arr: number[], name: string) {
    if (arr === undefined) return undefined;
    if (name === 'none') return 1;
    if (!Array.isArray(arr)) return arr;
    if (arr && arr.length === 2) return 5;
    return 4;
  }

  // pass in component as parameter and toggle modal state
  function toggleModal(component: any, title: string) {
    dialog.showModal();
    modalContent = component;
    modalTitle = title;
  }
</script>

<div class="grid auto-rows-min grid-cols-5 gap-2">
  <button
    class="flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-slate-600 bg-slate-700 hover:border hover:border-slate-300"
    on:click={() => toggleModal(Character, 'Character')}
  >
    <Thumbnail
      img="https://enka.network/ui/{$character.selected.url}.png"
      vision={$character.selected.vision}
      alt={$character.selected.fullName}
      classes="!rounded-none"
      hasBG
      rating={$character.selected.rating}
    />
  </button>
  <button
    class="flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-slate-600 bg-slate-700 hover:border hover:border-slate-300"
    on:click={() => toggleModal(Weapon, 'Weapon')}
  >
    <Thumbnail
      img="https://enka.network/ui/{$weapon.selected.url}.png"
      alt={$weapon.selected.fullName}
      classes="!rounded-none"
      hasBG
      rating={$weapon.selected.rating}
    />
  </button>

  <!-- Party buttons -->
  {#each partyModals as modal (modal.id)}
    <button
      class=" flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-slate-600 bg-slate-700 hover:border hover:border-slate-300"
      on:click={() => toggleModal(modal.component, 'Select a Teammate')}
    >
      {#if $party[modal.id]}
        <Thumbnail
          img="https://enka.network/ui/{$party[modal.id]?.character.selected.url}.png"
          vision={$party[modal.id]?.character.selected.vision}
          alt={$party[modal.id]?.character.selected.name || 'character'}
          hasBG
          classes="!rounded-none"
          rating={$party[modal.id]?.character.selected.rating}
        />
      {:else}
        <TeamIcon class="w-3/5" />
      {/if}
    </button>
  {/each}

  <!-- Artifact buttons -->
  {#each artifactModals as modal (modal.id)}
    <button
      class="flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-slate-600 bg-slate-700 hover:border hover:border-slate-300"
      on:click={() => toggleModal(modal.component, modal.title)}
    >
      {#if $artifact[modal.id].selected.name === 'none'}
        <img src={modal.img} alt="{modal.title} image" class="w-3/5" />
      {:else}
        <Thumbnail
          img={getImageUrl(
            modal.id,
            $artifact[modal.id].selected.url,
            $artifact[modal.id].selected.name
          )}
          classes="!rounded-none"
          alt={$artifact[modal.id].selected.fullName}
          rating={getArtifactRating(
            $artifact[modal.id].selected.rating,
            $artifact[modal.id].selected.name
          )}
        />
      {/if}
    </button>
  {/each}
</div>

<MultiModal bind:dialog>
  <h3 slot="title">{modalTitle}</h3>
  <svelte:component this={modalContent} />
</MultiModal>
