import { derived } from 'svelte/store';
//  stores
import { character } from './characterStore';
import { stats } from './statsStore';

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
    // const characterName =
    //   $character.selected.name === "aether"
    //     ? `traveler${$character.selected.vision}`
    //     : $character.selected.name;
    const characterName = 'traveleranemo';
    const enemyLvl = 87;

    // enemy stats TODO - needs to get values from $stats
    const baseRes = 0.1;
    const bonusRes = 0;
    const DMGReduction = 0;

    // ✅ Normal Rows
    const normalRows = $character.selected.normal.map((hit) => {
      const values = TalentValues[characterName].combat1;
      const debuffRes = $stats[infusion + 'Res'];

      const SpecialMultiplier = 1 + $stats.normalSpecialMultiplier;

      const DMGBonus =
        (hit.elemental ? $stats[hit.elemental] : $stats[infusion]) +
        $stats[hit.damageBonus];

      const DEFMultiplier = calcDEFMultiplier(
        $character.lvl,
        enemyLvl,
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

    // ✅ Charged Rows
    const chargedRows = $character.selected.charged.map((hit) => {
      const values = TalentValues[characterName].combat1;
      const debuffRes = $stats[infusion + 'Res'];

      const SpecialMultiplier = 1 + $stats.chargedSpecialMultiplier;

      const DMGBonus =
        (hit.elemental ? $stats[hit.elemental] : $stats[infusion]) +
        $stats[hit.damageBonus];

      const DEFMultiplier = calcDEFMultiplier(
        $character.lvl,
        enemyLvl,
        $stats.defReduce,
        $stats.chargedDefIgnore
      );
      const RESMultiplier = calcRESMultiplier(baseRes, bonusRes, debuffRes);

      const FinalDMG = hit.damage.reduce((total, damage) => {
        const BaseDMG =
          $stats[damage.scaling] *
          values[damage.param as keyof typeof values][$character.atk];

        const calculatedDMG = calcDamageNoReaction(
          BaseDMG,
          SpecialMultiplier,
          $stats.chargedFlatDMG,
          DMGBonus,
          DMGReduction,
          DEFMultiplier,
          RESMultiplier
        );
        return total + calculatedDMG;
      }, 0);

      return { ...hit, damage: FinalDMG };
    });

    // ✅ Plunge Rows
    const plungeRows = $character.selected.plunge.map((hit) => {
      const values = TalentValues[characterName].combat1;
      const debuffRes = $stats[infusion + 'Res'];

      const SpecialMultiplier = 1 + $stats.plungeSpecialMultiplier;

      const DMGBonus =
        (hit.elemental ? $stats[hit.elemental] : $stats[infusion]) +
        $stats[hit.damageBonus];

      const DEFMultiplier = calcDEFMultiplier(
        $character.lvl,
        enemyLvl,
        $stats.defReduce,
        $stats.plungeDefIgnore
      );
      const RESMultiplier = calcRESMultiplier(baseRes, bonusRes, debuffRes);

      const FinalDMG = hit.damage.reduce((total, damage) => {
        const BaseDMG =
          $stats[damage.scaling] *
          values[damage.param as keyof typeof values][$character.atk];

        const calculatedDMG = calcDamageNoReaction(
          BaseDMG,
          SpecialMultiplier,
          $stats.plungeFlatDMG,
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
    const skillRows = $character.selected.skill.map((hit) => {
      const values = TalentValues[characterName].combat2;
      // uses character vison to index the appropriate element
      const debuffRes = $stats[$character.selected.vision + 'Res'];

      const SpecialMultiplier = 1 + $stats.skillSpecialMultiplier;

      const DMGBonus = $stats[$character.selected.vision] + $stats[hit.damageBonus];

      const DEFMultiplier = calcDEFMultiplier(
        $character.lvl,
        enemyLvl,
        $stats.defReduce,
        $stats.skillDefIgnore
      );
      const RESMultiplier = calcRESMultiplier(baseRes, bonusRes, debuffRes);

      const FinalDMG = hit.damage.reduce((total, damage) => {
        const BaseDMG =
          $stats[damage.scaling] *
          values[damage.param as keyof typeof values][$character.skill];

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
    const burstRows = $character.selected.burst.map((hit) => {
      const values = TalentValues[characterName].combat3;
      // uses character vison to index the appropriate element
      const debuffRes = $stats[$character.selected.vision + 'Res'];

      const SpecialMultiplier = 1 + $stats.burstSpecialMultiplier;

      const DMGBonus = $stats[$character.selected.vision] + $stats[hit.damageBonus];

      const DEFMultiplier = calcDEFMultiplier(
        $character.lvl,
        enemyLvl,
        $stats.defReduce,
        $stats.burstDefIgnore
      );
      const RESMultiplier = calcRESMultiplier(baseRes, bonusRes, debuffRes);

      const FinalDMG = hit.damage.reduce((total, damage) => {
        const BaseDMG =
          $stats[damage.scaling] *
          values[damage.param as keyof typeof values][$character.burst];

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
      chargedRows,
      plungeRows,
      skillRows,
      burstRows
    };
  });
}

export const talents = createTalents();
