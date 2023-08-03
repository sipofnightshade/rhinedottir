/**
 * Combine the weapon and character stats.
 *
 * @param weapon - The weapon store data.
 * @param character - The character store data.
 * @param flatStats - The total flattened artifact store data.
 * @returns An array of combined stats.
 */

import type { CurrentCharacter } from '$lib/stores/characterStore';
import type { CurrentWeapon } from '$lib/stores/weaponStore';
import type { ArtifactStats } from '$lib/types/artifacts';

interface Stats {
  stat: ArtifactStats;
  value: number;
}

export function getCombinedStats(
  weapon: CurrentWeapon,
  character: CurrentCharacter,
  flatStats: Stats[]
) {
  let characterStat = {};
  const weaponStat = {
    stat: weapon.selected.specialized,
    value: weapon.stats?.specialized
  };

  switch (character.selected.specialized) {
    case 'critdmg':
      characterStat = {
        stat: 'critdmg',
        value: character.stats?.specialized && character.stats?.specialized - 0.5
      };
      break;

    case 'critrate':
      characterStat = {
        stat: 'critrate',
        value: character.stats?.specialized && character.stats?.specialized - 0.05
      };
      break;

    default:
      characterStat = {
        stat: character.selected.specialized,
        value: character.stats?.specialized
      };
      break;
  }

  return [...flatStats, characterStat, weaponStat];
}
