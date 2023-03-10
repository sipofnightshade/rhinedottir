<script lang="ts">
  import ActionBar from '../Actions/ActionBar.svelte';
  import BottomBar from '../BottomMenu/BottomBar.svelte';
  import Combo from '../Table/Combo.svelte';
  import Damage from '../Table/Damage.svelte';
  import Stats from '../Table/Stats.svelte';
  import Tabs from '../Tabs/Tabs.svelte';

  let items: any = [
    { label: 'Combos', value: 1, component: Combo },
    { label: 'Damage', value: 2, component: Damage },
    { label: 'Stats', value: 3, component: Stats }
  ];
</script>

<section class="flex h-screen w-screen flex-col space-y-3 p-3 ">
  <Tabs {items} />
  <ActionBar />
  <BottomBar />
</section>
