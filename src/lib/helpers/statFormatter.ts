type stat =
  | 'atk%'
  | 'def%'
  | 'hp%'
  | 'em'
  | 'critrate'
  | 'critdmg'
  | 'physical'
  | 'energy';

export function statValueFormatter(stat: stat, value: number | undefined) {
  if (value === undefined) {
    return 0;
  }

  if (stat === 'em') {
    return value.toFixed(0);
  } else {
    return (value * 100).toFixed(1) + '%';
  }
}
