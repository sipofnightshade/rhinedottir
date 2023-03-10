import { derived } from 'svelte/store';
//  stores
import { character } from './characterStore';
import { stats } from './statsStore';

// talent data
import { Talents } from '$lib/data/Talents';

// types
import TalentValues from '$lib/data/TalentValues.json';

// calculators & helpers
import { calcDEFMultiplier } from '$lib/calculators/calcDEFMultiplier';
import { calcRESMultiplier } from '$lib/calculators/calcRESMultiplier';
import { calcDamageNoReaction } from '$lib/calculators/calcDamageNoReaction';

// default infusion should be physical. replace this with infusion store
const infusion = 'physical';

function createTalents() {
  return derived([character, stats], ([$character, $stats]) => {
    // const cName =
    //   $character.selected.name === "aether"
    //     ? `traveler${$character.selected.vision}`
    //     : $character.selected.name;
    const cName = 'traveleranemo';
    const eLvl = 87;

    // enemy stats TODO - needs to get values from $stats
    const baseRes = 0.1;
    const bonusRes = 0;
    const DMGReduction = 0;

    // ✅ Normal Rows
    const normalRows = Talents[cName].normal.hits.map((hit) => {
      const values = TalentValues[cName].combat1;
      const debuffRes = $stats[infusion + 'Res'];

      const SpecialMultiplier = 1 + $stats.normalSpecialMultiplier;

      const DMGBonus =
        (hit.elemental ? $stats[hit.elemental] : $stats[infusion]) +
        $stats[hit.damageBonus];

      const DEFMultiplier = calcDEFMultiplier(
        $character.lvl,
        eLvl,
        $stats.defReduce,
        $stats.normalDefIgnore
      );
      const RESMultiplier = calcRESMultiplier(baseRes, bonusRes, debuffRes);

      const FinalDMG = hit.damage.reduce((total, damage) => {
        const BaseDMG =
          $stats[damage.scaling] *
          values[damage.param as keyof typeof values][$character.atk];

        const calculatedDMG = calcDamageNoReaction(
          BaseDMG,
          SpecialMultiplier,
          $stats.normalFlatDMG,
          DMGBonus,
          DMGReduction,
          DEFMultiplier,
          RESMultiplier
        );
        return total + calculatedDMG;
      }, 0);

      return { ...hit, damage: FinalDMG };
    });

    // ✅ Skill Rows
    const skillRows = Talents[cName].skill.hits.map((hit) => {
      const values = TalentValues[cName].combat2;
      // uses character vison to index the appropriate element
      const debuffRes = $stats[$character.selected.vision + 'Res'];

      const SpecialMultiplier = 1 + $stats.skillSpecialMultiplier;

      const DMGBonus = $stats[$character.selected.vision] + $stats[hit.damageBonus];

      const DEFMultiplier = calcDEFMultiplier(
        $character.lvl,
        eLvl,
        $stats.defReduce,
        $stats.skillDefIgnore
      );
      const RESMultiplier = calcRESMultiplier(baseRes, bonusRes, debuffRes);

      const FinalDMG = hit.damage.reduce((total, damage) => {
        const BaseDMG =
          $stats[damage.scaling] *
          values[damage.param as keyof typeof values][$character.atk];

        const calculatedDMG = calcDamageNoReaction(
          BaseDMG,
          SpecialMultiplier,
          $stats.skillFlatDMG,
          DMGBonus,
          DMGReduction,
          DEFMultiplier,
          RESMultiplier
        );
        return total + calculatedDMG;
      }, 0);

      return { ...hit, damage: FinalDMG };
    });

    // ✅ Burst Rows
    const burstRows = Talents[cName].burst.hits.map((hit) => {
      const values = TalentValues[cName].combat3;
      // uses character vison to index the appropriate element
      const debuffRes = $stats[$character.selected.vision + 'Res'];

      const SpecialMultiplier = 1 + $stats.burstSpecialMultiplier;

      const DMGBonus = $stats[$character.selected.vision] + $stats[hit.damageBonus];

      const DEFMultiplier = calcDEFMultiplier(
        $character.lvl,
        eLvl,
        $stats.defReduce,
        $stats.burstDefIgnore
      );
      const RESMultiplier = calcRESMultiplier(baseRes, bonusRes, debuffRes);

      const FinalDMG = hit.damage.reduce((total, damage) => {
        const BaseDMG =
          $stats[damage.scaling] *
          values[damage.param as keyof typeof values][$character.atk];

        const calculatedDMG = calcDamageNoReaction(
          BaseDMG,
          SpecialMultiplier,
          $stats.burstFlatDMG,
          DMGBonus,
          DMGReduction,
          DEFMultiplier,
          RESMultiplier
        );
        return total + calculatedDMG;
      }, 0);

      return { ...hit, damage: FinalDMG };
    });

    return {
      normalRows,
      skillRows,
      burstRows,
      normalName: Talents[cName].normal.name,
      skillName: Talents[cName].skill.name,
      burstName: Talents[cName].burst.name
    };
  });
}

export const talents = createTalents();
