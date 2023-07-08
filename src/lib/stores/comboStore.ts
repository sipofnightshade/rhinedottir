import { writable } from 'svelte/store';
import type { Hit } from '$lib/types/talents';

export type TalentRowID =
  | 'normalRows'
  | 'chargedRows'
  | 'plungeRows'
  | 'skillRows'
  | 'burstRows';

type ComboRow = {
  title: string;
  hits: {
    talent: TalentRowID;
    btnIndex: number;
  }[];
};

const initialState: ComboRow[] = [];

function createComboRow() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    set,
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
        state.splice(rowIndex, 1);
        return state;
      }),
    addRowButton: (rowIndex: number, talent: TalentRowID, btnIndex: number) =>
      update((state) => {
        state[rowIndex].hits.push({ talent, btnIndex });
        return state;
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
