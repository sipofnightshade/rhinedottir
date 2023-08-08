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
      let partyBurstCost = $character.selected.burstCost;

      let p1Stats, p2Stats, p3Stats;
      if ($party?.one) {
        p1Stats = getFinalStats(
          $party.one.character,
          $party.one.weapon,
          $party.one.artifacts,
          $action.one
        );

        partyBurstCost += $party.one.character.selected.burstCost;
      }
      if ($party?.two) {
        p2Stats = getFinalStats(
          $party.two.character,
          $party.two.weapon,
          $party.two.artifacts,
          $action.two
        );
        partyBurstCost += $party.two.character.selected.burstCost;
      }
      if ($party?.three) {
        p3Stats = getFinalStats(
          $party.three.character,
          $party.three.weapon,
          $party.three.artifacts,
          $action.three
        );
        partyBurstCost += $party.three.character.selected.burstCost;
      }

      // get max EM
      const partyMaxEM = Math.max(
        main.em ?? 0,
        p1Stats?.em ?? 0,
        p2Stats?.em ?? 0,
        p3Stats?.em ?? 0
      );

      return {
        main: { ...main, partyBurstCost, partyMaxEM },
        p1: p1Stats ? { ...p1Stats, partyBurstCost, partyMaxEM } : undefined,
        p2: p2Stats ? { ...p2Stats, partyBurstCost, partyMaxEM } : undefined,
        p3: p3Stats ? { ...p3Stats, partyBurstCost, partyMaxEM } : undefined
      };
    }
  );
}

export const stats = createStats();
