import { ArtifactData } from '$lib/data/Artifacts';
import type { All_Stats } from '$lib/data/Stats';
import type { Action, ArtifactNames } from '$lib/types/artifacts';
import type { WeaponCategory } from '$lib/types/global';

interface ResultObject {
  passives: Array<{
    scaling: string;
    coef: number | number[];
    source?: [All_Stats, number, number];
  }>;
  active: Action | object;
}

export function getArtifactSetBonuses(
  setCount: Map<ArtifactNames, number>,
  weapon: WeaponCategory
) {
  const setBonuses: Action[] = [];
  let activeDetails: { name: ArtifactNames; fullName: string; url: string };

  setCount.forEach((count, name) => {
    // Skip irrelevant artifacts
    if (count < 2 || name === 'none') return;

    // Find the artifactData. Warn & Skip if not found
    const artifactData = ArtifactData.find((data) => data.name === name);
    if (!artifactData) {
      console.warn(`ArtifactData not found for artifact: ${name}`);
      return;
    }

    // ✅ Check for 2-piece set bonuses ---------------------//
    if (count >= 2 && artifactData.twoPiece) {
      setBonuses.push(...artifactData.twoPiece);
    }

    // ✅ Check for 4-piece set bonuses ---------------------//
    if (count >= 4 && artifactData.fourPiece) {
      // Filter valid 4-piece set bonuses based on the character's weapon
      const validFourPieceBonuses = artifactData.fourPiece.filter(
        (bonus) => !bonus.weapons || bonus.weapons.includes(weapon)
      );

      // If valid 4-piece set bonuses are found, add them to setBonuses and update activeDetails
      if (validFourPieceBonuses.length > 0) {
        setBonuses.push(...validFourPieceBonuses);
        // Consider updating activeDetails only if it's necessary for further use
        activeDetails = {
          name: artifactData.name,
          fullName: artifactData.fullName,
          url: artifactData.url
        };
      }
    }
  });

  // separate & combine all similar bonuses
  const separatedBonuses = setBonuses.reduce<ResultObject>(
    (result, bonus) => {
      if (bonus.actionType) {
        result.active = {
          name: activeDetails.fullName,
          url: activeDetails.url,
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
