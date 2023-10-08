<script lang="ts">
  import Thumbnail from '../../Thumbnail/Thumbnail.svelte';
  import LevelGroup from '../_LevelGroup.svelte';
  import Picker from '../../Picker/Picker.svelte';
  import SubstatGroup from './_SubstatGroup.svelte';
  import StarSelector from '../../Stars/StarSelector.svelte';
  import MainStat from './_MainStat.svelte';
  import { artifact } from '$lib/stores/artifactStore';
  import { activeSets } from '$lib/stores/activeSetsStore';

  import { ArtifactData } from '$lib/data/Artifacts';
  import EffectDetails from '../EffectDetails.svelte';
  import type { ArtifactNames, ArtifactType } from '$lib/types/artifacts';

  export let type: ArtifactType;

  const imgType = {
    flower: 'artifact/flower',
    feather: 'artifact/feather',
    sands: 'artifact/sands',
    goblet: 'artifact/goblet',
    circlet: 'artifact/circlet'
  };

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

  function countArtifactSets(artifactSet: ArtifactNames) {
    if (artifactSet === 'none') return 1;

    const artifactTypes: ArtifactType[] = [
      'flower',
      'feather',
      'sands',
      'goblet',
      'circlet'
    ];

    let count = 0;
    for (const value of artifactTypes) {
      if (artifactSet === $artifact[value].selected.name) {
        count++;
      }
    }
    return count;
  }

  $: artifactCount = countArtifactSets($artifact[type].selected.name);
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
            value={$artifact[type].lvl}
            id={type}
            rating={$artifact[type].isFiveStar}
            on:increment={handleIncrement}
            on:decrement={handleDecrement}
          />
        </div>
        <MainStat {type} on:selected={handleMainstat} />
      </div>
    </div>
    <EffectDetails>
      <p slot="title">
        <span>{$artifact[type].selected.fullName}</span>
        <span class="ml-1" class:text-green-400={artifactCount > 1}
          >{`(${artifactCount}/4)`}</span
        >
      </p>
      <div slot="details">
        {#each $artifact[type].selected.fourPiece as action}
          <p>{action.description || ''}</p>
        {/each}
      </div>
    </EffectDetails>

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
