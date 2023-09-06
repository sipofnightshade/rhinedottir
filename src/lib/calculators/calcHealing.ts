import type { Index_Stats } from '$lib/data/Stats';
import type { HitDMG } from '$lib/types/talents';

export function calcHealing(
  damage: HitDMG,
  $stats: Index_Stats,
  values: { [x: string]: number[] },
  talentLvl: number
) {
  const totalHealing = damage.reduce((total, stat) => {
    if (stat.coef) {
      return total + stat.coef * $stats[stat.scaling];
    }

    const result =
      stat.scaling === 'flatValue'
        ? values[stat.param][talentLvl]
        : values[stat.param][talentLvl] * $stats[stat.scaling];
    return total + result;
  }, 0);

  const flatHealing = $stats.flatHealing ?? 0;

  return (totalHealing + flatHealing) * (1 + $stats.healing + $stats.healingIncoming);
}
