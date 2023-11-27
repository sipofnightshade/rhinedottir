import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Settings = 'limitedColors' | 'hideZeroStats';

const initialState: Record<Settings, boolean> = {
  limitedColors: false,
  hideZeroStats: false
};

const LOCAL_STORAGE_KEY = 'rhinedottir_settings';

function createStore(initial_value: Record<Settings, boolean>, init = true) {
  // Load data from localStorage (if available)
  if (init) {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    initial_value = storedData ? JSON.parse(storedData) : initial_value;
  }

  const { subscribe, set, update } = writable(initial_value);

  return {
    subscribe,
    set,
    switchSetting: (key: Settings) =>
      update((state) => {
        state[key] = !state[key];
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

export const settings = createStore(initialState, browser);
