<script>
	import BottomBar from '../components/Menu/BottomBar.svelte';
	import ActionBar from '../components/Actions/ActionBar.svelte';
</script>

<svelte:head>
	<title>Rhinedottir</title>
	<meta name="description" content="Genshin Impact Calculator" />
</svelte:head>

<div class="px-5">
	<section />
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
