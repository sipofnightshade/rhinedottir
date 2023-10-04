import type { SelectedWeapon } from '$lib/types/global';

export function generateWeaponEffect(
  weapon: SelectedWeapon,
  refinementLevel: number
): string {
  const { effect, ref } = weapon;

  if (refinementLevel >= 0 && refinementLevel < ref.length) {
    const placeholders = ref[refinementLevel];
    return effect.replace(/\{\d\}/g, (match) => placeholders[Number(match[1])]);
  } else {
    return 'Invalid refinement level';
  }
}
