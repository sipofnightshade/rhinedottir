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
import { calcTransforming } from '$lib/calculators/calcTransforming';
import { calcAmplifying } from '$lib/calculators/calcAmplifyingMultiplier';

// default infusion should be physical. replace this with infusion store
const infusion = 'physical';

function createTalents() {
  return derived([character, stats], ([$character, $stats]) => {
    // create traveler name indexes
    const cName =
      $character.selected.name === 'aether'
        ? `traveler${$character.selected.vision}`
        : $character.selected.name;
    const cLvl = $character.lvl;

    // enemy stats
    const enemyLvl = 87;
    const enemyRes = 0.1;
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
      // setup ICD
      const ICD = hit.icd ?? 3; // returns 0 if ICD is 0, but returns 3 if icd is undefined

      const debuffRes = $stats[element + 'Res'];
      const SpecialMultiplier = 1 + $stats[specX];
      const DEFMultiplier = calcDEFMultiplier(
        cLvl,
        enemyLvl,
        $stats.defReduce,
        $stats[defIgnore]
      );
      const RESMultiplier = calcRESMultiplier(enemyRes, bonusRes, debuffRes);
      const DMGBonus =
        (hit.elemental ? $stats[hit.elemental] : $stats[element]) +
        $stats[hit.damageBonus];

      // get the catalyze bonus damage
      const catalyze = {
        electro: 'aggravate',
        dendro: 'spread'
      };
      const catalyzeFlatDMG =
        element === 'dendro' || element === 'electro'
          ? $stats[flatDmg] +
            calcCatalyzeBonus(element, $stats.em, cLvl, $stats[catalyze[element]])
          : 0;

      const FinalDMG = hit.damage.reduce(
        (total: any, damage, i) => {
          const hitDMG =
            $stats[damage.scaling] *
            values[damage.param as keyof typeof values][$character[talentLvl]];

          // the base damage with NO REACTIONS
          const result = calcDamageNoReaction(
            hitDMG,
            SpecialMultiplier,
            $stats[flatDmg],
            DMGBonus,
            DMGReduction,
            DEFMultiplier,
            RESMultiplier,
            $stats.critrate,
            $stats.critdmg
          );
          total.base += result;

          const catalyzeResult = calcDamageNoReaction(
            hitDMG,
            SpecialMultiplier,
            $stats[flatDmg] + catalyzeFlatDMG,
            DMGBonus,
            DMGReduction,
            DEFMultiplier,
            RESMultiplier,
            $stats.critrate,
            $stats.critdmg
          );

          /**
           * @here Conditionally add reactions to total
           */
          if (element === 'electro') {
            // initialize reaction values to 0 if undefined
            total.aggravate = total.aggravate || 0;
            total.superconduct = total.superconduct || 0;
            total.electrocharged = total.electrocharged || 0;

            // if damage instance is --ON cooldown, add reactions
            if (i % ICD === 0) {
              total.aggravate += catalyzeResult;
              total.superconduct +=
                calcTransforming(
                  'superconduct',
                  $stats.em,
                  cLvl,
                  $stats.superconduct,
                  enemyRes
                ) + result;
              total.electrocharged +=
                calcTransforming(
                  'electrocharged',
                  $stats.em,
                  cLvl,
                  $stats.electrocharged,
                  enemyRes
                ) + result;
            } else {
              // if damage instance is --OFF cooldown, add base damage
              total.aggravate += result;
              total.superconduct += result;
              total.electrocharged += result;
            }
          }

          if (element === 'dendro') {
            total.spread = total.spread || 0;

            if (i % ICD === 0) {
              total.spread += catalyzeResult;
            } else {
              total.spread += result;
            }
          }

          // 📢 Remove this if adding swirl Button
          if (element === 'anemo') {
            total.swirl = total.swirl || 0;

            if (i % ICD === 0) {
              total.swirl +=
                calcTransforming('swirl', $stats.em, cLvl, $stats.swirl, enemyRes) +
                result;
            } else {
              total.swirl += result;
            }
          }

          if (element === 'pyro') {
            total.vaporize = total.vaporize || 0;
            total.melt = total.melt || 0;
            total.overloaded = total.overloaded || 0;

            if (i % ICD === 0) {
              total.vaporize += result * calcAmplifying(1.5, $stats.em, $stats.vaporize);
              total.melt += result * calcAmplifying(2, $stats.em, $stats.melt);
              total.overloaded +=
                calcTransforming(
                  'overloaded',
                  $stats.em,
                  cLvl,
                  $stats.overloaded,
                  enemyRes
                ) + result;
            } else {
              total.vaporize += result;
              total.melt += result;
              total.overloaded += result;
            }
          }

          if (element === 'hydro') {
            total.vaporize = total.vaporize || 0;
            total.electrocharged = total.electrocharged || 0;
            if (i % ICD === 0) {
              total.vaporize += result * calcAmplifying(2, $stats.em, $stats.vaporize);
              total.electrocharged +=
                calcTransforming(
                  'electrocharged',
                  $stats.em,
                  cLvl,
                  $stats.electrocharged,
                  enemyRes
                ) *
                  enemyRes +
                result;
            } else {
              total.vaporize += result;
              total.electrocharged += result;
            }
          }

          if (element === 'cryo') {
            total.melt = total.melt || 0;
            total.superconduct = total.superconduct || 0;

            if (i % ICD === 0) {
              total.melt += result * calcAmplifying(1.5, $stats.em, $stats.melt);
              total.superconduct +=
                calcTransforming(
                  'superconduct',
                  $stats.em,
                  cLvl,
                  $stats.superconduct,
                  enemyRes
                ) + result;
            } else {
              total.melt += result;
              total.superconduct += result;
            }
          }
          return total;
        },
        { base: 0 }
      );

      return {
        ...hit,
        elemental: element,
        damage: { ...FinalDMG }
      };
    }

    // ✅ Normal Rows
    const normalRows = $character.selected.normal.map((hit) => {
      const values = TalentValues[cName as keyof typeof TalentValues].combat1;
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
      const values = TalentValues[cName as keyof typeof TalentValues].combat1;
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
      const values = TalentValues[cName as keyof typeof TalentValues].combat1;
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
      const values = TalentValues[cName as keyof typeof TalentValues].combat2;
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
      const values = TalentValues[cName as keyof typeof TalentValues].combat3;
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
