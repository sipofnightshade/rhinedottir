import { writable } from 'svelte/store';
import type { ALL_STATS } from '$lib/types/talents';
import type { Target } from '$lib/types/actions';

const allStats = {
  atk: 0,
  def: 0,
  hp: 0,
  'atk%': 0,
  'def%': 0,
  'hp%': 0,
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
  physical: 0,
  anemoRes: 0,
  cryoRes: 0,
  dendroRes: 0,
  electroRes: 0,
  geoRes: 0,
  hydroRes: 0,
  pyroRes: 0,
  physicalRes: 0,
  dmgIncrease: 0,
  dmgIncreaseElemental: 0,
  normal: 0,
  charged: 0,
  plunge: 0,
  skill: 0,
  burst: 0,
  normalATKSpd: 0,
  chargedATKSpd: 0,
  moveSpd: 0,
  normalSpecialMultiplier: 0,
  chargedSpecialMultiplier: 0,
  plungeSpecialMultiplier: 0,
  skillSpecialMultiplier: 0,
  burstSpecialMultiplier: 0,
  normalFlatDMG: 0,
  chargedFlatDMG: 0,
  plungeFlatDMG: 0,
  skillFlatDMG: 0,
  burstFlatDMG: 0,
  normalCritRate: 0,
  chargedCritRate: 0,
  plungeCritRate: 0,
  skillCritRate: 0,
  burstCritRate: 0,
  normalDefIgnore: 0,
  chargedDefIgnore: 0,
  plungeDefIgnore: 0,
  skillDefIgnore: 0,
  burstDefIgnore: 0,
  defReduce: 0,
  dmgReduction: 0, // https://genshin-impact.fandom.com/wiki/DMG_Reduction
  // party stats
  partyBurstCost: 0,
  partyMaxEM: 0,
  // reaction bonuses
  aggravate: 0,
  spread: 0,
  melt: 0,
  vaporize: 0,
  burning: 0,
  superconduct: 0,
  swirl: 0,
  electrocharged: 0,
  shattered: 0,
  overloaded: 0,
  bloom: 0,
  burgeon: 0,
  hyperbloom: 0,
  crystallize: 0,
  shieldStrength: 0
};

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
    addStat: (id: ActionId, target: Target, scaling: ALL_STATS, coef: number) =>
      update((state) => {
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
            state.one[scaling] += coef;
            state.two[scaling] += coef;
            state.three[scaling] += coef;
            break;
        }
        return state;
      }),
    removeStat: (id: ActionId, target: Target, scaling: ALL_STATS, coef: number) =>
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
            state.one[scaling] -= coef;
            state.two[scaling] -= coef;
            state.three[scaling] -= coef;
            break;
        }
        return state;
      }),
    reset: () => set(initialState)
  };
}

export const action = createAction();
