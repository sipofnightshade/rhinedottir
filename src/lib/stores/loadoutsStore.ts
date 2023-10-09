import type { SavedArtifacts, SavedCharacter, SavedWeapon } from '$lib/types/loadout';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type LoadoutItem = {
  id: string;
  title: string;
  character: SavedCharacter;
  weapon: SavedWeapon;
  artifacts: SavedArtifacts;
};

const initialState: LoadoutItem[] = [];

function createLoadouts(initial_value: LoadoutItem[], init = true) {
  // Load data from localStorage (if available)
  if (init) {
    const storedData = localStorage.getItem('loadouts');
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
      localStorage.removeItem('loadouts');
    }
  };
}

function saveToLocalStorage(data: any) {
  localStorage.setItem('loadouts', JSON.stringify(data));
}

export const loadouts = createLoadouts(initialState, browser);
