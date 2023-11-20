import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { ArtifactNames, ArtifactStats, ArtifactType } from '$lib/types/artifacts';
import { getCritValue } from '$lib/helpers/getCritValue';

interface Artifact {
  id: number;
  selected: ArtifactNames;
  lvl: number;
  isFiveStar: boolean;
  mainStat: { stat: ArtifactStats; value: number };
  substats: { stat: ArtifactStats; value: number }[];
}

interface ArtifactItem extends Artifact {
  tags: Set<ArtifactStats | string>;
  critValue: number;
}

type ArtifactStore = Record<ArtifactType, Set<ArtifactItem>>;

const initialState: ArtifactStore = {
  flower: new Set(),
  feather: new Set(),
  sands: new Set(),
  goblet: new Set(),
  circlet: new Set()
};

const LOCAL_STORAGE_KEY = 'artifactStorage';

function createStore(initial_value: ArtifactStore, init = true) {
  // Load data from localStorage (if available)
  if (init) {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    initial_value = storedData ? JSON.parse(storedData) : initial_value;
  }

  const { subscribe, set, update } = writable(initial_value);

  return {
    subscribe,
    set,
    saveArtifact: (type: ArtifactType, artifact: Artifact) =>
      update((state) => {
        // get all all the unique stats in the artifact to use later
        const tags = new Set(artifact.mainStat.stat);
        let critValue = 0;

        // add main stat to critvalue if crit
        critValue += getCritValue(artifact.mainStat);

        artifact.substats.forEach((substat) => {
          // add artifact stats to a unique tags set
          if (substat.stat) tags.add(substat.stat);
          // add substats to critvalue if crit
          critValue += getCritValue(substat);
        });

        state[type].add({ ...artifact, tags, critValue });
        saveToLocalStorage(state);
        return state;
      }),

    removeArtifact: (type: ArtifactType, artifact: ArtifactItem) =>
      update((state) => {
        state[type].delete(artifact);
        saveToLocalStorage(state);
        return state;
      }),
    reset: () => {
      set(initialState);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  };
}

function saveToLocalStorage(data: any) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

export const artifactStorage = createStore(initialState, browser);
