interface Reaction {
  name: string;
  multiplier: number;
}

interface Params {
  firstElement: string;
  secondElement: string;
  em: number;
  reactionBonus: number; // make sure this is decimal
}

const reactions: { [key: string]: Reaction } = {
  "hydro-pyro": { name: "vaporize", multiplier: 2.0 },
  "pyro-hydro": { name: "reverseVaporize", multiplier: 1.5 },
  "pyro-cryo": { name: "melt", multiplier: 2.0 },
  "cryo-pyro": { name: "reverseMelt", multiplier: 1.5 },
};

export function calcAmplifying({
  firstElement,
  secondElement,
  em,
  reactionBonus = 0,
}: Params) {
  const EMBonusAmplifying = 2.78 * (em / (em + 1400));

  const key = `${firstElement}-${secondElement}`;
  if (!reactions[key]) return;
  const reaction = reactions[key];
  return reaction.multiplier * (1 + EMBonusAmplifying + reactionBonus);
}

/**
 * @EXAMPLE
 * console.log(calcAmplifying("pyro","hydro",898,0));
 * ▶ 3.12953002610966
 * Which is a vaporize increase of 108.6%
 */
