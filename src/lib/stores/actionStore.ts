import { writable } from 'svelte/store';
import type { Target } from '$lib/types/actions';

type StatProperty = {
  [key: string]: number;
};

interface State {
  main: StatProperty;
  one: StatProperty;
  two: StatProperty;
  three: StatProperty;
  enemy: StatProperty;
}

const initialState: State = {
  main: {},
  one: {},
  two: {},
  three: {},
  enemy: {
    anemoRes: 0,
    cryoRes: 0,
    dendroRes: 0,
    electroRes: 0,
    geoRes: 0,
    hydroRes: 0,
    pyroRes: 0,
    physicalRes: 0,
    dmgReduction: 0,
    defReduce: 0
  }
};

const idList = ['main', 'one', 'two', 'three'];
const isValidNumber = (value: number) => !isNaN(value) && isFinite(value);

export type ActionId = keyof typeof initialState;

function createAction() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    addStat: (id: ActionId, target: Target, scaling: string, coef: number) =>
      update((state) => {
        // if (Number.isNaN(coef)) {
        //   console.log(`%cadd to ${target} | ${scaling} ${coef}`, 'color: #34eb46');
        // }

        const addStatValue = (id: ActionId, scaling: string, value: number) => {
          if (!state[id][scaling]) state[id][scaling] = 0;
          const newValue = state[id][scaling] + value;
          state[id][scaling] = isValidNumber(newValue) ? newValue : 0;
        };

        switch (target) {
          case 'self':
            addStatValue(id, scaling, coef);
            break;
          case 'active':
            addStatValue('main', scaling, coef);
            break;
          case 'notactive':
            if (id !== 'main') addStatValue(id, scaling, coef);
            break;
          case 'party':
            addStatValue('main', scaling, coef);
            addStatValue('one', scaling, coef);
            addStatValue('two', scaling, coef);
            addStatValue('three', scaling, coef);
            break;
          case 'enemy':
            addStatValue('enemy', scaling, coef);
            break;
          case 'nearby':
            for (const nearbyId of idList) {
              if (id !== nearbyId && id !== 'enemy') {
                addStatValue(nearbyId as keyof typeof initialState, scaling, coef);
              }
            }
            break;
          case 'halfnearby':
            for (const nearbyId of idList) {
              if (id !== nearbyId && id !== 'enemy') {
                addStatValue(nearbyId as keyof typeof initialState, scaling, coef / 2);
              } else if (id === nearbyId) {
                addStatValue(id, scaling, coef);
              }
            }
            break;
          case 'thirdnearby':
            for (const nearbyId of idList) {
              if (id !== nearbyId && id !== 'enemy') {
                addStatValue(nearbyId as keyof typeof initialState, scaling, coef * 0.3);
              } else if (id === nearbyId) {
                addStatValue(id, scaling, coef);
              }
            }
            break;
        }

        console.log('current', scaling, ':', state[id][scaling]);

        return state;
      }),
    removeStat: (id: ActionId, target: Target, scaling: string, coef: number) =>
      update((state) => {
        // if (Number.isNaN(coef)) {
        //   console.log(`%crm from ${target} | ${scaling} ${coef}`, 'color: #eb3455');
        // }

        const removeStatValue = (id: ActionId, scaling: string, value: number) => {
          if (state[id][scaling]) {
            const newValue = state[id][scaling] - value;
            state[id][scaling] = isValidNumber(newValue) ? newValue : 0;
          }
        };

        switch (target) {
          case 'self':
            removeStatValue(id, scaling, coef);
            break;
          case 'active':
            removeStatValue('main', scaling, coef);
            break;
          case 'notactive':
            if (id !== 'main') removeStatValue(id, scaling, coef);
            break;
          case 'party':
            removeStatValue('main', scaling, coef);
            removeStatValue('one', scaling, coef);
            removeStatValue('two', scaling, coef);
            removeStatValue('three', scaling, coef);
            break;
          case 'enemy':
            removeStatValue('enemy', scaling, coef);
            break;
          case 'nearby':
            for (const nearbyId of idList) {
              if (id !== nearbyId && nearbyId !== 'enemy') {
                removeStatValue(nearbyId as keyof typeof initialState, scaling, coef);
              }
            }
            break;
          case 'halfnearby':
            for (const nearbyId of idList) {
              if (id !== nearbyId && nearbyId !== 'enemy') {
                removeStatValue(nearbyId as keyof typeof initialState, scaling, coef / 2);
              } else if (id === nearbyId) {
                removeStatValue(id, scaling, coef);
              }
            }
            break;
          case 'thirdnearby':
            for (const nearbyId of idList) {
              if (id !== nearbyId && nearbyId !== 'enemy') {
                removeStatValue(
                  nearbyId as keyof typeof initialState,
                  scaling,
                  coef * 0.3
                );
              } else if (id === nearbyId) {
                removeStatValue(id, scaling, coef);
              }
            }
            break;
        }
        console.log('current', scaling, ':', state[id][scaling]);

        return state;
      }),
    reset: (id: ActionId) =>
      update((state) => {
        state[id] = {};
        return state;
      }),
    resetAll: () => set({ ...initialState })
  };
}

export const action = createAction();
