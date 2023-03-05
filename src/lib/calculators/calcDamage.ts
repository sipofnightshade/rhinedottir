export function calcDamage(
  baseDamage: number,
  specialMultiplier: number,
  flatDamageBonus: number,
  percentDamageBonus: number,
  damageReductionTarget: number,
  defenseMultiplierTarget: number,
  resistanceMultiplierTarget: number,
  amplifyingMultiplier: number
): number {
  return (
    (baseDamage * specialMultiplier + flatDamageBonus) *
    (1 + percentDamageBonus - damageReductionTarget) *
    defenseMultiplierTarget *
    resistanceMultiplierTarget *
    amplifyingMultiplier
  );
}

/**
 * @Description -- Calculate sFinal Damage
 * ▶ Returns a single number
 */
