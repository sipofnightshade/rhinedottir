<script lang="ts">
  import { onMount } from 'svelte';
  import Builds from './_Builds.svelte';
  import Details from './_Details.svelte';
  import Settings from './_Settings.svelte';
  import Team from './_Team.svelte';
  import Updates from './_Updates.svelte';

  import { clickOutside } from '$lib/helpers/clickOutside';
  import SaveLoadout from '../Loadout/SaveLoadout.svelte';

  interface MenuItem {
    id: string;
    img: string;
    component: any;
  }

  const menuItems: MenuItem[] = [
    { id: 'updates', img: 'UI_BtnIcon_Feedback.png', component: Updates },
    { id: 'details', img: 'UI_BtnIcon_CharacterData.png', component: Details },
    { id: 'team', img: 'UI_BtnIcon_Team.png', component: Team },
    { id: 'builds', img: 'UI_BtnIcon_AvatarList.png', component: Builds },
    { id: 'settings', img: 'UI_Icon_Intee_Mechanism.png', component: Settings }
  ];

  let currentMenuItem: MenuItem | undefined = undefined;

  function handleMenu(item: any) {
    if (item === currentMenuItem) {
      // Clicked the same button again to close menu
      currentMenuItem = undefined;
    } else {
      currentMenuItem = item;
    }
  }

  function handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      currentMenuItem = undefined;
    }
  }

  // if menu is open and user clicks outside, close menu
  function closeMenu() {
    if (currentMenuItem) {
      currentMenuItem = undefined;
    }
    return null;
  }

  // Add an event listener to detect the Escape key press
  onMount(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });
</script>

<div class="relative" use:clickOutside={closeMenu}>
  <!-- Top Menu -->
  <nav
    class="hidden items-center justify-between rounded-lg border-2 border-slate-700 p-3 md:flex"
  >
    <SaveLoadout />
    <p>Rhinedottir</p>
    <div class="flex items-center space-x-6">
      <!-- <button on:click={() => handleMenu(menuItems[0])}>Updates</button> -->
      <!-- <button on:click={() => handleMenu(menuItems[1])}>Builds</button> -->
      <!-- <button on:click={() => handleMenu(menuItems[3])}>Artifacts</button> -->
      <button on:click={() => handleMenu(menuItems[4])}>Settings</button>
    </div>
  </nav>
  <!-- Bottom Menu -->
  <nav class="flex justify-between rounded-xl border border-slate-600 p-1 md:hidden">
    {#each menuItems as item (item.id)}
      <!-- <Button
        on:menuHandler={handleMenu}
        url={item.img}
        selected={currentMenuItem?.id === item.id}
        {item}
      /> -->
      <button
        on:click={() => handleMenu(item)}
        class="flex h-12 w-12 items-center justify-center rounded-lg"
        class:bg-anemo={currentMenuItem?.id === item.id}
      >
        <img class="h-8 w-8" src="/images/ui/{item.img}" alt="Menu UI Icon:{item.img}" />
      </button>
    {/each}
  </nav>
  {#if currentMenuItem}
    <div
      class="menu absolute bottom-16 right-0 z-10 mb-1 flex max-h-vh50 w-full flex-col overflow-auto rounded-lg bg-slate-700 p-2 md:hidden"
    >
      <svelte:component this={currentMenuItem.component} />
    </div>

    <!-- CREATE ONE SPECIFICALLY FOR DESKTOP -->
    <div
      class="absolute right-0 z-20 mt-1 hidden max-h-vh50 w-full flex-col overflow-auto rounded-lg bg-slate-700 p-2 md:flex lg:w-1/2"
    >
      <svelte:component this={currentMenuItem.component} />
    </div>
  {/if}
</div>
