import TalentValues from '$lib/data/TalentValues.json';

type Names = keyof typeof TalentValues;

export function getCoefficientFromValues(
  combatValue: 'combat1' | 'combat2' | 'combat3',
  cname: Names,
  paramID: any,
  lvl: number
) {
  const coef = TalentValues[cname][combatValue][paramID][lvl];
  console.log('getCoefficientFromValues:', coef);
  return coef;
}
