<script lang="ts">
	import Combo from '../Table/Combo.svelte';
	import Damage from '../Table/Damage.svelte';
	import Stats from '../Table/Stats.svelte';
	import Tabs from './Tabs.svelte';

	let items: any = [
		{ label: 'Combos', value: 1, component: Combo },
		{ label: 'Damage', value: 2, component: Damage },
		{ label: 'Stats', value: 3, component: Stats }
	];
</script>

<section class="h-3/4">
	<Tabs {items} height={'h-mb-screen'} />
</section>
