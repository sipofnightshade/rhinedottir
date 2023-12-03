import { writable } from 'svelte/store';
import { ArtifactData } from '$lib/data/Artifacts';

// types
import type { SelectedArtifact, ArtifactType, ArtifactStats } from '$lib/types/artifacts';
import type { SavedArtifacts } from '$lib/types/loadout';
import type { ArtifactStorageItem } from './artifactStorageStore';

export type Artifact = {
  selected: SelectedArtifact;
  lvl: number;
  isFiveStar: boolean;
  mainStat: { stat: ArtifactStats; value: number };
  substats: { stat: ArtifactStats; value: number }[];
  statsID: string;
};

export type ArtifactState = Record<ArtifactType, Artifact>;

const initialState: ArtifactState = {
  flower: createEmptyArtifact('hp'),
  feather: createEmptyArtifact('atk'),
  sands: createEmptyArtifact('atk%'),
  goblet: createEmptyArtifact('atk%'),
  circlet: createEmptyArtifact('critrate')
};

function createArtifact() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    set,
    setArtifact: (relic: ArtifactType, artifact: ArtifactStorageItem) =>
      update((state) => {
        if (!artifact) return state;

        const data = ArtifactData.find(
          (data) => data.name === artifact.selected
        ) as SelectedArtifact;

        state[relic].selected = data;
        state[relic].lvl = artifact.lvl;
        state[relic].isFiveStar = artifact.isFiveStar;
        state[relic].mainStat = { ...artifact.mainStat };
        state[relic].substats = [...artifact.substats];
        state[relic].statsID = artifact.statsID;

        return state;
      }),
    importArtifacts: (savedArtifacts: SavedArtifacts) =>
      update((state) => {
        const categories: ArtifactType[] = [
          'flower',
          'feather',
          'sands',
          'goblet',
          'circlet'
        ];

        categories.forEach((artifact) => {
          if (!state[artifact].selected) return;

          state[artifact].selected = ArtifactData.find(
            (data) => data.name === savedArtifacts[artifact].selected
          ) as SelectedArtifact;
          state[artifact].isFiveStar = savedArtifacts[artifact].isFiveStar;
          state[artifact].lvl = savedArtifacts[artifact].lvl;
          state[artifact].mainStat = { ...savedArtifacts[artifact].mainStat };
          state[artifact].substats = [...savedArtifacts[artifact].substats];
          state[artifact].statsID = savedArtifacts[artifact].statsID;
        });

        return state;
      }),

    reset: () => set(initialState)
  };
}

export const artifact = createArtifact();

// Create empty data values
function createEmptySelectedArtifact(): SelectedArtifact {
  return {
    uid: 0,
    url: 'none',
    name: 'none',
    fullName: 'None',
    rating: [],
    twoPiece: [{ values: [{ scaling: 'atk', coef: 0 }] }],
    fourPiece: [
      { description: 'No artifact selected', values: [{ scaling: 'normal', coef: 0 }] }
    ]
  };
}
function createEmptyArtifact(mainStat: ArtifactStats): Artifact {
  return {
    selected: createEmptySelectedArtifact(),
    lvl: 0,
    isFiveStar: false,
    mainStat: { stat: mainStat, value: 0 },
    substats: Array.from({ length: 4 }, () => ({ stat: '', value: 0 })),
    statsID: 'none'
  };
}
