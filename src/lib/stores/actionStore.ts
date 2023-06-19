import { writable } from 'svelte/store';
import type { ALL_STATS } from '$lib/types/talents';

const initialState = {
  atk: 0,
  def: 0,
  hp: 0,
  em: 0,
  critrate: 0,
  critdmg: 0,
  energy: 0,
  healing: 0,
  healingIncoming: 0,
  anemo: 0,
  cryo: 0,
  dendro: 0,
  electro: 0,
  geo: 0,
  hydro: 0,
  pyro: 0,
  anemoRes: 0,
  cryoRes: 0,
  dendroRes: 0,
  electroRes: 0,
  geoRes: 0,
  hydroRes: 0,
  pyroRes: 0,
  physical: 0,
  physicalRes: 0,
  normal: 0,
  charged: 0,
  plunge: 0,
  skill: 0,
  burst: 0,
  normalATKSpd: 0,
  chargedATKSpd: 0,
  normalSpecialMultiplier: 0,
  skillSpecialMultiplier: 0,
  burstSpecialMultiplier: 0,
  normalFlatDMG: 0,
  skillFlatDMG: 0,
  burstFlatDMG: 0,
  normalDefIgnore: 0,
  skillDefIgnore: 0,
  burstDefIgnore: 0,
  defReduce: 0,
  partyEnergy: 0,
  partyEM: 0
};

function createAction() {
  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    addStat: (scaling: ALL_STATS, coef: number) =>
      update((state) => {
        state[scaling] += coef;
        return state;
      }),
    removeStat: (scaling: ALL_STATS, coef: number) =>
      update((state) => {
        state[scaling] -= coef;
        return state;
      }),
    reset: () => set(initialState)
  };
}

export const action = createAction();
