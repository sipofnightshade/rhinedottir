import type {
  LoadOutTag,
  SavedArtifacts,
  SavedCharacter,
  SavedWeapon
} from '$lib/types/loadout';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type LoadoutItem = {
  id: string;
  title: string;
  tag: LoadOutTag;
  character: SavedCharacter;
  weapon: SavedWeapon;
  artifacts: SavedArtifacts;
};

const initialState: LoadoutItem[] = [];

const LOCAL_STORAGE_KEY = 'LOADOUTS';

function createLoadouts(initial_value: LoadoutItem[], init = true) {
  // Load data from localStorage (if available)
  if (init) {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    initial_value = storedData ? JSON.parse(storedData) : initial_value;
  }

  const { subscribe, set, update } = writable(initial_value);

  return {
    subscribe,
    set,
    addLoadout: (characterLoadout: LoadoutItem) =>
      update((state) => {
        state.push(characterLoadout);
        saveToLocalStorage(state);
        return state;
      }),
    editLoadout: (id: string, updatedLoadout: LoadoutItem) =>
      update((state) => {
        const index = state.findIndex((loadout) => loadout.id === id);
        if (index !== -1) {
          state[index] = updatedLoadout;
          saveToLocalStorage(state);
        }
        return state;
      }),
    removeLoadout: (id: string) =>
      update((state) => {
        const index = state.findIndex((loadout) => loadout.id === id);
        if (index !== -1) {
          state.splice(index, 1);
          saveToLocalStorage(state);
        }
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

export const loadouts = createLoadouts(initialState, browser);
