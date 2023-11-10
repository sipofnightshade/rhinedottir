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

  const substatIDs: [0, 1, 2, 3] = [0, 1, 2, 3];

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
  <div bind:clientHeight={profile} class="mb-4 flex h-28 gap-x-2">
    <div class="rounded-2xl border border-slate-600">
      <Thumbnail
        img="/images/artifact/{type}/{$artifact[type].selected.name}.webp"
        alt={$artifact[type].selected.name}
        classes="w-28"
      />
    </div>
    <div class="flex w-32 flex-col justify-between">
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
    {#each substatIDs as id (id)}
      <SubstatGroup {type} {id} on:inputBlur={handleInput} on:selected={handleSubstats} />
    {/each}
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
