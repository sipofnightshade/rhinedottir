import type { Index_Stats } from '$lib/data/Stats';
import type { DamageType } from '$lib/types/global';
import type { Hit } from '$lib/types/talents';

export function calcDMGBonus(hit: Hit, $stats: Index_Stats, element: DamageType): number {
  let dmgBonus = 0;

  if (hit.damageBonus !== 'none') {
    dmgBonus += $stats[hit.damageBonus];
  }

  dmgBonus += $stats.dmgIncrease; // Mona, Serpents' Spine, bane mods etc

  if (hit.hasOwnDMGType) {
    dmgBonus += $stats[hit.hasOwnDMGType];
  } else {
    dmgBonus += $stats[element];
  }

  // if hit is not physical, then add allElemental dmg bonus
  if (hit.hasOwnDMGType !== 'physical') {
    dmgBonus += $stats.dmgIncreaseElemental;
  }

  // custom talent bonus dmg logic, ie: Alhaithm Passive etc.
  if (hit.hasOwnBonusDMG) {
    dmgBonus += $stats[hit.hasOwnBonusDMG] || 0;
  }

  return dmgBonus;
}
