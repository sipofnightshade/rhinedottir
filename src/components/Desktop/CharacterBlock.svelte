<script lang="ts">
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';
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
  import TeamIcon from '$lib/icons/TeamIcon.svelte';

  type PartyModal = {
    id: 'one' | 'two' | 'three';
    component: any;
  };

  const menuModals: PartyModal[] = [
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
    class="relative h-[120px] w-[120px] rounded-xl border border-slate-600 transition-colors hover:border-slate-500 lg:h-36 lg:w-36 xl:h-40 xl:w-40"
    on:click={() => toggleModal(Character, 'Character')}
  >
    <Thumbnail
      img="https://enka.network/ui/{$character.selected.url}.png"
      vision={$character.selected.vision}
      alt={$character.selected.fullName}
      rating={$character.selected.rating}
    />
  </button>
  <div class="flex flex-col justify-between">
    <!-- Weapon Button -->
    <button
      class="col-span-3 flex w-full items-end rounded-xl border border-slate-600 bg-slate-700 p-1 text-sm transition-colors hover:border-slate-500 lg:h-16 lg:text-base xl:h-fit"
      on:click={() => toggleModal(Weapon, 'Weapon')}
    >
      <div class="h-11 w-11 lg:h-[54px] lg:w-[54px] lg:p-0.5 xl:h-16 xl:w-16">
        <Thumbnail
          img="https://enka.network/ui/{$weapon.selected.url}.png"
          alt={$weapon.selected.fullName}
          rating={$weapon.selected.rating}
          classes="md:!rounded-lg bg-slate-800"
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
          class="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-600 bg-slate-700 transition-colors hover:border-slate-500 lg:h-[68px] lg:w-[68px] xl:h-[72px] xl:w-[72px]"
          on:click={() => toggleModal(modal.component, 'Select a Teammate')}
          class:border-none={$party[modal.id]}
        >
          {#if $party[modal.id]}
            <Thumbnail
              img="https://enka.network/ui/{$party[modal.id]?.character.selected.url}.png"
              vision={$party[modal.id]?.character.selected.vision}
              alt="teammate"
              rating={$party[modal.id]?.character.selected.rating}
            />
          {:else}
            <TeamIcon class="w-3/5" />
          {/if}
        </button>
      {/each}
    </div>
  </div>
</section>

<MultiModal bind:dialog>
  <h3 slot="title">{modalTitle}</h3>
  <svelte:component this={modalContent} />
</MultiModal>
