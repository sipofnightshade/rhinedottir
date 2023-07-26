import { derived } from 'svelte/store';
import { action } from './actionStore';
import { calcRESMultiplier } from '$lib/calculators/calcRESMultiplier';

function createEnemy() {
  return derived([action], ([$action]) => {
    const enemyLvl = 87;
    const enemy = $action.enemy;

    const physical = calcRESMultiplier(0.1, 0, enemy.physicalRes);
    const anemo = calcRESMultiplier(0.1, 0, enemy.anemoRes);
    const geo = calcRESMultiplier(0.1, 0, enemy.geoRes);
    const dendro = calcRESMultiplier(0.1, 0, enemy.dendroRes);
    const cryo = calcRESMultiplier(0.1, 0, enemy.cryoRes);
    const electro = calcRESMultiplier(0.1, 0, enemy.electroRes);
    const hydro = calcRESMultiplier(0.1, 0, enemy.hydroRes);
    const pyro = calcRESMultiplier(0.1, 0, enemy.pyroRes);

    const dmgReduction = enemy.dmgReduction;

    return {
      lvl: enemyLvl,
      dmgReduction,
      physical,
      anemo,
      geo,
      dendro,
      cryo,
      electro,
      hydro,
      pyro
    };
  });
}

export const enemy = createEnemy();
