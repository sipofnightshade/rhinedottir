<script lang="ts">
  import { onMount } from 'svelte';
  import { clickOutside } from '$lib/helpers/clickOutside';
  import { character } from '$lib/stores/characterStore';

  // Import components
  import Settings from './_Settings.svelte';
  import Team from './_Team.svelte';
  import SaveLoadout from '../Loadout/SaveLoadout.svelte';
  import SetLoadout from '../Loadout/SetLoadout.svelte';
  import FullLogo from '../Logos/FullLogo.svelte';
  import { elementalBorders } from '$lib/data/Colors';
  import Gear from '$lib/icons/Gear.svelte';

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
    class="hidden w-full auto-cols-fr grid-flow-col items-center justify-between rounded-2xl border border-slate-600 px-3 py-2 md:grid"
  >
    <div class="mr-auto flex gap-x-4">
      <SaveLoadout />
      <SetLoadout />
    </div>

    <div class="flex w-full justify-center">
      <FullLogo class="pointer-events-none h-12" vision={$character.selected.vision} />
    </div>

    <div class="ml-auto flex items-center space-x-6">
      <button on:click={() => handleMenu(menuItems[1])}>
        <Gear class="w-7" />
      </button>
    </div>
  </nav>

  <!-- Bottom Menu -->
  <nav
    class="grid w-full auto-cols-fr grid-flow-col items-center rounded-xl border border-slate-600 px-2 py-1 md:hidden"
  >
    <div class="flex gap-3">
      <SetLoadout />
      <SaveLoadout />
    </div>

    <button
      on:click={() => handleMenu(menuItems[0])}
      class="mx-auto flex h-14 transform-gpu items-center justify-center rounded-lg p-1 transition-transform duration-300 ease-out active:scale-90"
    >
      <!-- <EmptyLogo
        class="pointer-events-none h-full"
        selected={currentMenuItem?.id === 'team'}
        url={$character.selected.url}
        vision={$character.selected.vision}
      /> -->
      <FullLogo
        class="pointer-events-none h-12 "
        selected={currentMenuItem?.id === 'team'}
        hasColor={true}
        vision={$character.selected.vision}
      />
    </button>

    <button
      on:click={() => handleMenu(menuItems[1])}
      class="ml-auto flex items-center justify-center rounded-lg"
      class:bg-slate-700={currentMenuItem?.id === 'settings'}
    >
      <Gear class="w-10" />
    </button>
  </nav>

  {#if currentMenuItem}
    <!-- @component
- This should only be for TEAM. Everything else should
  use Modals.
 -->
    <div
      class="menu absolute bottom-[72px] z-20 mx-auto flex max-h-vh50 w-full max-w-md flex-col overflow-auto rounded-xl border {elementalBorders[
        $character.selected.vision
      ]} bg-slate-800 p-2 shadow-md shadow-slate-900 md:hidden"
    >
      <svelte:component this={currentMenuItem.component} />
    </div>

    <!-- Desktop Menu -->
    <div
      class="absolute right-0 top-16 z-20 mt-1.5 hidden max-h-vh50 w-full max-w-xs flex-col overflow-auto rounded-lg border {elementalBorders[
        $character.selected.vision
      ]} bg-slate-800 p-2 shadow-md shadow-slate-800 md:flex lg:w-1/2"
    >
      <svelte:component this={currentMenuItem.component} />
    </div>
  {/if}
</div>
