<script>
	import ActionButton from './ActionButton.svelte';
</script>

<section
	class="relative my-4 flex w-full overflow-x-auto rounded-xl bg-slate-700 p-2 pt-1"
>
	<ActionButton />
	<ActionButton />
	<ActionButton element={'pyro'} />
	<ActionButton element={'hydro'} />
	<ActionButton />
	<ActionButton />
	<ActionButton />
</section>
