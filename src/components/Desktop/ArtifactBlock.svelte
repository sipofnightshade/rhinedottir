<script lang="ts">
  import Modal from '../Modal/Modal.svelte';
  import Flower from '../Modal/Artifact/Flower.svelte';
  import Feather from '../Modal/Artifact/Feather.svelte';
  import Sands from '../Modal/Artifact/Sands.svelte';
  import Goblet from '../Modal/Artifact/Goblet.svelte';
  import Circlet from '../Modal/Artifact/Circlet.svelte';
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';
  import StatImage from './StatImage.svelte';
  import MultiModal from '../MultiModal/MultiModal.svelte';

  import { artifact } from '$lib/stores/artifactStore';
  import { artifactStatFormatter } from '$lib/helpers/artifactStatFormatter';
  import type { ArtifactModalButtons } from '$lib/types/artifacts';

  const menuModals: ArtifactModalButtons = [
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

  let dialog: HTMLDialogElement;
  let modalContent: any = undefined;
  let modalTitle: string | undefined = undefined;

  // pass in component as parameter and toggle modal state
  function toggleModal(component: any, title: string) {
    modalContent = component;
    modalTitle = title;
    dialog.showModal();
  }
</script>

<section
  class="grid max-h-[120px] w-full grid-cols-5 gap-2 text-slate-200 lg:max-h-[144px] xl:max-h-40"
>
  {#each menuModals as modal (modal.id)}
    <button
      class="relative h-full w-full rounded-lg bg-slate-700 p-2"
      on:click={() => toggleModal(modal.component, modal.title)}
    >
      <div class="mx-auto flex items-center lg:w-2/3">
        {#if $artifact[modal.id].selected.name === 'none'}
          <Thumbnail img={modal.img} classes="opacity-30" alt="rust" />
        {:else}
          <Thumbnail
            img="/images/artifact/{modal.id}/{$artifact[modal.id].selected.name}.webp"
            classes="opacity-30"
            alt="rust"
          />
        {/if}
      </div>
      <ul
        class="absolute left-0 top-0 z-10 flex h-full w-full flex-col justify-between p-1.5"
      >
        <li
          class="flex h-full items-center justify-between rounded-md bg-slate-800 px-1 py-1"
        >
          <StatImage stat={$artifact[modal.id].mainStat.stat} />

          <span class=" text-xs lg:text-sm xl:text-base">
            {artifactStatFormatter(
              $artifact[modal.id].mainStat.stat,
              $artifact[modal.id].mainStat.value
            )}
          </span>
        </li>
        {#each $artifact[modal.id].substats as substat}
          <li class="flex h-full items-center justify-between px-1">
            <StatImage stat={substat.stat} />
            <span class=" text-xs lg:text-sm xl:text-base">
              {artifactStatFormatter(substat.stat, substat.value)}
            </span>
          </li>
        {/each}
      </ul>
    </button>
  {/each}
</section>
<!-- <Modal bind:dialog title={modalTitle}>
  <svelte:component this={modalContent} />
</Modal> -->

<MultiModal bind:dialog>
  <h3 slot="title">{modalTitle}</h3>
  <svelte:component this={modalContent} />
</MultiModal>
