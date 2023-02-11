<script>
	/**
	 * @type {"anemo"|"cryo"|"dendro"|"electro"|"hydro"|"geo"|"pyro"}
	 */
	export let element = 'anemo';
	let isActive = true;

	const backgrounds = {
		anemo: 'bg-anemo',
		cryo: 'bg-cryo',
		dendro: 'bg-dendro',
		electro: 'bg-electro',
		hydro: 'bg-hydro',
		geo: 'bg-geo',
		pyro: 'bg-pyro'
	};

	const outlines = {
		anemo: 'outline-anemo',
		cryo: 'outline-cryo',
		dendro: 'outline-dendro',
		electro: 'outline-electro',
		hydro: 'outline-hydro',
		geo: 'outline-geo',
		pyro: 'outline-pyro'
	};
</script>

<button
	class="relative mr-1 flex h-16 w-16 flex-shrink-0 items-center justify-center grayscale-80"
	class:filter-none={isActive}
	class:opacity-60={!isActive}
>
	<div
		class="absolute h-12 w-12 rounded-full {backgrounds[element]} opacity-0 blur-md"
		class:opacity-50={isActive}
	/>
	<div class="absolute h-[46px] w-[46px] rotate-45 rounded-sm {backgrounds[element]}" />
	<div
		class="absolute h-[52px] w-[52px] rounded-full {backgrounds[
			element
		]} outline outline-1 {outlines[element]}"
	/>
	<img
		class="z-10 h-[52px] w-[52px] rounded-full border-2 border-slate-200 "
		src="/images/talents/UI_Talent_S_Xiao_02.png"
		alt="Skill Button Xiao"
	/>
</button>
