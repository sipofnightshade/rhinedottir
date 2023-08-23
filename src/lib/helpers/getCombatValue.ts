export function getCombatValue(type: string): 'combat1' | 'combat2' | 'combat3' {
  switch (type) {
    case 'skill':
      return 'combat2';
    case 'burst':
      return 'combat3';
    default:
      return 'combat1';
  }
}
