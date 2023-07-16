/**
 * @deprecated
 * Use `calcTransforming` instead
 */

interface Params {
  em: number;
  lvl: number;
  reactionBonus?:
    | {
        [key: string]: number;
      }
    | undefined;
}
const baseTransformative = {
  burning: [
    4.29, 20.15, 20.15, 51.85, 51.85, 80.9, 80.9, 123.22, 123.22, 191.41, 191.41, 269.36,
    269.36, 361.71
  ],
  superconduct: [
    8.58, 40.29, 40.29, 103.69, 103.69, 161.8, 161.8, 246.44, 246.44, 382.82, 382.82,
    538.72, 538.72, 723.43
  ],
  swirl: [
    10.3, 48.35, 48.35, 124.43, 124.43, 194.16, 194.16, 295.73, 295.73, 459.38, 459.38,
    646.47, 646.47, 868.11
  ],
  electroCharged: [
    20.6, 96.7, 96.7, 248.9, 248.9, 388.3, 388.3, 591.5, 591.5, 918.8, 918.8, 1292.6,
    1292.6, 1736.2
  ],
  shattered: [
    25.75, 120.88, 120.88, 311.07, 311.07, 485.4, 485.4, 739.33, 739.33, 1148.46, 1148.46,
    1616.17, 1616.17, 2170.28
  ],
  overloaded: [
    34.33, 161.17, 161.17, 414.76, 414.76, 647.2, 647.2, 985.77, 985.77, 1531.28, 1531.28,
    2154.89, 2154.89, 2893.71
  ],
  bloom: [
    34.33, 161.17, 161.17, 414.76, 414.76, 647.2, 647.2, 985.77, 985.77, 1531.28, 1531.28,
    2154.89, 2154.89, 2893.71
  ],
  burgeon: [
    51.5, 241.75, 241.75, 622.15, 622.15, 970.8, 970.8, 1478.65, 1478.65, 2296.92,
    2296.92, 3232.33, 3232.33, 4340.56
  ],
  hyperbloom: [
    51.5, 241.75, 241.75, 622.15, 622.15, 970.8, 970.8, 1478.65, 1478.65, 2296.92,
    2296.92, 3232.33, 3232.33, 4340.56
  ],
  crystallize: [
    91, 304, 304, 585, 585, 787, 787, 1030, 1030, 1315, 1315, 1597, 1597, 1851
  ]
};

const reactions = [
  'burning',
  'superconduct',
  'swirl',
  'electroCharged',
  'shattered',
  'overloaded',
  'bloom',
  'burgeon',
  'hyperbloom',
  'crystallize'
];

export function calcTransformative({ em, lvl, reactionBonus }: Params) {
  const EMBonusTransformative = 16 * (em / (em + 2000));
  const EMBonusCrystallize = 4.44 * (em / (em + 1400));
  const reactionsDamage = reactions.map((reaction) => {
    let bonusValue = 0;
    let reactionDamage;
    if (reactionBonus && reactionBonus[reaction]) {
      bonusValue = reactionBonus[reaction];
      console.log(reactionBonus);
    } else {
      bonusValue = 0;
    }
    if (reaction === 'crystallize') {
      reactionDamage =
        baseTransformative[reaction][lvl] * (1 + EMBonusCrystallize + bonusValue);
    } else {
      reactionDamage =
        baseTransformative[reaction][lvl] * (1 + EMBonusTransformative + bonusValue);
    }

    return { [reaction]: reactionDamage };
  });
  return reactionsDamage;
}

/**
 * @EXAMPLE
 * console.log(calcTransformative(656, 13, { hyperbloom: 0.4 }));
 * ▶ [ { hyperbloom: 20906.9 },...]
 * console.log(calcTransformative(656, 13, { hyperbloom: 0.4,burgeon:0.4 }));
 * ▶ [ { hyperbloom: 20906.9 }, { burgeon: 20906.9 },...]
 * console.log(calcTransformative(656, 13));
 * ▶ [ { hyperbloom: 19344.3 }, { burgeon: 19344.3 },...]
 */
