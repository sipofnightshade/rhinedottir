<script lang="ts">
  import ActionBar from '../Actions/ActionBar.svelte';
  import MenuBar from '../NavMenu/MenuBar.svelte';
  import ArtifactBlock from '../Desktop/ArtifactBlock.svelte';
  import CharacterBlock from '../Desktop/CharacterBlock.svelte';
  import Footer from '../Footer/Footer.svelte';
  import Combo from '../Table/Combo.svelte';
  import Damage from '../Table/Damage.svelte';
  import Tabs from '../Tabs/Tabs.svelte';
  import StatsAll from '../Table/StatsAll.svelte';

  const mobileItems: any = [
    { label: 'Combos', value: 1, component: Combo },
    { label: 'Damage', value: 2, component: Damage },
    { label: 'Stats', value: 3, component: StatsAll }
  ];
  const desktopItems: any = [
    { label: 'Damage', value: 1, component: Damage },
    { label: 'Stats', value: 2, component: StatsAll }
  ];

  let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth >= 768}
  <!-- desktop -->
  <section class="hidden h-screen py-2 md:block">
    <div class="container relative mx-auto flex h-full flex-col space-y-4">
      <MenuBar />
      <div
        class="min-h-0 grid h-full grid-cols-[310px_442px] grid-rows-[auto,1fr] content-start gap-4 overflow-hidden lg:grid-cols-[380px_620px] lg:gap-6 xl:mt-6 xl:grid-cols-[412px_844px]"
      >
        <CharacterBlock />
        <ArtifactBlock />
        <div class="flex h-full flex-col overflow-hidden">
          <Tabs items={desktopItems} buttonGrid="grid-cols-2 mb-2" />
        </div>
        <div class="flex flex-col space-y-2 overflow-hidden">
          <ActionBar />
          <div class="scrollbar flex flex-1 flex-col overflow-y-auto">
            <Combo />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </section>
{:else}
  <!-- mobile -->
  <section
    class="dynamic-height mx-auto flex h-screen w-screen flex-col space-y-3 p-3 transition-transform md:hidden"
  >
    <Tabs items={mobileItems} />
    <ActionBar />
    <MenuBar />
  </section>
{/if}

<style lang="postcss">
  .dynamic-height {
    min-height: 100dvh;
  }
</style>
