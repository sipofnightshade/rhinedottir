<script>
  import Thumbnail from '../../Thumbnail/Thumbnail.svelte';
  import LevelGroup from '../_LevelGroup.svelte';
  import StarGroup from '../../Stars/StarGroup.svelte';
  import Filters from '../../Filters/Filters.svelte';
  import Picker from '../../Picker/Picker.svelte';

  import { WeaponData } from '$lib/data/Weapons';

  let passive = false;
  let profileHeight;
  let contentHeight;
</script>

<div class="h-full overflow-hidden" bind:clientHeight={contentHeight}>
  <div bind:clientHeight={profileHeight} class=" mb-4 grid grid-cols-3 gap-x-2 gap-y-3">
    <Thumbnail img="/images/weapon/thewidsith.webp" alt="wanderer" />
    <div class="col-span-2 flex flex-col justify-end">
      <div>
        <h3 class="text-lg">The Widsith</h3>
        <StarGroup rating={5} />
      </div>
      <div class="grid grid-cols-2 gap-x-2">
        <LevelGroup label="Level" value="80/90" />
        <LevelGroup label="Refinement" value="1/5" />
      </div>
    </div>
    <button
      on:click|stopPropagation={() => (passive = !passive)}
      class="relative col-span-3 w-full rounded-md bg-slate-800 py-2 px-3"
    >
      <p class="text-left text-base">Debut</p>
      {#if passive}
        <div
          class="absolute top-9 right-0 z-20 mt-1 w-full rounded-md bg-slate-800 p-2 py-2 px-3 text-left"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, error nostrum
          ipsa explicabo incidunt, inventore quod voluptatum esse molestias dolorum
          delectus eos culpa vitae. Sequi perspiciatis repellendus voluptates nobis
          numquam, dolor mollitia, quaerat aperiam error dolores fuga consequuntur velit
          expedita!
        </div>
      {/if}
    </button>
  </div>
  <div class="h-full">
    <Filters selected="anemo" />
    <Picker
      data={WeaponData.catalyst}
      type="weapon"
      h={contentHeight - profileHeight - 16 - 46 - 16}
    />
  </div>
</div>
