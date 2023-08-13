import type { DamageType } from '$lib/types/global';
import type { Hit } from '$lib/types/talents';
import { calcAmplifying } from './calcAmplifyingMultiplier';
import { calcCatalyzeBonus } from './calcCatalyzeBonus';
import { calcDEFMultiplier } from './calcDEFMultiplier';
import { calcDamageNoReaction } from './calcDamageNoReaction';
import { multiScalingDMG, singleScalingDMG } from './calcHitDamage';
import { calcTransforming } from './calcTransforming';

export function calcFinalDMG(
  hit: Hit,
  values: any,
  element: DamageType,
  $character: any,
  $stats: any,
  $enemy: any,
  addStats: any
) {
  // setup ICD
  const ICD = hit.icd ?? 3; // returns 0 if ICD is 0, but returns 3 if icd is undefined
  // get enemy resistance multiplier
  const RESMultiplier = $enemy[element];
  const SpecialMultiplier = 1 + $stats[addStats.specialMultiplier];
  const DEFMultiplier = calcDEFMultiplier(
    $character.lvl,
    $enemy.lvl,
    $stats.defReduce,
    $stats[addStats.defIgnore]
  );
  // ❗❗❗ may have to extract this. This would also remove the need for an enemy store.
  const DMGBonus =
    (hit.elemental ? $stats[hit.elemental] : $stats[element]) +
    $stats[hit.damageBonus] +
    $stats.dmgIncrease + // Mona, Serpents' Spine, bane mods etc
    (hit.elemental === 'physical' ? 0 : $stats.dmgIncreaseElemental); // Hunter's path effect
  // if hit is not physical, then add allElemental dmg bonus

  // get the catalyze bonus damage
  const catalyze = {
    electro: 'aggravate',
    dendro: 'spread'
  };
  const catalyzeFlatDMG =
    element === 'dendro' || element === 'electro'
      ? $stats[addStats.flatDMG] +
        calcCatalyzeBonus(element, $stats.em, $character.lvl, $stats[catalyze[element]])
      : 0;

  const talentLvl = $character[addStats.talentLvlId];

  const FinalDMG = hit.damage.reduce(
    (total: any, damage, i) => {
      // const hitDMG = damage.coef
      //   ? $stats[damage.scaling] * damage.coef
      //   : $stats[damage.scaling] * values[damage.param as keyof typeof values][talentLvl];

      const hitDMG = Array.isArray(damage)
        ? multiScalingDMG(damage, $stats, values, talentLvl)
        : singleScalingDMG(damage, $stats, values, talentLvl);

      // the damage with NO REACTIONS
      const result = calcDamageNoReaction(
        hitDMG,
        SpecialMultiplier,
        $stats[addStats.flatDMG],
        DMGBonus,
        $enemy.dmgReduction,
        DEFMultiplier,
        RESMultiplier,
        $stats.critrate + $stats[addStats.critRate],
        $stats.critdmg
      );
      total.base += result;

      const catalyzeResult = calcDamageNoReaction(
        hitDMG,
        SpecialMultiplier,
        $stats[addStats.flatDMG] + catalyzeFlatDMG,
        DMGBonus,
        $enemy.dmgReduction,
        DEFMultiplier,
        RESMultiplier,
        $stats.critrate + $stats[addStats.critRate],
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
        total.overloaded = total.overloaded || 0;

        // if damage instance is <ON> cooldown, add reactions
        if (i % ICD === 0) {
          total.aggravate += catalyzeResult;
          total.superconduct +=
            calcTransforming(
              'superconduct',
              $stats.em,
              $character.lvl,
              $stats.superconduct,
              $enemy.cryo
            ) + result;
          total.electrocharged +=
            calcTransforming(
              'electrocharged',
              $stats.em,
              $character.lvl,
              $stats.electrocharged,
              $enemy.electro
            ) + result;
          total.overloaded +=
            calcTransforming(
              'overloaded',
              $stats.em,
              $character.lvl,
              $stats.overloaded,
              $enemy.pyro
            ) + result;
        } else {
          // if damage instance is <OFF> cooldown, add base damage
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

      if (element === 'anemo') {
        // total.swirl = total.swirl || 0;
        total.pyroSwirl = total.pyroSwirl || 0;
        total.cryoSwirl = total.cryoSwirl || 0;
        total.electroSwirl = total.electroSwirl || 0;
        total.hydroSwirl = total.hydroSwirl || 0;

        if (i % ICD === 0) {
          // total.swirl +=
          //   calcTransforming('swirl', $stats.em, $character.lvl, $stats.swirl, $enemy.anemo) +
          //   result;
          total.pyroSwirl +=
            calcTransforming(
              'swirl',
              $stats.em,
              $character.lvl,
              $stats.swirl,
              $enemy.pyro
            ) + result;
          total.cryoSwirl +=
            calcTransforming(
              'swirl',
              $stats.em,
              $character.lvl,
              $stats.swirl,
              $enemy.cryo
            ) + result;
          total.electroSwirl +=
            calcTransforming(
              'swirl',
              $stats.em,
              $character.lvl,
              $stats.swirl,
              $enemy.electro
            ) + result;
          total.hydroSwirl +=
            calcTransforming(
              'swirl',
              $stats.em,
              $character.lvl,
              $stats.swirl,
              $enemy.hydro
            ) + result;
        } else {
          total.pyroSwirl += result;
          total.cryoSwirl += result;
          total.electroSwirl += result;
          total.hydroSwirl += result;
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
              $character.lvl,
              $stats.overloaded,
              $enemy.pyro
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
              $character.lvl,
              $stats.electrocharged,
              $enemy.electro
            ) + result;
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
              $character.lvl,
              $stats.superconduct,
              $enemy.cryo
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
