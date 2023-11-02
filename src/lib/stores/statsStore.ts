// stores
import { derived } from 'svelte/store';
import { character } from './characterStore';
import { weapon } from './weaponStore';
import { artifact } from './artifactStore';
import { action } from './actionStore';
import { party } from './partyStore';

// helpers
import { getFinalStats } from '$lib/helpers/getFinalStats';

type STATS = { [key: string]: number };
type PARTY_STATS = STATS | undefined;

function createStats() {
  return derived(
    [character, weapon, artifact, action, party],
    ([$character, $weapon, $artifacts, $action, $party]) => {
      const main: STATS = getFinalStats($character, $weapon, $artifacts, $action.main);

      // let partyBurstCost = $character.selected.burstCost;

      let p1Stats: PARTY_STATS, p2Stats: PARTY_STATS, p3Stats: PARTY_STATS;
      if ($party?.one) {
        p1Stats = getFinalStats(
          $party.one.character,
          $party.one.weapon,
          $party.one.artifacts,
          $action.one
        );

        // partyBurstCost += $party.one.character.selected.burstCost;
      }
      if ($party?.two) {
        p2Stats = getFinalStats(
          $party.two.character,
          $party.two.weapon,
          $party.two.artifacts,
          $action.two
        );
        // partyBurstCost += $party.two.character.selected.burstCost;
      }
      if ($party?.three) {
        p3Stats = getFinalStats(
          $party.three.character,
          $party.three.weapon,
          $party.three.artifacts,
          $action.three
        );
        // partyBurstCost += $party.three.character.selected.burstCost;
      }

      // get max EM
      const partyMaxEM = Math.max(
        main.em ?? 0,
        p1Stats?.em ?? 0,
        p2Stats?.em ?? 0,
        p3Stats?.em ?? 0
      );

      // get avg party burst cost
      function calculateAverageBurstCost(...burstCosts: number[]) {
        const filteredBurstCosts = burstCosts.filter((cost) => cost !== 0);

        const totalBurstCosts = filteredBurstCosts.reduce((acc, cost) => acc + cost, 0);
        const avgBurstCosts =
          filteredBurstCosts.reduce((acc, cost) => acc + cost, 0) /
          filteredBurstCosts.length;

        return [totalBurstCosts, avgBurstCosts];
      }

      const mainBurstCost = $character.selected.burstCost;
      const p1BurstCost = $party?.one?.character?.selected.burstCost ?? 0;
      const p2BurstCost = $party?.two?.character?.selected.burstCost ?? 0;
      const p3BurstCost = $party?.three?.character?.selected.burstCost ?? 0;

      const [partyBurstCost, partyAvgBurstCost] = calculateAverageBurstCost(
        mainBurstCost,
        p1BurstCost,
        p2BurstCost,
        p3BurstCost
      );

      return {
        main: { ...main, partyBurstCost, partyMaxEM, partyAvgBurstCost },
        one: p1Stats
          ? { ...p1Stats, partyBurstCost, partyMaxEM, partyAvgBurstCost }
          : undefined,
        two: p2Stats
          ? { ...p2Stats, partyBurstCost, partyMaxEM, partyAvgBurstCost }
          : undefined,
        three: p3Stats
          ? { ...p3Stats, partyBurstCost, partyMaxEM, partyAvgBurstCost }
          : undefined
      };
    }
  );
}

export const stats = createStats();
