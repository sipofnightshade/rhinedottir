<script lang="ts">
  import Modal from '../Modal/Modal.svelte';
  import Flower from '../Modal/Artifact/Flower.svelte';
  import Feather from '../Modal/Artifact/Feather.svelte';
  import Sands from '../Modal/Artifact/Sands.svelte';
  import Goblet from '../Modal/Artifact/Goblet.svelte';
  import Circlet from '../Modal/Artifact/Circlet.svelte';
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';

  import { artifact } from '$lib/stores/artifactStore';
  import type { ArtifactModalButtons } from '$lib/types/artifacts';
  import StatImage from './StatImage.svelte';

  const menuModals: ArtifactModalButtons = [
    {
      id: 'flower',
      img: '/images/ui/UI_BtnIcon_RelicType1.png',
      component: Flower
    },
    {
      id: 'feather',
      img: '/images/ui/UI_BtnIcon_RelicType2.png',
      component: Feather
    },
    {
      id: 'sands',
      img: '/images/ui/UI_BtnIcon_RelicType3.png',
      component: Sands
    },
    {
      id: 'goblet',
      img: '/images/ui/UI_BtnIcon_RelicType4.png',
      component: Goblet
    },
    {
      id: 'circlet',
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

<section class="grid max-h-[120px] w-full grid-cols-5 gap-2 lg:max-h-[144px] xl:max-h-40">
  {#each menuModals as modal (modal.id)}
    <button
      class="relative h-full w-full rounded-lg bg-slate-700 p-2"
      on:click={() => toggleModal(modal.component, modal.id)}
    >
      <div class="mx-auto flex items-center lg:w-2/3">
        {#if $artifact[modal.id].selected.name === 'none'}
          <Thumbnail img={modal.img} classes="opacity-30" alt="rust" hasBG={false} />
        {:else}
          <Thumbnail
            img="/images/artifact/{modal.id}/{$artifact[modal.id].selected.name}.webp"
            classes="opacity-40"
            alt="rust"
            hasBG={false}
          />
        {/if}
      </div>

      <ul
        class="absolute top-0 left-0 z-10 flex h-full w-full flex-col justify-between p-2"
      >
        <li
          class="flex h-full items-center justify-between rounded-md bg-slate-800 py-1 px-1 lg:px-2"
        >
          <StatImage stat={$artifact[modal.id].mainStat.stat} />

          <span class=" text-xs lg:text-sm xl:text-base"
            >{$artifact[modal.id].mainStat.value}</span
          >
        </li>
        {#each $artifact[modal.id].substats as substat}
          <li class="flex h-full items-center justify-between px-1">
            <StatImage stat={substat.stat} />
            <span class=" text-xs lg:text-sm xl:text-base">{substat.value}</span>
          </li>
        {/each}
      </ul>
    </button>
  {/each}
</section>
{#if showModal}
  <Modal
    on:click={closeModal}
    on:escapeClick={closeModal}
    {modalTitle}
    {modalContent}
    classes="h-screen w-screen xs:w-[452px] xs:h-[90vh] mx-auto rounded-xl flex flex-col items-center bg-slate-700 relative"
  />
{/if}
