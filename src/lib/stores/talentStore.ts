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

      // -------------------------------- PARTY --------------------------------
      // 🛠 data used to create a loop for party data

      interface PartyMember {
        name: string;
        skill: number[];
        burst: number[];
      }

      interface PartyData {
        [key: string]: PartyMember;
      }

      function calculateDamage(
        character: any,
        stats: any,
        enemy: any,
        additionalStats: any
      ): PartyMember {
        const pName = getCharacterName(character.selected);

        const skill = character.selected.skill.map((hit: Hit) => {
          const values = TalentValues[pName as keyof typeof TalentValues].combat2;
          const element = hit.elemental ? hit.elemental : character.selected.vision;
          return calcFinalDMG(
            hit,
            values,
            element,
            character,
            stats,
            enemy,
            additionalStats.skill
          );
        });

        const burst = character.selected.burst.map((hit: Hit) => {
          const values = TalentValues[pName as keyof typeof TalentValues].combat3;
          const element = hit.elemental ? hit.elemental : character.selected.vision;
          return calcFinalDMG(
            hit,
            values,
            element,
            character,
            stats,
            enemy,
            additionalStats.burst
          );
        });

        return { name: pName, skill, burst };
      }

      const partyData: PartyData = {};

      if ($party.one) {
        const character = $party.one.character;
        partyData['p1'] = calculateDamage(character, $stats.p1, $enemy, additionalStats);
      }

      if ($party.two) {
        const character = $party.two.character;
        partyData['p2'] = calculateDamage(character, $stats.p2, $enemy, additionalStats);
      }

      if ($party.three) {
        const character = $party.three.character;
        partyData['p3'] = calculateDamage(character, $stats.p3, $enemy, additionalStats);
      }

      console.log('p1', partyData.p1);
      console.log('p2', partyData.p2);
      console.log('p3', partyData.p3);

      // const partyData: { type: 'skill' | 'burst'; values: 'combat2' | 'combat3' }[] = [
      //   { type: 'skill', values: 'combat2' },
      //   { type: 'burst', values: 'combat3' }
      // ];
      // p1Rows = partyData.map((row) => {
      //   character.selected[row.type].map((hit: Hit) => {
      //     const values = TalentValues[pName as keyof typeof TalentValues][row.values];
      //     const element = hit.elemental ? hit.elemental : character.selected.vision;
      //     return calcFinalDMG(
      //       hit,
      //       values,
      //       element,
      //       character,
      //       $stats.p1,
      //       $enemy,
      //       additionalStats[row.type as keyof typeof additionalStats]
      //     );
      //   });
      // });

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
