<script>
	import BottomBar from '../components/Menu/BottomBar.svelte';
	import ActionBar from '../components/Actions/ActionBar.svelte';
	import MobileTabContainer from '../components/Tabs/MobileTabContainer.svelte';
</script>

<svelte:head>
	<title>Rhinedottir</title>
	<meta name="description" content="Genshin Impact Calculator" />
</svelte:head>

<div class="flex h-screen flex-col px-4">
	<section class="">
		<MobileTabContainer />
	</section>
	<ActionBar />
	<BottomBar />
</div>

<style lang="postcss">
	:global(body) {
		background-color: theme(colors.slate.800);
		font-weight: theme(fontWeight.medium);
		color: theme(textColor.slate.400);
	}
</style>
