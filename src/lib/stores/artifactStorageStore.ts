import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { ArtifactNames, ArtifactStats, ArtifactType } from '$lib/types/artifacts';
import { getCritValue } from '$lib/helpers/getCritValue';
import { removeDuplicatesFromArray } from '$lib/helpers/removeDuplicatesFromArray';

interface Artifact {
  id: number;
  selected: ArtifactNames;
  fullName: string;
  url: string;
  lvl: number;
  isFiveStar: boolean;
  mainStat: { stat: ArtifactStats; value: number };
  substats: { stat: ArtifactStats; value: number }[];
}

export interface ArtifactStorageItem extends Artifact {
  tags: ArtifactStats[];
  critValue: number;
}

type ArtifactStore = Record<ArtifactType, ArtifactStorageItem[]>;

const initialState: ArtifactStore = {
  flower: [],
  feather: [],
  sands: [],
  goblet: [],
  circlet: []
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
        // check if state.type is defined as an array
        if (!Array.isArray(state[type])) {
          state[type] = [];
        }

        const tags = [artifact.mainStat.stat]; // used for efficient filtering
        let critValue = 0; // sums up total crit stats if any

        critValue += getCritValue(artifact.mainStat);

        artifact.substats.forEach((substat) => {
          if (substat.stat && !tags.includes(substat.stat)) {
            tags.push(substat.stat);
          }
          critValue += getCritValue(substat);
        });

        const uniqueTags = new Set(tags);

        state[type].push({ ...artifact, tags: [...uniqueTags], critValue });

        saveToLocalStorage(state);
        return state;
      }),

    removeArtifact: (type: ArtifactType, artifact: ArtifactStorageItem) =>
      update((state) => {
        state[type] = state[type].filter((a) => a !== artifact);
        saveToLocalStorage(state);
        return state;
      }),

    removeDupliecates: () =>
      update((state) => {
        state.flower = removeDuplicatesFromArray(state.flower);
        state.feather = removeDuplicatesFromArray(state.feather);
        state.sands = removeDuplicatesFromArray(state.sands);
        state.goblet = removeDuplicatesFromArray(state.goblet);
        state.circlet = removeDuplicatesFromArray(state.circlet);

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

export const artifactStorage = createStore({ ...initialState }, browser);
