export function calcAmplifying(
  element: 'pyro' | 'hydro' | 'cryo',
  em: number,
  reactionBonus = 0
) {
  const EMBonusAmplifying = 2.78 * (em / (em + 1400));

  switch (element) {
    case 'hydro':
      return [
        {
          name: 'vaporize',
          coef: 2 * (1 + EMBonusAmplifying + reactionBonus)
        }
      ];
    case 'cryo':
      return [
        {
          name: 'reverseMelt',
          coef: 1.5 * (1 + EMBonusAmplifying + reactionBonus)
        }
      ];
    case 'pyro':
      return [
        {
          name: 'melt',
          coef: 2 * (1 + EMBonusAmplifying + reactionBonus)
        },
        {
          name: 'reverseVaporize', // reverseMelt
          coef: 1.5 * (1 + EMBonusAmplifying + reactionBonus)
        }
      ];
  }
}
