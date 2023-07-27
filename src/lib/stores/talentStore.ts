import { derived } from 'svelte/store';
//  stores
import { character } from './characterStore';
import { stats } from './statsStore';
import { enemy } from './enemyStore';
import { party } from './partyStore';

// helpers
import { getTalentRows } from '$lib/helpers/getTalentRows';

// default infusion should be physical. replace this with infusion store
const infusion = 'physical';

function createTalents() {
  return derived(
    [character, stats, enemy, party],
    ([$character, $stats, $enemy, $party]) => {
      /**
       * @todo
       * - 🚀 Figure out a way to add stats to specific individual
       * hits.
       * - 💡 May have to have an option to create the stat on the fly
       * and have an optional field on the talent which allows a custom
       * stat to be added as a string.
       */

      // -------------------------------- 🛠 MAIN 🛠 --------------------------------
      const vision = $character.selected.vision;
      const mainDmgType =
        $character.selected.weapon === 'catalyst' || $character.selected.weapon === 'bow'
          ? vision
          : infusion;

      const main = {
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

      // -------------------------------- 🛠 PARTY 🛠 --------------------------------
      const one: any = {}; // create a type for talent rows
      const two: any = {};
      const three: any = {};

      if ($party.one && $stats.p1) {
        const character = $party.one.character;
        const vision = character.selected.vision;
        one['skill'] = getTalentRows(character, $stats.p1, $enemy, 'skill', vision);
        one['burst'] = getTalentRows(character, $stats.p1, $enemy, 'burst', vision);
        one['name'] = character.selected.fullName;
      }

      if ($party.two && $stats.p2) {
        const character = $party.two.character;
        const vision = character.selected.vision;
        two['skill'] = getTalentRows(character, $stats.p2, $enemy, 'skill', vision);
        two['burst'] = getTalentRows(character, $stats.p2, $enemy, 'burst', vision);
        two['name'] = character.selected.fullName;
      }

      if ($party.three && $stats.p3) {
        const character = $party.three.character;
        const vision = character.selected.vision;
        three['skill'] = getTalentRows(character, $stats.p3, $enemy, 'skill', vision);
        three['burst'] = getTalentRows(character, $stats.p3, $enemy, 'burst', vision);
        three['name'] = character.selected.fullName;
      }

      return { main, one, two, three };
    }
  );
}

export const talents = createTalents();
