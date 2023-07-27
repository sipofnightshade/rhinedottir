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
import type { Hit } from '$lib/types/talents';
import { getCharacterName } from '$lib/helpers/getCharacterName';
import { getTalentRows } from '$lib/helpers/getTalentRows';
import type { DamageType } from '$lib/types/global';

// default infusion should be physical. replace this with infusion store
const infusion = 'physical';

function createTalents() {
  return derived(
    [character, stats, enemy, party],
    ([$character, $stats, $enemy, $party]) => {
      // create traveler name indexes
      const cName = getCharacterName($character.selected);

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

      // Normal Rows
      const normalRows = $character.selected.normal.map((hit) => {
        const values = TalentValues[cName as keyof typeof TalentValues].combat1;
        const element = hit.elemental ? hit.elemental : infusion;
        return calcFinalDMG(
          hit,
          values,
          element,
          $character,
          $stats.main,
          $enemy,
          additionalStats.normal
        );
      });

      // Charged Rows
      const chargedRows = $character.selected.charged.map((hit) => {
        const values = TalentValues[cName as keyof typeof TalentValues].combat1;
        const element = hit.elemental ? hit.elemental : infusion;
        return calcFinalDMG(
          hit,
          values,
          element,
          $character,
          $stats.main,
          $enemy,
          additionalStats.charged
        );
      });

      // Plunge Rows
      const plungeRows = $character.selected.plunge.map((hit) => {
        const values = TalentValues[cName as keyof typeof TalentValues].combat1;
        const element = hit.elemental ? hit.elemental : infusion;
        return calcFinalDMG(
          hit,
          values,
          element,
          $character,
          $stats.main,
          $enemy,
          additionalStats.plunge
        );
      });

      // Skill Rows
      const skillRows = $character.selected.skill.map((hit) => {
        const values = TalentValues[cName as keyof typeof TalentValues].combat2;
        const element = hit.elemental ? hit.elemental : $character.selected.vision;
        return calcFinalDMG(
          hit,
          values,
          element,
          $character,
          $stats.main,
          $enemy,
          additionalStats.skill
        );
      });

      // Burst Rows
      const burstRows = $character.selected.burst.map((hit) => {
        const values = TalentValues[cName as keyof typeof TalentValues].combat3;
        const element = hit.elemental ? hit.elemental : $character.selected.vision;
        return calcFinalDMG(
          hit,
          values,
          element,
          $character,
          $stats.main,
          $enemy,
          additionalStats.burst
        );
      });

      // ✅ Other Rows
      // Rows for passives and constellation damage

      // -------------------------------- 🛠 MAIN 🛠 --------------------------------
      const vision = $character.selected.vision;
      const mainDmgType =
        $character.selected.weapon === 'catalyst' || $character.selected.weapon === 'bow'
          ? vision
          : infusion;
      const mainRows = {
        normal: getTalentRows(
          $character,
          $stats.main,
          $enemy,
          'normal',
          infusion as 'physical'
        ),
        charged: getTalentRows($character, $stats.main, $enemy, 'charged', mainDmgType),
        plunge: getTalentRows(
          $character,
          $stats.main,
          $enemy,
          'plunge',
          infusion as 'physical'
        ),
        skill: getTalentRows($character, $stats.main, $enemy, 'skill', vision),
        burst: getTalentRows($character, $stats.main, $enemy, 'burst', vision)
      };
      // console.log('burst', JSON.stringify(burstRows) === JSON.stringify(mainRows.burst)); // true

      // -------------------------------- 🛠 PARTY 🛠 --------------------------------

      const p1rows: any = {};
      const p2rows: any = {};
      const p3rows: any = {};

      if ($party.one && $stats.p1) {
        const character = $party.one.character;
        const vision = character.selected.vision;
        p1rows['skill'] = getTalentRows(character, $stats.p1, $enemy, 'skill', vision);
        p1rows['burst'] = getTalentRows(character, $stats.p1, $enemy, 'burst', vision);
      }

      if ($party.two && $stats.p2) {
        const character = $party.two.character;
        const vision = character.selected.vision;
        p2rows['skill'] = getTalentRows(character, $stats.p2, $enemy, 'skill', vision);
        p2rows['burst'] = getTalentRows(character, $stats.p2, $enemy, 'burst', vision);
      }

      if ($party.three && $stats.p3) {
        const character = $party.three.character;
        const vision = character.selected.vision;
        p3rows['skill'] = getTalentRows(character, $stats.p3, $enemy, 'skill', vision);
        p3rows['burst'] = getTalentRows(character, $stats.p3, $enemy, 'burst', vision);
      }

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
