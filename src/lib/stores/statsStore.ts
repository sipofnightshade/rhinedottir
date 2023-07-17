import { derived } from 'svelte/store';
import { character } from './characterStore';
import { weapon } from './weaponStore';
import { artifact } from './artifactStore';
import { action } from './actionStore';
import { getTotalStats } from '$lib/helpers/getTotalStats';
import { getFlatStats } from '$lib/helpers/getFlatStats';
import { getCombinedStats } from '$lib/helpers/getCombinedStats';
import type { StatObject } from '$lib/types/talents';

function createStats() {
  return derived(
    [character, weapon, artifact, action],
    ([$character, $weapon, $artifacts, $action]) => {
      // initialize base stats
      const BASE = {
        atk: ($character.stats?.attack ?? 0) + ($weapon.stats?.attack ?? 0),
        hp: $character.stats?.hp ?? 0,
        def: $character.stats?.defense ?? 0
      };

      const flatStats = getFlatStats($artifacts);
      const combinedStats = getCombinedStats($weapon, $character, flatStats);
      const totalStats = getTotalStats(BASE, combinedStats as StatObject, $action.main);

      /**
       * @todo
       * 2. Total up main stats and party stats then
       *    return those as separate properties.
       * eg;
       * 
       * const selected = {
        ...totalStats,
        baseATK: BASE.atk,
        baseHP: BASE.hp,
        baseDEF: BASE.def,
        hp: BASE.hp + totalStats.hp,
        atk: BASE.atk + totalStats.atk,
        def: BASE.def + totalStats.def,
        critrate: 0.05 + totalStats.critrate,
        critdmg: 0.5 + totalStats.critdmg,
        energy: 1 + totalStats.energy
        }

        return {selected, p1, p2, p3}
       */

      return {
        ...totalStats,
        baseATK: BASE.atk,
        baseHP: BASE.hp,
        baseDEF: BASE.def,
        hp: BASE.hp + totalStats.hp,
        atk: BASE.atk + totalStats.atk,
        def: BASE.def + totalStats.def,
        critrate: 0.05 + totalStats.critrate,
        critdmg: 0.5 + totalStats.critdmg,
        energy: 1 + totalStats.energy
      };
    }
  );
}

export const stats = createStats();
