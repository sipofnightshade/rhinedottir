<script lang="ts">
  import { onMount } from 'svelte';
  import { clickOutside } from '$lib/helpers/clickOutside';
  import { character } from '$lib/stores/characterStore';

  // Import components
  import Settings from './_Settings.svelte';
  import Team from './_Team.svelte';
  import SaveLoadout from '../Loadout/SaveLoadout.svelte';
  import SetLoadout from '../Loadout/SetLoadout.svelte';
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';

  // Define MenuItem interface
  interface MenuItem {
    id: string;
    img: string;
    component: any;
  }

  // Define menuItems array
  const menuItems: MenuItem[] = [
    { id: 'team', img: 'UI_BtnIcon_Team.png', component: Team },
    { id: 'settings', img: 'UI_Icon_Intee_Mechanism.png', component: Settings }
  ];

  let currentMenuItem: MenuItem | undefined = undefined;

  // Handle menu click
  function handleMenu(item: MenuItem) {
    currentMenuItem = currentMenuItem === item ? undefined : item;
  }

  // Handle Escape key press
  function handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      currentMenuItem = undefined;
    }
  }

  // Close menu if clicked outside
  function closeMenu() {
    if (currentMenuItem) {
      currentMenuItem = undefined;
    }
  }

  // Add event listener to detect Escape key press
  onMount(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });
</script>

<div class="relative flex w-full justify-center" use:clickOutside={closeMenu}>
  <!-- Top Menu -->
  <nav
    class="hidden w-full auto-cols-fr grid-flow-col items-center justify-between rounded-2xl border border-slate-600 p-2 md:grid"
  >
    <div class="mr-auto flex gap-x-4">
      <SaveLoadout />
      <SetLoadout />
    </div>

    <div class="flex w-full items-center">
      <p class="mx-auto">Rhinedottir</p>
    </div>

    <div class="ml-auto flex items-center space-x-6">
      <button on:click={() => handleMenu(menuItems[1])}
        ><img
          class="h-8 w-8"
          src="/images/ui/UI_Icon_Intee_Mechanism.png"
          alt="Settings Cog"
        /></button
      >
    </div>
  </nav>

  <!-- Bottom Menu -->
  <nav
    class="grid w-full auto-cols-fr grid-flow-col items-center rounded-xl border border-slate-600 p-1 md:hidden"
  >
    <div class="flex gap-3">
      <SetLoadout />
      <SaveLoadout />
    </div>

    <button
      on:click={() => handleMenu(menuItems[0])}
      class="mx-auto flex h-12 w-12 items-center justify-center rounded-lg p-1"
      class:bg-slate-700={currentMenuItem?.id === 'team'}
    >
      <Thumbnail
        img={`/images/character/${$character.selected.name}.webp`}
        vision={$character.selected.vision}
        alt={$character.selected.fullName}
      />
    </button>

    <button
      on:click={() => handleMenu(menuItems[1])}
      class="ml-auto flex h-12 w-12 items-center justify-center rounded-lg p-1"
      class:bg-slate-700={currentMenuItem?.id === 'settings'}
    >
      <img
        class="h-8 w-8"
        src="/images/ui/UI_Icon_Intee_Mechanism.png"
        alt="Settings Cog"
      />
    </button>
  </nav>

  {#if currentMenuItem}
    <!-- @component
- This should only be for TEAM. Everything else should
  use Modals.
 -->
    <div
      class="menu absolute bottom-16 z-20 mx-auto flex max-h-vh50 w-full max-w-md flex-col overflow-auto rounded-xl border border-slate-600 bg-slate-800 p-2 shadow-md shadow-slate-900 md:hidden"
    >
      <svelte:component this={currentMenuItem.component} />
    </div>

    <!-- Desktop Menu -->
    <div
      class="absolute right-0 top-14 z-20 mt-1 hidden max-h-vh50 w-full max-w-xs flex-col overflow-auto rounded-lg border border-slate-600 bg-slate-800 p-2 shadow shadow-slate-800 md:flex lg:w-1/2"
    >
      <svelte:component this={currentMenuItem.component} />
    </div>
  {/if}
</div>
