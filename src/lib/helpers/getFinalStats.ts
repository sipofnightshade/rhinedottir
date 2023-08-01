// types
import type { ArtifactState } from '$lib/stores/artifactStore';
import type { CurrentCharacter } from '$lib/stores/characterStore';
import type { CurrentWeapon } from '$lib/stores/weaponStore';
import type { ALL_STATS, StatObject } from '$lib/types/talents';

// helper functions
import { getCombinedStats } from './getCombinedStats';
import { getFlatStats } from './getFlatStats';
import { getTotalStats } from './getTotalStats';

type Actions = Record<ALL_STATS, number>;

export function getFinalStats(
  character: CurrentCharacter,
  weapon: CurrentWeapon,
  artifacts: ArtifactState,
  action: Actions
) {
  const baseATK = (character.stats?.attack ?? 0) + (weapon.stats?.attack ?? 0);
  const baseHP = character.stats?.hp ?? 0;
  const baseDEF = character.stats?.defense ?? 0;

  const flatStats = getFlatStats(artifacts);
  const combinedStats = getCombinedStats(weapon, character, flatStats);
  const totalStats = getTotalStats(combinedStats as StatObject, action);

  return {
    ...totalStats,
    baseATK,
    baseHP,
    baseDEF,
    hp: baseHP + totalStats.hp + baseHP * totalStats['hp%'],
    atk: baseATK + totalStats.atk + baseATK * totalStats['atk%'],
    def: baseDEF + totalStats.def + baseDEF * totalStats['def%'],
    critrate: 0.05 + totalStats.critrate,
    critdmg: 0.5 + totalStats.critdmg,
    energy: 1 + totalStats.energy
  };
}
