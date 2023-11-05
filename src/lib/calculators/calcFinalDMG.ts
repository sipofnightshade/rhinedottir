// types
import type { Index_Stats } from '$lib/data/Stats';
import type { DamageType } from '$lib/types/global';
import type { Hit, HitDMG } from '$lib/types/talents';

// calculators
import { calcCatalyzeBonus } from './calcCatalyzeBonus';
import { calcCritStat } from './calcCritStat';
import { calcDEFMultiplier } from './calcDEFMultiplier';
import { calcDMGBonus } from './calcDMGBonus';
import { calcDamageNoReaction } from './calcDamageNoReaction';
import { calcFinalReactionDMG } from './calcFinalReactionDMG';
import { calcHealing } from './calcHealing';
import { calcHitDamage } from './calcHitDamage';
import { calcShield } from './calcShield';

export function calcFinalDMG(
  hit: Hit,
  values: { [x: string]: number[] },
  element: DamageType,
  $character: any,
  $stats: Index_Stats,
  $enemy: any,
  addStats: any
) {
  const talentLvl =
    $character[addStats.talentLvlId] + $character.lvlBonus[addStats.talentLvlId];

  // if this hit is a heal, then return only the healing values
  if (hit.isHealing) {
    const healing = calcHealing(hit.damage[0], $stats, values, talentLvl);
    return {
      ...hit,
      elemental: 'healing',
      damage: {
        base: healing
      }
    };
  }
  // if this hit is a shield, then return only the healing values

  if (hit.isShield) {
    const shielding = calcShield(hit.damage[0], $stats, values, talentLvl);
    return {
      ...hit,
      elemental: 'shield',
      damage: {
        base: shielding
      }
    };
  }

  const ICD = hit.icd ?? 3; // sets default ICD of 3 if no icd on the hit
  // get enemy resistance multiplier
  const RESMultiplier = $enemy[element];
  const SpecialMultiplier = hit.hasOwnSpecialMultiplier
    ? $stats[addStats.specialMultiplier] + ($stats[hit.hasOwnSpecialMultiplier] ?? 0)
    : $stats[addStats.specialMultiplier];

  const DEFMultiplier = calcDEFMultiplier(
    $character.lvl,
    $enemy.lvl,
    $enemy.defReduce,
    $stats[addStats.defIgnore]
  );

  // calculate total damage bonuses
  const DMGBonus = calcDMGBonus(hit, $stats, element);

  // calculate total crit stats
  const critRate = calcCritStat(
    $stats,
    hit.hasOwnCritRate,
    'critrate',
    addStats.critRate,
    element
  );
  const critDMG = calcCritStat(
    $stats,
    hit.hasOwnCritDMG,
    'critdmg',
    addStats.critDMG,
    element
  );

  // get the talent specific flatDMG if it has one
  const ownBonusFlatDMG = hit.hasOwnBonusFlatDMG
    ? $stats[hit.hasOwnBonusFlatDMG] || 0
    : 0;

  const dmgTypeFlatDMG = $stats[element + 'FlatDMG'] ?? 0;

  // get the catalyze bonus damage
  const catalyze = {
    electro: 'aggravate',
    dendro: 'spread'
  };
  const catalyzeFlatDMG =
    element === 'dendro' || element === 'electro'
      ? calcCatalyzeBonus(element, $stats.em, $character.lvl, $stats[catalyze[element]])
      : 0;

  const FinalDMG = hit.damage.reduce(
    (total: any, damage: HitDMG, i: number) => {
      const hitDMG = calcHitDamage(damage, $stats, values, talentLvl);

      // the damage with NO REACTIONS
      const result = calcDamageNoReaction(
        hitDMG,
        SpecialMultiplier,
        $stats[addStats.flatDMG] + ownBonusFlatDMG + dmgTypeFlatDMG,
        DMGBonus,
        $enemy.dmgReduction,
        DEFMultiplier,
        RESMultiplier,
        critRate,
        critDMG
      );
      total.base += result;

      const catalyzeResult = calcDamageNoReaction(
        hitDMG,
        SpecialMultiplier,
        $stats[addStats.flatDMG] + catalyzeFlatDMG + ownBonusFlatDMG + dmgTypeFlatDMG,
        DMGBonus,
        $enemy.dmgReduction,
        DEFMultiplier,
        RESMultiplier,
        critRate,
        critDMG
      );

      if (element === 'physical') {
        return total;
      } else {
        return {
          base: total.base,
          ...calcFinalReactionDMG(
            i,
            element,
            $stats,
            $character.lvl,
            result,
            $enemy,
            ICD,
            catalyzeResult
          )
        };
      }
    },
    { base: 0 }
  );

  return {
    ...hit,
    elemental: element,
    damage: { ...FinalDMG }
  };
}
