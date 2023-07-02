<script lang="ts">
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';
  import Modal from '../Modal/Modal.svelte';
  import Character from '../Modal/Character/Character.svelte';
  import Weapon from '../Modal/Weapon/Weapon.svelte';
  import Party1 from '../Modal/Party/Party1.svelte';
  import Party2 from '../Modal/Party/Party2.svelte';
  import Party3 from '../Modal/Party/Party3.svelte';

  import { character } from '$lib/stores/characterStore';
  import { weapon } from '$lib/stores/weaponStore';
  import { statValueFormatter } from '$lib/helpers/statFormatter';

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
    class="h relative h-[120px] w-[120px] bg-slate-400 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
    on:click={() => toggleModal(Character, 'Character')}
  >
    <Thumbnail
      img="/images/character/{$character.selected.name}.webp"
      vision={$character.selected.vision}
      alt={$character.selected.fullName}
    />
  </button>
  <div class="flex flex-col gap-2  xl:gap-4">
    <!-- Weapon Button -->
    <button
      class="col-span-3 flex h-fit w-full items-end rounded-2xl bg-slate-700 p-1 text-sm lg:text-base"
      on:click={() => toggleModal(Weapon, 'Weapon')}
    >
      <div class="h-12 w-12 lg:h-[60px] lg:w-[60px] xl:h-16 xl:w-16">
        <Thumbnail
          img="/images/weapon/{$weapon.selected.name}.webp"
          alt={$weapon.selected.fullName}
        />
      </div>
      <div class="flex flex-1 flex-col items-center space-y-1 px-1">
        <div class="flex w-full justify-between px-0.5 xl:text-lg">
          <span>Base ATK</span>
          <strong>{$weapon.stats?.attack.toFixed(0)}</strong>
        </div>
        <div
          class="flex w-full items-center justify-between rounded-full bg-slate-800 px-2 py-1"
        >
          <img
            class="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6"
            src="/images/elements/crit.svg"
            alt="crit"
          />
          <span class="text-xs lg:text-sm xl:text-base">{stats}</span>
        </div>
      </div>
    </button>
    <!-- PARTY Buttons -->
    <div class="grid grid-flow-col gap-2 lg:gap-3">
      {#each menuModals as modal (modal.id)}
        <button
          class="flex h-14 w-14 items-center justify-center rounded-md  bg-slate-700 lg:h-[68px] lg:w-[68px] xl:h-[72px] xl:w-[72px]"
          on:click={() => toggleModal(modal.component, modal.id)}
        >
          <img src={modal.img} alt="{modal.id} image" class="w-2/3" />
          <!-- <Thumbnail img="/images/weapon/rust.webp" alt="rust" /> -->
        </button>
      {/each}
    </div>
  </div>
</section>

<Modal bind:dialog title={modalTitle}>
  <svelte:component this={modalContent} />
</Modal>
