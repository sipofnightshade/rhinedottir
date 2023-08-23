// types
import type { All_Stats } from '$lib/data/Stats';
import type { ArtifactState } from '$lib/stores/artifactStore';
import type { CurrentCharacter } from '$lib/stores/characterStore';
import type { CurrentWeapon } from '$lib/stores/weaponStore';
import type { StatObject } from '$lib/types/talents';

// helper functions
import { getCombinedStats } from './getCombinedStats';
import { getFlatStats } from './getFlatStats';
import { getStatsWithActions } from './getStatsWithActions';
import { getTotalStats } from './getTotalStats';

type Actions = Record<All_Stats, number>;

export function getFinalStats(
  character: CurrentCharacter,
  weapon: CurrentWeapon,
  artifacts: ArtifactState,
  action: Partial<Actions>
) {
  const baseATK = (character.stats?.attack ?? 0) + (weapon.stats?.attack ?? 0);
  const baseHP = character.stats?.hp ?? 0;
  const baseDEF = character.stats?.defense ?? 0;

  const flatStats = getFlatStats(artifacts);
  const combinedStats = getCombinedStats(weapon, character, flatStats);
  const totalStats = getTotalStats(
    combinedStats as StatObject,
    character.additionalStats
  );
  const result = getStatsWithActions(totalStats, action);

  return {
    ...result,
    baseATK,
    baseHP,
    baseDEF,
    hp: baseHP + result.hp + baseHP * result['hp%'],
    atk: baseATK + result.atk + baseATK * result['atk%'],
    def: baseDEF + result.def + baseDEF * result['def%'],
    critrate: 0.05 + result.critrate,
    critdmg: 0.5 + result.critdmg,
    energy: 1 + result.energy
  };
}
