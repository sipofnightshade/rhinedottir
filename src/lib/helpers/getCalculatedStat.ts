export const getCalculatedStat = (
  base: { atk: number; hp: number; def: number },
  stat: string,
  value: number
) => {
  switch (stat) {
    case 'hp%':
      return base.hp * value;
    case 'atk%':
      return base.atk * value;
    case 'def%':
      return base.def * value;
    default:
      return value;
  }
};
