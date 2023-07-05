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
import type { Hit } from '$lib/types/talents';

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
      element: any,
      specX: any,
      defIgnore: any,
      talentLvl: 'atk' | 'skill' | 'burst',
      flatDmg: any
    ) {
      const debuffRes = $stats[element + 'Res'];

      const SpecialMultiplier = 1 + $stats[specX];

      // this should be able to handle physical as well
      const DMGBonus =
        (hit.elemental ? $stats[hit.elemental] : $stats[element]) +
        $stats[hit.damageBonus];

      const DEFMultiplier = calcDEFMultiplier(
        $character.lvl,
        enemyLvl,
        $stats.defReduce,
        $stats[defIgnore]
      );

      const RESMultiplier = calcRESMultiplier(baseRes, bonusRes, debuffRes);

      const FinalDMG = hit.damage.reduce((total, damage) => {
        const BaseDMG =
          $stats[damage.scaling] *
          values[damage.param as keyof typeof values][$character[talentLvl]];
        // console.log('values test fucntion', values[damage.param][$character[talent]]);

        const calculatedDMG = calcDamageNoReaction(
          BaseDMG,
          SpecialMultiplier,
          $stats[flatDmg],
          DMGBonus,
          DMGReduction,
          DEFMultiplier,
          RESMultiplier
        );
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
