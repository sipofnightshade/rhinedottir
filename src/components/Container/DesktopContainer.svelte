<script lang="ts">
  import ActionBar from '../Actions/ActionBar.svelte';
  import ArtifactBlock from '../Desktop/Artifact/ArtifactBlock.svelte';
  import CharacterBlock from '../Desktop/CharacterBlock.svelte';
  import Footer from '../Footer/Footer.svelte';
  import NavBar from '../NavBar/NavBar.svelte';
  import Combo from '../Table/Combo.svelte';
  import Damage from '../Table/Damage.svelte';
  import Stats from '../Table/Stats.svelte';
  import Tabs from '../Tabs/Tabs.svelte';

  let items: any = [
    { label: 'Damage', value: 1, component: Damage },
    { label: 'Stats', value: 2, component: Stats }
  ];
</script>

<main class="h-screen p-4">
  <div class="container mx-auto flex h-full flex-col space-y-4">
    <NavBar />
    <div
      class="min-h-0 grid flex-1 grid-cols-[310px_442px] gap-4 overflow-hidden lg:grid-cols-[380px_612px] lg:gap-8 xl:grid-cols-[412px_832px]"
    >
      <CharacterBlock />
      <ArtifactBlock />
      <div class="flex flex-col overflow-hidden">
        <Tabs {items} buttonGrid="grid-cols-2 mb-2" />
      </div>
      <div class="flex flex-col overflow-hidden">
        <ActionBar margin={false} />
        <div class="flex flex-1 flex-col overflow-y-auto">
          <Combo />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</main>

<!-- 
<main class="h-screen p-4">
  <div class="container mx-auto flex h-full flex-col space-y-4">
    <NavBar />
    <div class="min-h-0 grid flex-1 grid-cols-5 gap-8 overflow-hidden">
      <div class="col-span-2"><CharacterBlock /></div>
      <div class="col-span-3"><ArtifactBlock /></div>
      <div class="col-span-2 flex flex-col overflow-hidden">
        <Tabs {items} buttonGrid="grid-cols-2 mb-2" />
      </div>
      <div class="col-span-3 flex flex-col overflow-hidden">
        <ActionBar margin={false} />
        <div class="flex flex-1 flex-col overflow-y-auto">
          <Combo />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</main> -->
