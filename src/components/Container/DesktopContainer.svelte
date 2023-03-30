<script lang="ts">
  import ActionBar from '../Actions/ActionBar.svelte';
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
    <div class="min-h-0 grid flex-1 grid-cols-5 gap-8 overflow-hidden">
      <div class="col-span-2"><div class="h-40 bg-slate-300" /></div>
      <div class="col-span-3"><div class="h-40 bg-slate-300" /></div>
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
    <footer class="flex justify-between">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vero.</p>
      <p>Placeholder short text</p>
    </footer>
  </div>
</main>
