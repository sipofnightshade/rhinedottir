export function artifactStatFormatter(stat: string, value: number) {
  if (value === 0) return 0;

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

export function artifactStatFormatterX(stat: string, value: number) {
  if (value === 0) return 0;

  switch (stat) {
    case 'em':
      return value.toFixed(0);
    case 'atk':
    case 'hp':
      return value;

    default:
      return (value * 100).toFixed(0) + '%';
  }
}
