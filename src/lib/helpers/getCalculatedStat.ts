// ❗❗❗❗ Make sure to add all new stats here or they won't be calculated
export const getCalculatedStat = (
  base: { atk: number; hp: number; def: number },
  stat: string,
  value: number
) => {
  switch (stat) {
    case 'hp%':
      return base.hp * (value / 100);
    case 'atk%':
      return base.atk * (value / 100);
    case 'def%':
      return base.def * (value / 100);
    case 'hp':
    case 'atk':
    case 'physical':
    case 'anemo':
    case 'cryo':
    case 'dendro':
    case 'electro':
    case 'geo':
    case 'hydro':
    case 'pyro':
    case 'em':
    case 'energy':
    case 'critrate':
    case 'critdmg':
    case 'healing':
      return value;
    default:
      return 0;
  }
};
