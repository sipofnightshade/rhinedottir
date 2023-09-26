import type { Visions } from '$lib/types/global';
import type { Hit } from '$lib/types/talents';
import { writable } from 'svelte/store';

export type TalentRowID =
  | 'normalRows'
  | 'chargedRows'
  | 'plungeRows'
  | 'skillRows'
  | 'burstRows';

export type ButtonDamage =
  | 'base'
  | 'superconduct'
  | 'pyroSwirl'
  | 'hydroSwirl'
  | 'cryoSwirl'
  | 'electroSwirl'
  | 'electrocharged'
  | 'overloaded'
  | 'melt'
  | 'vaporize'
  | 'aggravate'
  | 'spread';

export type Damage = Hit & {
  damage: Record<ButtonDamage, number>;
  dmgId?: ButtonDamage;
  elemental: Visions;
};

type ComboRow = {
  title: string;
  hits: Damage[];
  totalDamage: number;
};

const initialState: ComboRow[] = [];

function createComboRow() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    set,
    addRow: () =>
      update((state) => {
        state.push({ title: 'New Row', hits: [], totalDamage: 0 });
        return state;
      }),
    removeRow: (rowIndex: number) =>
      update((state) => {
        state.splice(rowIndex, 1);
        return state;
      }),
    addRowButton: (rowIndex: number, talent: any) =>
      update((state) => {
        state[rowIndex].hits.push({ ...talent, dmgId: 'base' });
        state[rowIndex].totalDamage += talent.damage.base;
        return state;
      }),
    removeRowButton: (rowIndex: number, hitIndex: number, dmgId: ButtonDamage) =>
      update((state) => {
        // save removed hit value (it's an array so [0] is used to index it immediately)
        const removedHit = state[rowIndex].hits.splice(hitIndex, 1)[0];
        state[rowIndex].totalDamage -= removedHit.damage[dmgId];
        return state;
      }),
    changeBtnReaction: (rowIndex: number, rowBtnIndex: number, dmgId: ButtonDamage) =>
      update((state) => {
        state[rowIndex].hits[rowBtnIndex].dmgId = dmgId;
        state[rowIndex].totalDamage = state[rowIndex].hits.reduce(
          (acc, { damage, dmgId }) => {
            const id = dmgId ? dmgId : 'base';
            return acc + damage[id];
          },
          0
        );
        return state;
      }),
    reset: () => set([])
  };
}

export const combos = createComboRow();
