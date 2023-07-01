import { writable } from 'svelte/store';
import type { Hit } from '$lib/types/talents';

type ComboRow = {
  title: string;
  hits: Hit[];
};

const initialState: ComboRow[] = [];

function createComboRow() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    addRow: (selected: any) =>
      update((state) => {
        return state;
      }),
    removeRow: (selected: any) =>
      update((state) => {
        return state;
      }),
    addHit: (rowIndex: number, hit: Hit) =>
      update((state) => {
        return state;
      }),
    removeHit: (rowIndex: number, hitIndex: number) =>
      update((state) => {
        return state;
      }),
    reset: () => set(initialState)
  };
}

export const combos = createComboRow();
