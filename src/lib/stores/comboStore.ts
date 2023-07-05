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
    addRow: () =>
      update((state) => {
        const newRow: ComboRow = {
          title: 'New Row',
          hits: []
        };
        return [...state, newRow];
      }),
    removeRow: (rowIndex: number) =>
      update((state) => {
        const newState = [...state];
        newState.splice(rowIndex, 1);
        return newState;
        // state.splice(rowIndex, 1);
        // return state;
      }),
    addRowButton: (rowIndex: number, hit: Hit) =>
      update((state) => {
        const newState = [...state];
        newState[rowIndex].hits.push(hit);
        return newState;
      }),
    removeRowButton: (rowIndex: number, hitIndex: number) =>
      update((state) => {
        const newState = [...state];
        newState[rowIndex].hits.splice(hitIndex, 1);
        return newState;
      }),
    reset: () => set(initialState)
  };
}

export const combos = createComboRow();
