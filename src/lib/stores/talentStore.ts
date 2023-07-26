import { derived } from 'svelte/store';
//  stores
import { character } from './characterStore';
import { stats } from './statsStore';
import { enemy } from './enemyStore';
import { party } from './partyStore';
// types
import TalentValues from '$lib/data/TalentValues.json';

// calculators & helpers
import { calcFinalDMG } from '$lib/calculators/calcFinalDMG';

// default infusion should be physical. replace this with infusion store
const infusion = 'physical';

function createTalents() {
  return derived(
    [character, stats, enemy, party],
    ([$character, $stats, $enemy, $party]) => {
      // create traveler name indexes
      const cName =
        $character.selected.name === 'aether'
          ? `traveler${$character.selected.vision}`
          : $character.selected.name;

      /**
       * @todo
       * - 🚀 Figure out a way to add stats to specific individual
       * hits.
       * - 💡 May have to have an option to create the stat on the fly
       * and have an optional field on the talent which allows a custom
       * stat to be added as a string.
       */

      const additionalStats = {
        normal: {
          specialMultiplier: 'normalSpecialMultiplier',
          defIgnore: 'normalDefIgnore',
          talentLvlId: 'atk',
          flatDMG: 'normalFlatDMG'
        },
        charged: {
          specialMultiplier: 'chargedSpecialMultiplier',
          defIgnore: 'chargedDefIgnore',
          talentLvlId: 'atk',
          flatDMG: 'chargedFlatDMG'
        },
        plunge: {
          specialMultiplier: 'plungeSpecialMultiplier',
          defIgnore: 'plungeDefIgnore',
          talentLvlId: 'atk',
          flatDMG: 'plungeFlatDMG'
        },
        skill: {
          specialMultiplier: 'skillSpecialMultiplier',
          defIgnore: 'skillDefIgnore',
          talentLvlId: 'skill',
          flatDMG: 'skillFlatDMG'
        },
        burst: {
          specialMultiplier: 'burstSpecialMultiplier',
          defIgnore: 'burstDefIgnore',
          talentLvlId: 'burst',
          flatDMG: 'burstFlatDMG'
        }
      };

      // ✅ Normal Rows
      const normalRows = $character.selected.normal.map((hit) => {
        const values = TalentValues[cName as keyof typeof TalentValues].combat1;
        const element = hit.elemental ? hit.elemental : infusion;
        return calcFinalDMG(
          hit,
          values,
          element,
          $character,
          $stats,
          $enemy,
          additionalStats.normal
        );
      });

      // ✅ Charged Rows
      const chargedRows = $character.selected.charged.map((hit) => {
        const values = TalentValues[cName as keyof typeof TalentValues].combat1;
        const element = hit.elemental ? hit.elemental : infusion;
        return calcFinalDMG(
          hit,
          values,
          element,
          $character,
          $stats,
          $enemy,
          additionalStats.charged
        );
      });

      // ✅ Plunge Rows
      const plungeRows = $character.selected.plunge.map((hit) => {
        const values = TalentValues[cName as keyof typeof TalentValues].combat1;
        const element = hit.elemental ? hit.elemental : infusion;
        return calcFinalDMG(
          hit,
          values,
          element,
          $character,
          $stats,
          $enemy,
          additionalStats.plunge
        );
      });

      // ✅ Skill Rows
      const skillRows = $character.selected.skill.map((hit) => {
        const values = TalentValues[cName as keyof typeof TalentValues].combat2;
        const element = hit.elemental ? hit.elemental : $character.selected.vision;
        return calcFinalDMG(
          hit,
          values,
          element,
          $character,
          $stats,
          $enemy,
          additionalStats.skill
        );
      });

      // ✅ Burst Rows
      const burstRows = $character.selected.burst.map((hit) => {
        const values = TalentValues[cName as keyof typeof TalentValues].combat3;
        const element = hit.elemental ? hit.elemental : $character.selected.vision;
        return calcFinalDMG(
          hit,
          values,
          element,
          $character,
          $stats,
          $enemy,
          additionalStats.burst
        );
      });

      /**
       * @todo replace with `party1.offField.map...` if party 1 exists
       * @considerations Off field talents should have a combat string
       * value or a damage value to deal with like Fischl @A4
       */
      // const p1Field = $character.selected.skill.map((hit) => {
      //   const values = TalentValues[cName as keyof typeof TalentValues].combat2;
      //   const element = hit.elemental ? hit.elemental : $character.selected.vision;
      //   return calculateFinalDMG(
      //     hit,
      //     values,
      //     element,
      //     'skillSpecialMultiplier',
      //     'skillDefIgnore',
      //     'skill',
      //     'skillFlatDMG'
      //   );
      // });

      // ✅ Party 2 Rows
      // ✅ Party 3 Rows

      console.log(normalRows);
      return {
        normalRows,
        chargedRows,
        plungeRows,
        skillRows,
        burstRows
      };
    }
  );
}

export const talents = createTalents();
