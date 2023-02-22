<script lang="ts">
  import Thumbnail from '../Thumbnail/Thumbnail.svelte';
  import LevelGroup from './_LevelGroup.svelte';
  import Picker from '../Picker/Picker.svelte';
  import SubstatGroup from './_SubstatGroup.svelte';
  import StarSelector from '../Stars/StarSelector.svelte';

  import { ArtifactData } from '$lib/data/Artifacts';

  export let type: 'flower' | 'feather' | 'sands' | 'goblet' | 'circlet';

  const imgType = {
    flower: 'artifact/flower',
    feather: 'artifact/feather',
    sands: 'artifact/sands',
    goblet: 'artifact/goblet',
    circlet: 'artifact/circlet'
  };

  let passive = false;
  let profileHeight;
  let contentHeight;
</script>

<div class="h-full overflow-hidden" bind:clientHeight={contentHeight}>
  <div bind:clientHeight={profileHeight} class=" mb-4 grid grid-cols-3 gap-x-2 gap-y-3">
    <Thumbnail img="/images/artifact/{type}/gladiators.webp" alt="wanderer" />
    <div class="col-span-2 flex flex-col justify-end">
      <div class="grid grid-cols-2 gap-x-2">
        <StarSelector />
        <div />
        <LevelGroup label="Level" value="80/90" />
        <LevelGroup label="Refinement" value="1/5" />
      </div>
    </div>
    <button
      on:click|stopPropagation={() => (passive = !passive)}
      class="relative col-span-3 flex w-full justify-between rounded-md bg-slate-800 py-2 px-3"
    >
      <div class="text-base">
        <span>Gliadator's Finale </span>
        <span class:text-green-500={true}>(1/4)</span>
      </div>
      <span class="text-base">></span>

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
    <div class="col-span-3 grid grid-cols-2 gap-4">
      <SubstatGroup />
      <SubstatGroup />
      <SubstatGroup />
      <SubstatGroup />
    </div>
  </div>
  <div class="h-full">
    <Picker
      data={ArtifactData}
      type={imgType[type]}
      h={contentHeight - profileHeight - 16}
    />
  </div>
</div>
