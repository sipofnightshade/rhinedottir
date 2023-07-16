import { writable } from 'svelte/store';

type ScalingKey = keyof typeof initialState;

const initialState = {
  atk: 17128,
  def: 950,
  hp: 219187,
  lvl: 90,
  anemoRes: 1.3,
  cryoRes: 1.1,
  dendroRes: 1.1,
  electroRes: 1.1,
  geoRes: 1.1,
  hydroRes: 1.1,
  pyroRes: 1.1,
  physicalRes: 1.1
};

function createEnemy() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    addStat: (scaling: ScalingKey, coef: number) =>
      update((state) => {
        state[scaling] += coef;
        return state;
      }),
    removeStat: (scaling: ScalingKey, coef: number) =>
      update((state) => {
        state[scaling] -= coef;
        return state;
      }),
    reset: () => set(initialState)
  };
}

export const enemy = createEnemy();
