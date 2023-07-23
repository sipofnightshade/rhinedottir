<script lang="ts">
  import Thumbnail from '../../Thumbnail/Thumbnail.svelte';
  import LevelGroup from '../_LevelGroup.svelte';
  import Picker from '../../Picker/Picker.svelte';
  import SubstatGroup from './_SubstatGroup.svelte';
  import StarSelector from '../../Stars/StarSelector.svelte';
  import MainStat from './_MainStat.svelte';
  import { artifact } from '$lib/stores/artifactStore';

  import { ArtifactData } from '$lib/data/Artifacts';
  import { labels } from '$lib/data/Levels';

  export let type: 'flower' | 'feather' | 'sands' | 'goblet' | 'circlet';

  const imgType = {
    flower: 'artifact/flower',
    feather: 'artifact/feather',
    sands: 'artifact/sands',
    goblet: 'artifact/goblet',
    circlet: 'artifact/circlet'
  };

  let passive = false;
  let profile;
  let contentH;

  // state methods
  function handleArtifactSelect(event: any) {
    artifact.setArtifact(type, event.detail.selected);
  }

  function handleIncrement(event: any) {
    artifact.increment(event.detail.groupID);
  }

  function handleDecrement(event: any) {
    artifact.decrement(event.detail.groupID);
  }

  function handleMainstat(event: CustomEvent) {
    artifact.setMainStat(type, event.detail.value);
  }

  function handleSubstats(event: any) {
    artifact.setSubstats(type, event.detail.id, event.detail.value);
  }

  function handleInput(event: any) {
    artifact.setInput(type, event.detail.id, event.detail.value);
  }
</script>

<div class="h-full overflow-hidden" bind:clientHeight={contentH}>
  <div bind:clientHeight={profile} class=" mb-4 grid grid-cols-3 gap-x-2 gap-y-3">
    <Thumbnail
      img="/images/artifact/{type}/{$artifact[type].selected.name}.webp"
      alt="wanderer"
    />
    <div class="col-span-2 flex flex-col justify-end">
      <div class="grid grid-cols-2 gap-x-2">
        <div>
          <StarSelector {type} />
          <LevelGroup
            label="Level"
            value={labels.artifactLevels[$artifact[type].lvl]}
            id={type}
            on:increment={handleIncrement}
            on:decrement={handleDecrement}
          />
        </div>
        <MainStat {type} on:selected={handleMainstat} />
      </div>
    </div>
    <button
      on:click|stopPropagation={() => (passive = !passive)}
      class="relative col-span-3 flex w-full items-center justify-between rounded-md bg-slate-800 py-2 px-3"
    >
      <div class="text-sm">
        <span>{$artifact[type].selected.fullName}</span>
        <span class:text-green-500={true}>(1/4)</span>
      </div>
      <img src="/images/ui/chevron_down.svg" alt="chevron down" />

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
    <div class="col-span-3 grid grid-cols-2 gap-2">
      <SubstatGroup
        {type}
        id={0}
        on:inputBlur={handleInput}
        on:selected={handleSubstats}
      />
      <SubstatGroup
        {type}
        id={1}
        on:inputBlur={handleInput}
        on:selected={handleSubstats}
      />
      <SubstatGroup
        {type}
        id={2}
        on:inputBlur={handleInput}
        on:selected={handleSubstats}
      />
      <SubstatGroup
        {type}
        id={3}
        on:inputBlur={handleInput}
        on:selected={handleSubstats}
      />
    </div>
  </div>
  <div class="h-full">
    <Picker
      on:selected={handleArtifactSelect}
      data={ArtifactData}
      type={imgType[type]}
      h={contentH - profile - 16}
    />
  </div>
</div>
