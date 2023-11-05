// types
import type { Index_Stats } from '$lib/data/Stats';
import type { Enemy } from '$lib/types/enemy';
import type { ReactionTotals, Visions } from '$lib/types/global';

// calculators
import { calcAmplifying } from './calcAmplifyingMultiplier';
import { calcTransforming } from './calcTransforming';

/**
 * Calculates the final reaction damage for a given element, stats, level, result, enemy, ICD, and Catalyze result.

 * @param i The damage instance index.
 * @param element The element of the damage instance.
 * @param stats The character stats.
 * @param lvl The character level.
 * @param result The base damage of the damage instance.
 * @param enemy The enemy.
 * @param ICD The internal cooldown of the reaction.
 * @param catalyzeResult The Catalyze result.

 * @returns An object containing the final reaction damage for each reaction type.
 */

export function calcFinalReactionDMG(
  i: number,
  element: Visions,
  stats: Index_Stats,
  lvl: number,
  result: number,
  enemy: Enemy,
  ICD: number,
  catalyzeResult = 0
) {
  let total: ReactionTotals = {};

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
        calcTransforming('superconduct', stats.em, lvl, stats.superconduct, enemy.cryo) +
        result;
      total.electrocharged +=
        calcTransforming(
          'electrocharged',
          stats.em,
          lvl,
          stats.electrocharged,
          enemy.electro
        ) + result;
      total.overloaded +=
        calcTransforming('overloaded', stats.em, lvl, stats.overloaded, enemy.pyro) +
        result;
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
      //   calcTransforming('swirl', stats.em, lvl, stats.swirl, enemy.anemo) +
      //   result;
      total.pyroSwirl +=
        calcTransforming('swirl', stats.em, lvl, stats.swirl, enemy.pyro) + result;
      total.cryoSwirl +=
        calcTransforming('swirl', stats.em, lvl, stats.swirl, enemy.cryo) + result;
      total.electroSwirl +=
        calcTransforming('swirl', stats.em, lvl, stats.swirl, enemy.electro) + result;
      total.hydroSwirl +=
        calcTransforming('swirl', stats.em, lvl, stats.swirl, enemy.hydro) + result;
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
      total.vaporize += result * calcAmplifying(1.5, stats.em, stats.vaporize);
      total.melt += result * calcAmplifying(2, stats.em, stats.melt);
      total.overloaded +=
        calcTransforming('overloaded', stats.em, lvl, stats.overloaded, enemy.pyro) +
        result;
    } else {
      total.vaporize += result;
      total.melt += result;
      total.overloaded += result;
    }
  }

  return total;
}
