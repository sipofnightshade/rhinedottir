<script lang="ts">
  import { onMount } from 'svelte';
  import Button from './Button.svelte';
  import Builds from './_Builds.svelte';
  import Details from './_Details.svelte';
  import Settings from './_Settings.svelte';
  import Team from './_Team.svelte';
  import Updates from './_Updates.svelte';

  import { clickOutside } from '$lib/helpers/clickOutside';

  interface MenuItem {
    id: string;
    img: string;
    component: string;
  }

  const menuItems: MenuItem[] = [
    { id: 'item1', img: 'UI_BtnIcon_Feedback.png', component: 'Updates' },
    { id: 'item2', img: 'UI_BtnIcon_CharacterData.png', component: 'Details' },
    { id: 'item3', img: 'UI_BtnIcon_Team.png', component: 'Team' },
    { id: 'item4', img: 'UI_BtnIcon_AvatarList.png', component: 'Builds' },
    { id: 'item5', img: 'UI_Icon_Intee_Mechanism.png', component: 'Settings' }
  ];

  const components = {
    Builds,
    Details,
    Settings,
    Team,
    Updates
  };

  let currentMenuItem: MenuItem | undefined = undefined;

  function handleMenu(event: any) {
    if (event.detail === currentMenuItem) {
      // Clicked the same button again
      currentMenuItem = undefined;
    } else {
      currentMenuItem = event.detail;
    }
  }

  function handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      currentMenuItem = undefined;
    }
  }

  // if menu is open and user clicks outside, close menu
  function handleOutsideClick() {
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

<div class="relative" use:clickOutside={handleOutsideClick}>
  <nav class="flex justify-between rounded-xl border border-slate-600 p-1">
    {#each menuItems as item (item.id)}
      <Button
        on:menuHandler={handleMenu}
        url={item.img}
        selected={currentMenuItem?.id === item.id}
        {item}
      />
    {/each}
  </nav>
  {#if currentMenuItem}
    <div
      class="menu absolute bottom-16 right-0 z-10 mb-1 flex w-full flex-col  rounded-lg bg-slate-700 p-4"
    >
      <svelte:component this={components[currentMenuItem.component]} />
    </div>
  {/if}
</div>
