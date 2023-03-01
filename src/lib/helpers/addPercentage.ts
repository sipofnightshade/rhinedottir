export function addPercentage(stat: string, value: number) {
  if (value === 0) {
    return '';
  }

  switch (stat) {
    case 'em':
    case 'atk':
    case 'hp':
      return '';

    default:
      return '%';
  }
}
