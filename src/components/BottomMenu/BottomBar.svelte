<script lang="ts">
  import Button from './Button.svelte';
  let showMenu = false;
  let menuContent = '';
  function handleMenu(id: string) {
    // close menu if same button pressed again
    if (menuContent === id) {
      showMenu = false;
    }

    menuContent = id;
    showMenu = !showMenu;
  }

  /**
   * create a svelte:component
   * render the svelte:component in the menu
   * create a function that takes a button ID like in reusable modals
   * - menu should change if a different button is clicked
   * - if the same button is clicked, or outside, or escape key,
   *   (and maybe alt + left arrow) then close the menu.
   *
   */
</script>

<div class="relative">
  <nav class="flex justify-between rounded-xl border border-slate-600 p-1">
    <Button url="UI_BtnIcon_Feedback.png" selected={false} />
    <Button url="UI_BtnIcon_CharacterData.png" selected={false} />
    <Button url="UI_BtnIcon_Team.png" selected={true} />
    <Button url="UI_BtnIcon_AvatarList.png" selected={false} />
    <Button url="UI_Icon_Intee_Mechanism.png" selected={false} />
  </nav>
  <div
    class="menu absolute right-0 bottom-14 z-10 mb-1 flex w-full flex-col bg-slate-700"
  >
    <div class="grid auto-rows-min grid-cols-5 gap-2 p-2">Test</div>
  </div>
</div>
