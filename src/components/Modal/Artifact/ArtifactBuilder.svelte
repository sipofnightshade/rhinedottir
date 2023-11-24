<script lang="ts">
  // components
  import LevelGroup from '../_LevelGroup.svelte';
  import Picker from '../../Picker/Picker.svelte';
  import SubstatGroup from './_SubstatGroup.svelte';
  import EffectDetails from '../EffectDetails.svelte';
  import MainStat from './_MainStat.svelte';
  import StarButton from './StarButton.svelte';

  // stores & helpers
  import { artifact } from '$lib/stores/artifactStore';
  import { ArtifactData } from '$lib/data/Artifacts';
  import { TwoPieceLabels, type TwoPiece_Stats } from '$lib/data/Stats';
  import { artifactStatFormatterX } from '$lib/helpers/artifactStatFormatter';
  import type { ArtifactNames, ArtifactType } from '$lib/types/artifacts';
  import { artifactStorage } from '$lib/stores/artifactStorageStore';
  import { isArtifactValid } from '$lib/helpers/isArtifactValid';

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

  // handle saving
  function handleSave() {
    const { uid, url, name, fullName, rating } = $artifact[type].selected;

    const currentArtifact = {
      ...$artifact[type],
      selected: name,
      uid: uid,
      rating,
      url,
      fullName
    };

    artifactStorage.saveArtifact(type, currentArtifact);

    /** @todo Add a specific button for this */
    artifactStorage.removeDupliecates();
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

  $: canSave =
    $artifact[type].selected.uid !== 0 &&
    isArtifactValid($artifact[type].mainStat, $artifact[type].substats);
</script>

<div class="flex flex-col gap-2 overflow-hidden xs:gap-4">
  <div class="flex items-end gap-x-2">
    <StarButton {type} name={$artifact[type].selected.name} />
    <div class="w-64 xs:w-72">
      <LevelGroup
        label="Lvl"
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
              <p>{bonus}</p>
            </li>
          {/each}
        </ul>
      </div>

      <div class:text-rd-green={artifactCount > 3}>
        <p class="text-sm font-bold uppercase">4-PIECE BONUS:</p>
        <ul>
          {#each fourPieceDetails as bonus}
            <li class="mt-0.5 flex w-full gap-1.5 text-slate-300">
              <p>{bonus}</p>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </EffectDetails>

  <div class="grid grid-cols-2 gap-2">
    {#each substatIDs as id (id)}
      <SubstatGroup {type} {id} on:inputBlur={handleInput} on:selected={handleSubstats} />
    {/each}
  </div>

  <div class="grid grid-cols-3 gap-x-3">
    <div class="h-9 rounded-lg border border-dashed border-slate-700 md:h-10" />
    <div class="h-9 rounded-lg border border-dashed border-slate-700 md:h-10" />
    <button
      on:click={handleSave}
      disabled={!canSave}
      class:opacity-50={!canSave}
      class="h-9 items-center justify-center rounded-lg border border-slate-600 bg-slate-700 transition-colors md:h-10"
      class:hover:border-slate-500={canSave}
      class:active:bg-slate-600={canSave}
    >
      Save
    </button>
  </div>

  <div class="h-[1px] bg-slate-600" />

  <Picker on:selected={handleArtifactSelect} data={ArtifactData} type={imgType[type]} />
</div>
