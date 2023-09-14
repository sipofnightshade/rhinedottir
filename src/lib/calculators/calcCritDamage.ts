export function calcCritDamage(damage: number, critRate: number, critDMG: number) {
  critRate = Math.min(Math.max(critRate, 0), 1.0); // Ensure critRate is between 0 and 1.0

  const critDamage = damage * (1 + critDMG);
  const averageDamage = damage * (1 - critRate) + critDamage * critRate;

  return averageDamage;
}
