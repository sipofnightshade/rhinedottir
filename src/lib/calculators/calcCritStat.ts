import type { Index_Stats } from '$lib/data/Stats';
import type { DamageType } from '$lib/types/global';

export function calcCritStat(
  stats: Index_Stats,
  hasOwnCritValue: string | undefined,
  critId: 'critrate' | 'critdmg',
  addStatID: string,
  dmgType: DamageType
) {
  const baseValue = stats[critId] ?? 0;
  const talentValue = stats[addStatID] ?? 0;

  const dmgTypeValue =
    critId === 'critrate'
      ? stats[dmgType + 'CritRate'] ?? 0
      : stats[dmgType + 'CritDMG'] ?? 0;

  const customValue =
    hasOwnCritValue && stats[hasOwnCritValue] ? stats[hasOwnCritValue] : 0;

  const result = baseValue + talentValue + dmgTypeValue + customValue;

  return result;
}
