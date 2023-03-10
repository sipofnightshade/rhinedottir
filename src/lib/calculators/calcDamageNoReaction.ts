/**
 * @Description
 * This function does not include amplifying reactions.
 * In order to add such, do the following:
 * const AmplifyingMultiplier = 1.5;
 * const FinalDamage = calcDamage(...arguments ) * AmplifyingMultiplier;
 */

export function calcDamageNoReaction(
  baseDamage: number,
  specialMultiplier: number,
  flatDamageBonus: number,
  percentDamageBonus: number,
  damageReductionTarget: number,
  defenseMultiplierTarget: number,
  resistanceMultiplierTarget: number
): number {
  return (
    (baseDamage * specialMultiplier + flatDamageBonus) *
    (1 + percentDamageBonus - damageReductionTarget) *
    defenseMultiplierTarget *
    resistanceMultiplierTarget
  );
}
