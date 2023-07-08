const baseCatalyzeBonus = {
  dendro: [
    21.46, 100.73, 100.73, 259.23, 259.23, 404.5, 404.5, 616.11, 616.11, 957.05, 957.05,
    1346.8, 1346.8, 1808.57
  ],
  electro: [
    19.74, 92.67, 92.67, 238.49, 238.49, 372.14, 372.14, 566.82, 566.82, 880.49, 880.49,
    1239.06, 1239.06, 1663.88
  ]
};

export function calcCatalyzeBonus(
  element: 'electro' | 'dendro',
  em: number,
  lvl: number,
  reactionBonus = 0
) {
  const EMBonus = (5 * em) / (em + 1200);
  // x100 can be appended at end here to turn it into percentage
  return baseCatalyzeBonus[element][lvl] * (1 + EMBonus + reactionBonus);
}

/**
 * @EXAMPLE
 * console.log(calcCatalyzeBonus("dendro",1000,13,0.15))
 * ▶ 6190.241863636364
 */
