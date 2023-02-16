<script lang="ts">
  import { onMount, setContext } from 'svelte';
  import Button from './Button.svelte';
  import Builds from './_Builds.svelte';
  import Details from './_Details.svelte';
  import Settings from './_Settings.svelte';
  import Team from './_Team.svelte';
  import Updates from './_Updates.svelte';

  interface MenuItem {
    id: string;
    img: string;
    component: string;
  }

  const menuItems: MenuItem[] = [
    { id: 'item1', img: 'UI_BtnIcon_Feedback.png', component: 'Builds' },
    { id: 'item2', img: 'UI_BtnIcon_CharacterData.png', component: 'Details' },
    { id: 'item3', img: 'UI_BtnIcon_Team.png', component: 'Settings' },
    { id: 'item4', img: 'UI_BtnIcon_AvatarList.png', component: 'Team' },
    { id: 'item5', img: 'UI_Icon_Intee_Mechanism.png', component: 'Updates' }
  ];

  const components = {
    Builds,
    Details,
    Settings,
    Team,
    Updates
  };

  let showMenu = false;
  let currentMenuItem: MenuItem | undefined = undefined;

  function handleMenu(item: MenuItem) {
    if (item === currentMenuItem) {
      // Clicked the same button again
      currentMenuItem = undefined;
    } else {
      currentMenuItem = item;
    }

    // Attach click event listener to close menu when user clicks outside of it
    if (showMenu) {
      const closeMenu = () => {
        showMenu = false;
        document.removeEventListener('click', closeMenu);
      };
      document.addEventListener('click', closeMenu);
    }
  }

  setContext('btn', { handleMenu });

  function handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      currentMenuItem = undefined;
    }
  }

  // Add an event listener to detect the Escape key press
  onMount(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });
</script>

<div class="relative">
  <nav class="flex justify-between rounded-xl border border-slate-600 p-1">
    {#each menuItems as item (item.id)}
      <Button url={item.img} selected={currentMenuItem?.id === item.id} id={item} />
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
