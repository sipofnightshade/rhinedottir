import { derived } from 'svelte/store';
//  stores
import { character } from './characterStore';
import { stats } from './statsStore';
import { enemy } from './enemyStore';
import { party } from './partyStore';
import { infusion } from './infusionStore';

// helpers
import { getTalentRows } from '$lib/helpers/getTalentRows';

function createTalents() {
  return derived(
    [character, stats, enemy, party, infusion],
    ([$character, $stats, $enemy, $party, $infusion]) => {
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
      const mainDmgType = $character.selected.weapon === 'catalyst' ? vision : $infusion;

      // have infusion for normal, charged and plunge attacks

      const main = {
        normal: getTalentRows($character, $stats.main, $enemy, 'normal', mainDmgType),
        charged: getTalentRows($character, $stats.main, $enemy, 'charged', mainDmgType),
        plunge: getTalentRows($character, $stats.main, $enemy, 'plunge', mainDmgType),
        skill: getTalentRows($character, $stats.main, $enemy, 'skill', vision),
        burst: getTalentRows($character, $stats.main, $enemy, 'burst', vision)
      };

      // -------------------------------- 🛠 PARTY 🛠 --------------------------------
      const one: any = {}; // create a type for talent rows
      const two: any = {};
      const three: any = {};

      if ($party.one && $stats.one) {
        const character = $party.one.character;
        const vision = character.selected.vision;
        one['skill'] = getTalentRows(character, $stats.one, $enemy, 'skill', vision);
        one['burst'] = getTalentRows(character, $stats.one, $enemy, 'burst', vision);
        one['name'] = character.selected.fullName;
      }

      if ($party.two && $stats.two) {
        const character = $party.two.character;
        const vision = character.selected.vision;
        two['skill'] = getTalentRows(character, $stats.two, $enemy, 'skill', vision);
        two['burst'] = getTalentRows(character, $stats.two, $enemy, 'burst', vision);
        two['name'] = character.selected.fullName;
      }

      if ($party.three && $stats.three) {
        const character = $party.three.character;
        const vision = character.selected.vision;
        three['skill'] = getTalentRows(character, $stats.three, $enemy, 'skill', vision);
        three['burst'] = getTalentRows(character, $stats.three, $enemy, 'burst', vision);
        three['name'] = character.selected.fullName;
      }

      return { main, one, two, three };
    }
  );
}

export const talents = createTalents();
