<script>
	import Nested from '../components/Menu/Nested.svelte';
	import BottomBar from '../components/Menu/BottomBar.svelte';
</script>

<svelte:head>
	<title>Rhinedottir</title>
	<meta name="description" content="Genshin Impact Calculator" />
</svelte:head>

<section>
	<Nested answer={42} />
</section>
<BottomBar />

<style lang="postcss">
	:global(body) {
		background-color: theme(colors.slate.800);
		font-weight: theme(fontWeight.medium);
		color: theme(textColor.slate.400);
	}
</style>
