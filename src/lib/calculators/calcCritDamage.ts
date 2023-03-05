export function calcCritDamage(
  damage: number,
  critRate: number,
  critDMG: number
) {
  const critDamage = damage * (1 + critDMG);
  const averageDamage = damage * (1 - critRate) + critDamage * critRate;
  return { critDamage, averageDamage };
}

/**
 * @EXAMPLE
 * console.log(calcCritDamage(1200,.52,1.4))
 * ▶ { averageDamage: 1449.6, critDamage: 1680 }
 */
