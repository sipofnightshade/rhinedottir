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
  resistanceMultiplierTarget: number,
  critRate: number,
  critDamageMultiplier: number
) {
  critRate = Math.max(critRate, 0); // Set critRate to 0 if it is less than 0

  const baseDamageWithBonuses =
    (baseDamage * specialMultiplier + flatDamageBonus) *
    (1 + percentDamageBonus - damageReductionTarget) *
    defenseMultiplierTarget *
    resistanceMultiplierTarget;

  const critHitDamage = baseDamageWithBonuses * (1 + critDamageMultiplier);
  const critDamage = baseDamageWithBonuses * (1 - critRate) + critHitDamage * critRate;

  return critDamage;
}
