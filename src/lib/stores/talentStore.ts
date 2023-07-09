import { derived } from 'svelte/store';
//  stores
import { character } from './characterStore';
import { stats } from './statsStore';

// types
import TalentValues from '$lib/data/TalentValues.json';
import type { Hit } from '$lib/types/talents';
import type { DamageType } from '$lib/types/global';

// calculators & helpers
import { calcDEFMultiplier } from '$lib/calculators/calcDEFMultiplier';
import { calcRESMultiplier } from '$lib/calculators/calcRESMultiplier';
import { calcDamageNoReaction } from '$lib/calculators/calcDamageNoReaction';
import { calcCatalyzeBonus } from '$lib/calculators/calcCatalyzeBonus';

// default infusion should be physical. replace this with infusion store
const infusion = 'physical';

function createTalents() {
  return derived([character, stats], ([$character, $stats]) => {
    // create traveler name indexes
    const characterName =
      $character.selected.name === 'aether'
        ? `traveler${$character.selected.vision}`
        : $character.selected.name;

    // enemy stats
    // TODO - need to get values from $stats
    const enemyLvl = 87;
    const baseRes = 0.1;
    const bonusRes = 0;
    const DMGReduction = 0;

    function calculateFinalDMG(
      hit: Hit,
      values: any,
      element: DamageType,
      specX: string,
      defIgnore: string,
      talentLvl: 'atk' | 'skill' | 'burst',
      flatDmg: string
    ) {
      const debuffRes = $stats[element + 'Res'];
      const SpecialMultiplier = 1 + $stats[specX];
      const DEFMultiplier = calcDEFMultiplier(
        $character.lvl,
        enemyLvl,
        $stats.defReduce,
        $stats[defIgnore]
      );
      const RESMultiplier = calcRESMultiplier(baseRes, bonusRes, debuffRes);
      const DMGBonus =
        (hit.elemental ? $stats[hit.elemental] : $stats[element]) +
        $stats[hit.damageBonus];

      // 💥 check if catalyze & calculate the bonus flatDMG
      // ❗❗❗❗❗❗❗ This should be taken out of the function so it doesnt run for every hit
      const catalyze = {
        electro: 'aggravate',
        dendro: 'spread'
      };
      const catalyzeFlatDMG =
        element === 'dendro' || element === 'electro'
          ? $stats[flatDmg] +
            calcCatalyzeBonus(
              element,
              $stats.em,
              $character.lvl,
              $stats[catalyze[element]]
            )
          : 0;

      // 💥 check if amplifying

      const FinalDMG = hit.damage.reduce((total: any, damage) => {
        const BaseDMG =
          $stats[damage.scaling] *
          values[damage.param as keyof typeof values][$character[talentLvl]];

        const calculatedDMG = calcDamageNoReaction(
          BaseDMG,
          SpecialMultiplier,
          $stats[flatDmg],
          DMGBonus,
          DMGReduction,
          DEFMultiplier,
          RESMultiplier
        );

        // the base damage with NO REACTIONS
        // total.base += calculatedDMG;

        // if (element === 'dendro') {
        //   total.spread += 0; // do another calculatedDMG() and add bonus to flatDMG
        // }

        // if (element === 'electro') {
        //   total.aggravate += 0; // do another calculatedDMG() and add bonus to flatDMG
        // }

        // if (element === 'pyro') {
        //   total.vaporize += 0; // calcAmplifying(1.5,$stats.em,$stats.vaporize) * calculatedDMG | ✅ calcAmplifying(coef,em,rxnBonus)
        //   total.melt += 0; // calcAmplifying(2,$stats.em,$stats.melt) * calculatedDMG
        // }

        // if (element === 'cryo') {
        //   total.melt += 0; // calcAmplifying(1.5,$stats.em,$stats.melt) * calculatedDMG
        // }

        // if (element === 'hydro') {
        //   total.vaporize += 0; // calcAmplifying(2,$stats.em,$stats.vaporize) * calculatedDMG
        // }

        // // 💥💥💥 This will help understand with structuring the results.
        // function calculateTotalDamage(hits, icd) {
        //   return hits.reduce(
        //     (result, hit, index) => {
        //       const isCrit = index % (icd + 1) === 0; // Check if it's a crit hit based on ICD
        //       const damage = isCrit ? hit * 2 : hit; // Apply crit damage multiplier if it's a crit hit

        //       result.totalDamage += damage;
        //       result.totalDamageNoCrits += hit;

        //       return result;
        //     },
        //     { totalDamage: 0, totalDamageNoCrits: 0 }
        //   );
        // }

        return total + calculatedDMG;
      }, 0);

      return { ...hit, elemental: element, damage: FinalDMG };
    }

    // ✅ Normal Rows
    const normalRows = $character.selected.normal.map((hit) => {
      const values = TalentValues[characterName as keyof typeof TalentValues].combat1;
      const element = hit.elemental ? hit.elemental : infusion;
      return calculateFinalDMG(
        hit,
        values,
        element,
        'normalSpecialMultiplier',
        'normalDefIgnore',
        'atk',
        'normalFlatDMG'
      );
    });

    // ✅ Charged Rows
    const chargedRows = $character.selected.charged.map((hit) => {
      const values = TalentValues[characterName as keyof typeof TalentValues].combat1;
      const element = hit.elemental ? hit.elemental : infusion;
      return calculateFinalDMG(
        hit,
        values,
        element,
        'chargedSpecialMultiplier',
        'chargedDefIgnore',
        'atk',
        'chargedFlatDMG'
      );
    });

    // ✅ Plunge Rows
    const plungeRows = $character.selected.plunge.map((hit) => {
      const values = TalentValues[characterName as keyof typeof TalentValues].combat1;
      const element = hit.elemental ? hit.elemental : infusion;
      return calculateFinalDMG(
        hit,
        values,
        element,
        'plungeSpecialMultiplier',
        'plungeDefIgnore',
        'atk',
        'plungeFlatDMG'
      );
    });

    // ✅ Skill Rows
    const skillRows = $character.selected.skill.map((hit) => {
      const values = TalentValues[characterName as keyof typeof TalentValues].combat2;
      const element = hit.elemental ? hit.elemental : $character.selected.vision;
      return calculateFinalDMG(
        hit,
        values,
        element,
        'skillSpecialMultiplier',
        'skillDefIgnore',
        'skill',
        'skillFlatDMG'
      );
    });

    // ✅ Burst Rows
    const burstRows = $character.selected.burst.map((hit) => {
      const values = TalentValues[characterName as keyof typeof TalentValues].combat3;
      const element = hit.elemental ? hit.elemental : $character.selected.vision;
      return calculateFinalDMG(
        hit,
        values,
        element,
        'burstSpecialMultiplier',
        'burstDefIgnore',
        'burst',
        'burstFlatDMG'
      );
    });

    // ✅ Party 1 Rows
    // ✅ Party 2 Rows
    // ✅ Party 3 Rows

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
