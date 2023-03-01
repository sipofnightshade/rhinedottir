export function artifactStatFormatter(stat: string, value: number) {
  if (value === 0) {
    return '';
  }

  switch (stat) {
    case 'em':
      return value.toFixed(0);
    case 'atk':
    case 'hp':
      return value;

    default:
      return value.toFixed(1) + '%';
  }
}
