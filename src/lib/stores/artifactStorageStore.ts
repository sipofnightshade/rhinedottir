import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { ArtifactNames, ArtifactStats, ArtifactType } from '$lib/types/artifacts';

interface Artifact {
  id: string;
  selected: ArtifactNames;
  lvl: number;
  isFiveStar: boolean;
  mainStat: { stat: ArtifactStats; value: number };
  substats: { stat: ArtifactStats; value: number }[];
}

type ArtifactStore = Record<ArtifactType, Set<Artifact>>;

const initialState: ArtifactStore = {
  flower: new Set(),
  feather: new Set(),
  sands: new Set(),
  goblet: new Set(),
  circlet: new Set()
};

function createStore(initial_value: ArtifactStore, init = true) {
  // Load data from localStorage (if available)
  if (init) {
    const storedData = localStorage.getItem('artifactStorage');
    initial_value = storedData ? JSON.parse(storedData) : initial_value;
  }

  const { subscribe, set, update } = writable(initial_value);

  return {
    subscribe,
    set,
    saveArtifact: (type: ArtifactType, artifact: Artifact) =>
      update((state) => {
        state[type].add(artifact);
        saveToLocalStorage(state);
        return state;
      }),

    removeArtifact: (type: ArtifactType, artifact: Artifact) =>
      update((state) => {
        state[type].delete(artifact);
        saveToLocalStorage(state);
        return state;
      }),
    reset: () => {
      set(initialState);
      localStorage.removeItem('artifactStorage');
    }
  };
}

function saveToLocalStorage(data: any) {
  localStorage.setItem('artifactStorage', JSON.stringify(data));
}

export const artifactStorage = createStore(initialState, browser);
