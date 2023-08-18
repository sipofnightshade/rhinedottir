export function getCombatValue(type: string) {
  switch (type) {
    case 'skill':
      return 'combat2';
    case 'burst':
      return 'combat3';
    default:
      return 'combat1';
  }
}
