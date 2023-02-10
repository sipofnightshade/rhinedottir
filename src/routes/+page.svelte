<script>
	import Nested from '../components/Menu/Nested.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		to your new<br />SvelteKit app
	</h1>

	<Nested answer={42} />
</section>
