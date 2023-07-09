export function calcAmplifying(multiplier: number, em: number, reactionBonus: number) {
  const EMBonusAmplifying = 2.78 * (em / (em + 1400));

  return multiplier * (1 + EMBonusAmplifying + reactionBonus);
}

/**
 * @example
 * calcAmplifying(2,898,0);
 * ▶ 5.5604
 */
