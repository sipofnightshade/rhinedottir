<script lang="ts">
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';
  import Modal from '../Modal/Modal.svelte';
  import Character from '../Modal/Character/Character.svelte';
  import Weapon from '../Modal/Weapon/Weapon.svelte';
  import One from '../Modal/Party/One.svelte';
  import Two from '../Modal/Party/Two.svelte';
  import Three from '../Modal/Party/Three.svelte';

  import { character } from '$lib/stores/characterStore';
  import { weapon } from '$lib/stores/weaponStore';
  import { statValueFormatter } from '$lib/helpers/statFormatter';
  import { party } from '$lib/stores/partyStore';
  import StatImage from './StatImage.svelte';
  import MultiModal from '../MultiModal/MultiModal.svelte';

  type PartyModal = {
    id: 'one' | 'two' | 'three';
    img: string;
    component: any;
  };

  const menuModals: PartyModal[] = [
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

  let dialog: HTMLDialogElement;

  let modalContent: any = undefined;
  let modalTitle: string | undefined = undefined;

  // pass in component as parameter and toggle modal state
  function toggleModal(component: any, title: string) {
    modalContent = component;
    modalTitle = title;
    dialog.showModal();
  }

  $: stats = statValueFormatter($weapon.selected.specialized, $weapon.stats?.specialized);
</script>

<section class="relative grid h-full max-h-40 w-full grid-flow-col gap-2 xl:gap-3">
  <!-- CHARACTER Button -->
  <button
    class="relative h-[120px] w-[120px] rounded-xl border border-slate-600 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
    on:click={() => toggleModal(Character, 'Character')}
  >
    <Thumbnail
      img="/images/character/{$character.selected.name}.webp"
      vision={$character.selected.vision}
      alt={$character.selected.fullName}
    />
  </button>
  <div class="flex flex-col justify-between">
    <!-- Weapon Button -->
    <button
      class="col-span-3 flex w-full items-end rounded-xl border border-slate-600 bg-slate-700 p-1 text-sm lg:h-16 lg:text-base xl:h-fit"
      on:click={() => toggleModal(Weapon, 'Weapon')}
    >
      <div class="h-11 w-11 lg:h-[60px] lg:w-[60px] xl:h-16 xl:w-16">
        <Thumbnail
          img="/images/weapon/{$weapon.selected.name}.webp"
          alt={$weapon.selected.fullName}
        />
      </div>
      <div class="flex flex-1 flex-col space-y-0.5 px-1 lg:space-y-1">
        <div class="flex w-full justify-between px-0.5 xl:text-lg">
          <span>Base ATK</span>
          <strong>{$weapon.stats?.attack.toFixed(0)}</strong>
        </div>
        <div
          class="flex w-full items-center justify-between rounded-full bg-slate-800 px-2 py-1"
        >
          <StatImage stat={$weapon.selected.specialized} />

          <span class="text-xs lg:text-sm xl:text-base">{stats}</span>
        </div>
      </div>
    </button>
    <!-- PARTY Buttons -->
    <div class="grid grid-flow-col gap-2 lg:gap-3">
      {#each menuModals as modal (modal.id)}
        <button
          class="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-600 bg-slate-700 lg:h-[68px] lg:w-[68px] xl:h-[72px] xl:w-[72px]"
          on:click={() => toggleModal(modal.component, 'Select a Teammate')}
          class:border-none={$party[modal.id]}
        >
          {#if $party[modal.id]}
            <Thumbnail
              img="/images/character/{$party[modal.id]?.character.selected.name}.webp"
              vision={$party[modal.id]?.character.selected.vision}
              alt="character"
            />
          {:else}
            <img src={modal.img} alt="{modal.id} image" class="w-2/3" />
          {/if}
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- <Modal bind:dialog title={modalTitle}>
  <svelte:component this={modalContent} />
</Modal> -->

<MultiModal bind:dialog>
  <h3 slot="title">{modalTitle}</h3>
  <svelte:component this={modalContent} />
</MultiModal>
