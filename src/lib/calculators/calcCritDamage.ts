export function calcCritDamage(damage: number, critRate: number, critDMG: number) {
  critRate = Math.max(critRate, 0); // Set critRate to 0 if it is less than 0
  const critDamage = damage * (1 + critDMG);
  const averageDamage = damage * (1 - critRate) + critDamage * critRate;
  return averageDamage;
}

/**
 * @EXAMPLE
 * console.log(calcCritDamage(1200,.52,1.4))
 * ▶ averageDamage: 1449.6 }
 */
