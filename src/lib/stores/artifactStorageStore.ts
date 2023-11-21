import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { ArtifactStats, ArtifactType } from '$lib/types/artifacts';
import { getCritValue } from '$lib/helpers/getCritValue';
import { removeDuplicatesFromArray } from '$lib/helpers/removeDuplicatesFromArray';
import type { SavedArtifactItem } from '$lib/types/loadout';

export interface ArtifactStorageItem extends SavedArtifactItem {
  storageID: string;
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

    saveArtifact: (type: ArtifactType, artifact: SavedArtifactItem) =>
      update((state) => {
        // check if state.type is defined as an array
        if (!Array.isArray(state[type])) {
          state[type] = [];
        }

        const storageID = window.crypto.randomUUID();

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

        state[type].push({ ...artifact, tags: [...uniqueTags], critValue, storageID });

        saveToLocalStorage(state);
        return state;
      }),

    removeArtifact: (type: ArtifactType, id: string) =>
      update((state) => {
        state[type] = state[type].filter((a) => a.storageID !== id);
        saveToLocalStorage(state);
        return state;
      }),

    removeDupliecates: () =>
      update((state) => {
        state.flower = removeDuplicatesFromArray(state.flower, 'storageID');
        state.feather = removeDuplicatesFromArray(state.feather, 'storageID');
        state.sands = removeDuplicatesFromArray(state.sands, 'storageID');
        state.goblet = removeDuplicatesFromArray(state.goblet, 'storageID');
        state.circlet = removeDuplicatesFromArray(state.circlet, 'storageID');

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
