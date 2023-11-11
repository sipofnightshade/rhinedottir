<script lang="ts">
  // components
  import Thumbnail from '../../Thumbnail/Thumbnail.svelte';
  import LevelGroup from '../_LevelGroup.svelte';
  import Picker from '../../Picker/Picker.svelte';
  import SubstatGroup from './_SubstatGroup.svelte';
  import StarSelector from '../../Stars/StarSelector.svelte';
  import EffectDetails from '../EffectDetails.svelte';
  import MainStat from './_MainStat.svelte';
  import Bullet from '$lib/icons/Bullet.svelte';

  // stores & helpers
  import { artifact } from '$lib/stores/artifactStore';
  import { activeSets } from '$lib/stores/activeSetsStore';
  import { ArtifactData } from '$lib/data/Artifacts';
  import { TwoPieceLabels, type TwoPiece_Stats } from '$lib/data/Stats';
  import { artifactStatFormatterX } from '$lib/helpers/artifactStatFormatter';
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
  $: twoPieceDetails = $artifact[type].selected.twoPiece[0].values.map((bonus) => {
    return `${TwoPieceLabels[bonus.scaling as TwoPiece_Stats]} +${artifactStatFormatterX(
      bonus.scaling,
      bonus.coef as number
    )}`;
  });
  $: fourPieceDetails = $artifact[type].selected.fourPiece.map(
    (bonus) => bonus.description
  );
</script>

<div class="flex h-full flex-col gap-4 overflow-hidden">
  <div class="flex h-28 gap-x-2">
    <div class="rounded-2xl">
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
  <EffectDetails disabled={$artifact[type].selected.name === 'none'}>
    <h3 slot="title">
      <span>{$artifact[type].selected.fullName}</span>
      <span
        class="ml-1"
        class:text-rd-green={artifactCount > 1}
        class:font-bold={artifactCount > 1}
        class:hidden={$artifact[type].selected.name === 'none'}
      >
        {`(${artifactCount}/4)`}
      </span>
    </h3>
    <div
      slot="details"
      class="flex flex-col gap-3"
      class:hidden={$artifact[type].selected.name === 'none'}
    >
      <div class:text-rd-green={artifactCount > 1}>
        <p class="text-sm font-bold uppercase">2-PIECE BONUS:</p>
        <ul>
          {#each twoPieceDetails as bonus}
            <li class="mt-0.5 flex w-full gap-1.5">
              <Bullet class="ml-1 mt-1 h-3 flex-shrink-0 fill-current" />
              <p>{bonus}</p>
            </li>
          {/each}
        </ul>
      </div>

      <div class:text-rd-green={artifactCount > 3}>
        <p class="text-sm font-bold uppercase">4-PIECE BONUS:</p>
        <ul>
          {#each fourPieceDetails as bonus}
            <li class="mt-0.5 flex w-full gap-1.5">
              <Bullet class="ml-1 mt-1 h-3 flex-shrink-0 fill-current" />
              <p>{bonus}</p>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </EffectDetails>

  <div class="flex flex-col gap-2">
    {#each substatIDs as id (id)}
      <SubstatGroup {type} {id} on:inputBlur={handleInput} on:selected={handleSubstats} />
    {/each}
  </div>

  <Picker on:selected={handleArtifactSelect} data={ArtifactData} type={imgType[type]} />
</div>
