// stores
import { derived } from 'svelte/store';
import { character } from './characterStore';
import { weapon } from './weaponStore';
import { artifact } from './artifactStore';
import { action } from './actionStore';
import { party } from './partyStore';

// helpers
import { getFinalStats } from '$lib/helpers/getFinalStats';

function createStats() {
  return derived(
    [character, weapon, artifact, action, party],
    ([$character, $weapon, $artifacts, $action, $party]) => {
      const main = getFinalStats($character, $weapon, $artifacts, $action.main);

      // create the team special stats, like team energy, burst costs
      // 💡
      let partyBurst = $character.selected.burstCost;

      let p1, p2, p3;
      if ($party?.one) {
        p1 = getFinalStats(
          $party.one.character,
          $party.one.weapon,
          $party.one.artifacts,
          $action.one
        );

        partyBurst += $party.one.character.selected.burstCost;
      }
      if ($party?.two) {
        p2 = getFinalStats(
          $party.two.character,
          $party.two.weapon,
          $party.two.artifacts,
          $action.two
        );
        partyBurst += $party.two.character.selected.burstCost;
      }
      if ($party?.three) {
        p3 = getFinalStats(
          $party.three.character,
          $party.three.weapon,
          $party.three.artifacts,
          $action.three
        );
        partyBurst += $party.three.character.selected.burstCost;
      }

      // get max EM
      const partyMaxEM = Math.max(main.em ?? 0, p1?.em ?? 0, p2?.em ?? 0, p3?.em ?? 0);
      // console.log(partyMaxEM);
      // console.log(partyBurst);

      // calculate number of visions, it would look like the following:
      // dendroCharacters: undefined
      // pyroCharacters: 2
      // geoCharacters: 4
      // 💡 put the logic for this in a special action button. that button will check through elements
      // etc. maybe even return a `misc` property from this with an array of elements inside etc.

      // testing
      return { main, p1, p2, p3 };
    }
  );
}

export const stats = createStats();
