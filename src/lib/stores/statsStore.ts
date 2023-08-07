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
      let partyBurstCost = $character.selected.burstCost;

      let p1, p2, p3;
      if ($party?.one) {
        p1 = getFinalStats(
          $party.one.character,
          $party.one.weapon,
          $party.one.artifacts,
          $action.one
        );

        partyBurstCost += $party.one.character.selected.burstCost;
      }
      if ($party?.two) {
        p2 = getFinalStats(
          $party.two.character,
          $party.two.weapon,
          $party.two.artifacts,
          $action.two
        );
        partyBurstCost += $party.two.character.selected.burstCost;
      }
      if ($party?.three) {
        p3 = getFinalStats(
          $party.three.character,
          $party.three.weapon,
          $party.three.artifacts,
          $action.three
        );
        partyBurstCost += $party.three.character.selected.burstCost;
      }

      // get max EM
      const partyMaxEM = Math.max(main.em ?? 0, p1?.em ?? 0, p2?.em ?? 0, p3?.em ?? 0);
      // console.log(partyMaxEM);
      // console.log(partyBurst);

      return {
        main: { ...main, partyBurstCost, partyMaxEM },
        p1: { ...p1, partyBurstCost, partyMaxEM },
        p2: { ...p2, partyBurstCost, partyMaxEM },
        p3: { ...p3, partyBurstCost, partyMaxEM }
      };
    }
  );
}

export const stats = createStats();
