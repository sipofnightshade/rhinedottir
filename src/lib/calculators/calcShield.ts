import type { All_Stats } from '$lib/data/Stats';
import type { HitDMG } from '$lib/types/talents';

export function calcShield(
  damage: HitDMG,
  $stats: Record<All_Stats, number>,
  values: { [x: string]: number[] },
  talentLvl: number
) {
  const totalShield = damage.reduce((total, stat) => {
    const result =
      stat.scaling === 'flatValue'
        ? values[stat.param][talentLvl]
        : values[stat.param][talentLvl] * $stats[stat.scaling];
    return total + result;
  }, 0);

  return totalShield * (1 + $stats.shieldStrength);
}
