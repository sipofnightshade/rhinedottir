import { ArtifactData } from '$lib/data/Artifacts';
import type { ActiveSets } from '$lib/stores/activeSetsStore';
import type { ArtifactState } from '$lib/stores/artifactStore';
import type { Action, ArtifactNames } from '$lib/types/artifacts';
import type { WeaponCategory } from '$lib/types/global';
import type { ALL_STATS } from '$lib/types/talents';

interface ResultObject {
  passives: Array<{
    scaling: ALL_STATS;
    coef: number | number[];
    source?: [ALL_STATS, number, number];
  }>;
  active: Action | object;
}

export function getArtifactSetBonuses(
  artifactStore: ArtifactState,
  weapon: WeaponCategory,
  allActiveSets: ActiveSets
) {
  const artifactNames = Object.values(artifactStore).map(
    (artifact) => artifact.selected.name
  );

  const artifactSetCount = artifactNames.reduce((count, name) => {
    if (name !== 'none') {
      count[name] = (count[name] || 0) + 1;
    }
    return count;
  }, {});

  const setBonuses: Action[] = [];
  let activeDetails: { name: ArtifactNames; fullName: string };

  for (const name in artifactSetCount) {
    const artifactData = ArtifactData.find((data) => data.name === name);
    if (!artifactData) continue;

    if (artifactSetCount[name] >= 2 && artifactData.twoPiece) {
      setBonuses.push(...artifactData.twoPiece);
    }

    const unique =
      Object.values(allActiveSets).includes(artifactData.name) &&
      artifactData.fourPiece[0].unique;

    /**
     * @todo
     * - Example: If main and party one have Noblesse Oblige sets,
     * only main's set will show. However, when removing main's set
     * or changing it, the party one Noblesse set active does not
     * appear.
     * - 💡 This makes me to believe that the party sets are not
     * updated the properly.
     */

    if (artifactSetCount[name] >= 4 && artifactData.fourPiece && !unique) {
      // checks to see if character weapon matches setBonus requirements
      const validFourPieceBonuses = artifactData.fourPiece.filter(
        (bonus) => !bonus.weapons || bonus.weapons.includes(weapon)
      );

      if (validFourPieceBonuses.length > 0) {
        setBonuses.push(...validFourPieceBonuses);
        // add the data in the above `push` one time
        activeDetails = { name: artifactData.name, fullName: artifactData.fullName };
      }
    }
  }

  // separate & combine all similar bonuses
  const separatedBonuses = setBonuses.reduce<ResultObject>(
    (result, bonus) => {
      if (bonus.actionType) {
        result.active = {
          name: activeDetails.fullName,
          url: activeDetails.name,
          lvl: 1,
          constellation: 0,
          ...bonus
        };
      } else {
        result.passives.push(...bonus.values);
      }
      return result;
    },
    { passives: [], active: {} }
  );

  return { ...separatedBonuses };
}
