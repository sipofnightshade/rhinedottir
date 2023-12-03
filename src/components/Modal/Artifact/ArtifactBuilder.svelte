<script lang="ts">
  // components
  import LevelGroup from '../_LevelGroup.svelte';
  import Picker from '../../Picker/Picker.svelte';
  import SubstatGroup from './_SubstatGroup.svelte';
  import EffectDetails from '../EffectDetails.svelte';
  import MainStat from './_MainStat.svelte';
  import StarButton from './StarButton.svelte';

  // stores & helpers
  import { ArtifactData } from '$lib/data/Artifacts';
  import { TwoPieceLabels, type TwoPiece_Stats } from '$lib/data/Stats';
  import { artifactStatFormatterX } from '$lib/helpers/artifactStatFormatter';
  import { artifactStorage } from '$lib/stores/artifactStorageStore';
  import { isArtifactValid } from '$lib/helpers/isArtifactValid';
  import { generateArtifactKey } from '$lib/helpers/generateArtifactKey';
  import { getArtifactStat } from '$lib/helpers/getArtifactStat';

  // types
  import type { ArtifactStats, ArtifactType } from '$lib/types/artifacts';

  type STAT = { stat: ArtifactStats; value: number };

  export let type: ArtifactType;

  let selectedArtifact = ArtifactData[0];
  let lvl = 0;
  let isFiveStar = false;
  let mainStat: STAT = {
    stat: 'atk',
    value: 0
  };
  let substats: STAT[] = [
    { stat: '', value: 0 },
    { stat: '', value: 0 },
    { stat: '', value: 0 },
    { stat: '', value: 0 }
  ];

  // select an artifact
  function handleArtifactSelect(event: any) {
    selectedArtifact = event.detail.selected;

    // reset artifact lvl and rating
    if (selectedArtifact.rating.length > 1) {
      lvl = 20;
      isFiveStar = true;
    } else {
      lvl = 16;
      isFiveStar = false;
    }

    if (selectedArtifact.name === 'none') {
      mainStat.value = 0;
      substats = [
        { stat: '', value: 0 },
        { stat: '', value: 0 },
        { stat: '', value: 0 },
        { stat: '', value: 0 }
      ];
    } else {
      mainStat.value = getArtifactStat(isFiveStar, mainStat.stat, lvl);
    }
  }

  function handleIncrement() {
    if (isFiveStar && lvl < 20) {
      lvl++;
    } else if (isFiveStar === false && lvl < 16) {
      lvl++;
    }
  }

  function handleDecrement() {
    if (lvl > 0) lvl--;
  }

  function handleRating() {
    if (selectedArtifact.rating.length > 1) {
      isFiveStar = !isFiveStar;
      if (isFiveStar) {
        lvl = 20;
      } else {
        lvl = 16;
      }
    }
  }

  // update mainStat value when any dependences change
  $: if (selectedArtifact.name !== 'none') {
    mainStat.value = getArtifactStat(isFiveStar, mainStat.stat, lvl);
  } else {
    mainStat.value = 0;
  }

  // handle saving
  function saveArtifact() {
    if (selectedArtifact.name === 'none') return;

    const statsID = generateArtifactKey(selectedArtifact.name, mainStat, substats);
    const storageID = window.crypto.randomUUID();

    const currentArtifact = {
      selected: selectedArtifact.name,
      uid: selectedArtifact.uid,
      rating: selectedArtifact.rating,
      isFiveStar,
      lvl,
      url: selectedArtifact.url,
      fullName: selectedArtifact.fullName,
      statsID,
      storageID,
      mainStat,
      substats
    };

    artifactStorage.saveArtifact(type, { ...currentArtifact });
  }

  // get current artifact set effects
  $: twoPieceDetails = selectedArtifact.twoPiece[0].values.map((bonus) => {
    return `${TwoPieceLabels[bonus.scaling as TwoPiece_Stats]} +${artifactStatFormatterX(
      bonus.scaling,
      bonus.coef as number
    )}`;
  });
  $: fourPieceDetails = selectedArtifact.fourPiece.map((bonus) => bonus.description);

  // minor validation for created artifact
  $: canSave = selectedArtifact.uid !== 0 && isArtifactValid(mainStat, substats);
</script>

<div class="flex flex-col gap-2 overflow-hidden xs:gap-4">
  <div class="flex items-end gap-x-2">
    <StarButton
      on:click={handleRating}
      {type}
      {isFiveStar}
      name={selectedArtifact.name}
      url={selectedArtifact.url}
    />
    <div class="w-64 xs:w-72">
      <LevelGroup
        label="Lvl"
        value={lvl}
        id={type}
        rating={isFiveStar}
        on:increment={handleIncrement}
        on:decrement={handleDecrement}
      />
    </div>

    <MainStat {type} bind:stat={mainStat.stat} bind:value={mainStat.value} />
  </div>
  <EffectDetails disabled={selectedArtifact.name === 'none'}>
    <h3 slot="title">
      {selectedArtifact.fullName}
    </h3>
    <div
      slot="details"
      class="flex flex-col gap-3"
      class:hidden={selectedArtifact.name === 'none'}
    >
      <div>
        <p class="text-sm font-bold uppercase">2-PIECE BONUS:</p>
        <ul>
          {#each twoPieceDetails as bonus}
            <li class="mt-0.5 flex w-full gap-1.5">
              <p>{bonus}</p>
            </li>
          {/each}
        </ul>
      </div>

      <div>
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
    {#each substats as { stat, value }, index (index)}
      <SubstatGroup {type} bind:stat bind:value {index} />
    {/each}
  </div>

  <div class="grid grid-cols-3 gap-x-3">
    <div class="h-10 rounded-lg border border-dashed border-slate-700" />
    <div class="h-10 rounded-lg border border-dashed border-slate-700" />
    <button
      on:click={saveArtifact}
      disabled={!canSave}
      class:opacity-50={!canSave}
      class=" h-10 items-center justify-center rounded-lg border border-slate-600 bg-slate-700 transition-colors"
      class:hover:border-slate-500={canSave}
      class:active:bg-slate-600={canSave}
    >
      Save
    </button>
  </div>

  <div class="h-[1px] bg-slate-600" />

  <Picker on:selected={handleArtifactSelect} data={ArtifactData} {type} />
</div>
