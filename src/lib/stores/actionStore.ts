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

const idList = ['main', 'one', 'two', 'three'];

export type ActionId = keyof typeof initialState;

function createAction() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    addStat: (id: ActionId, target: Target, scaling: All_Stats, coef: number) =>
      update((state) => {
        switch (target) {
          case 'self':
            state[id][scaling] += coef;
            break;
          case 'active':
            state.main[scaling] += coef;
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
            for (const nearbyId of idList) {
              if (id !== nearbyId) {
                state[nearbyId as keyof typeof initialState][scaling] += coef;
              }
            }
            break;
          case 'halfnearby':
            for (const nearbyId of idList) {
              if (id !== nearbyId) {
                state[nearbyId as keyof typeof initialState][scaling] += coef / 2;
              } else {
                state[id][scaling] += coef;
              }
            }
            break;
          case 'thirdnearby':
            for (const nearbyId of idList) {
              if (id !== nearbyId) {
                state[nearbyId as keyof typeof initialState][scaling] += coef / 3;
              } else {
                state[id][scaling] += coef;
              }
            }
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
          case 'active':
            state.main[scaling] -= coef;
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
            for (const nearbyId of idList) {
              if (id !== nearbyId) {
                state[nearbyId as keyof typeof initialState][scaling] -= coef;
              }
            }
            break;
          case 'halfnearby':
            for (const nearbyId of idList) {
              if (id !== nearbyId) {
                state[nearbyId as keyof typeof initialState][scaling] -= coef / 2;
              } else {
                state[id][scaling] -= coef;
              }
            }
            break;
          case 'thirdnearby':
            for (const nearbyId of idList) {
              if (id !== nearbyId) {
                state[nearbyId as keyof typeof initialState][scaling] -= coef / 3;
              } else {
                state[id][scaling] -= coef;
              }
            }
            break;
        }
        return state;
      }),
    reset: () => set(initialState)
  };
}

export const action = createAction();
