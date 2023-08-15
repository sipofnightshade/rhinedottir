import { writable } from 'svelte/store';
import { allStats } from '$lib/data/Stats';
import type { Target } from '$lib/types/actions';

export type All_Stats = keyof typeof allStats;

const initialState = {
  main: { ...allStats },
  one: { ...allStats },
  two: { ...allStats },
  three: { ...allStats },
  enemy: { ...allStats }
};

export type ActionId = keyof typeof initialState;

function createAction() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    addStat: (id: ActionId, target: Target, scaling: All_Stats, coef: number) =>
      update((state) => {
        // if (!state[id][scaling]) {
        //   state[id][scaling] = 0;
        // }

        switch (target) {
          case 'self':
            state[id][scaling] += coef;
            break;
          case 'party':
            state.main[scaling] += coef;
            state.one[scaling] += coef;
            state.two[scaling] += coef;
            state.three[scaling] += coef;
            break;
          case 'enemy':
            state.enemy[scaling] += coef;
            break;
          case 'nearby':
            if (id !== 'main') state.main[scaling] += coef;
            if (id !== 'one') state.one[scaling] += coef;
            if (id !== 'two') state.two[scaling] += coef;
            if (id !== 'three') state.three[scaling] += coef;
            break;
        }
        return state;
      }),
    removeStat: (id: ActionId, target: Target, scaling: All_Stats, coef: number) =>
      update((state) => {
        switch (target) {
          case 'self':
            state[id][scaling] -= coef;
            break;
          case 'party':
            state.main[scaling] -= coef;
            state.one[scaling] -= coef;
            state.two[scaling] -= coef;
            state.three[scaling] -= coef;
            break;
          case 'enemy':
            state.enemy[scaling] -= coef;
            break;
          case 'nearby':
            if (id !== 'main') state.main[scaling] += coef;
            if (id !== 'one') state.one[scaling] += coef;
            if (id !== 'two') state.two[scaling] += coef;
            if (id !== 'three') state.three[scaling] += coef;
            break;
        }
        return state;
      }),
    reset: () => set(initialState)
  };
}

export const action = createAction();
