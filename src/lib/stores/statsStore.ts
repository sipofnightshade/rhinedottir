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

      let p1, p2, p3;
      if ($party?.one) {
        p1 = getFinalStats(
          $party.one.character,
          $party.one.weapon,
          $party.one.artifacts,
          $action.party1
        );
      }
      if ($party?.two) {
        p2 = getFinalStats(
          $party.two.character,
          $party.two.weapon,
          $party.two.artifacts,
          $action.party2
        );
      }
      if ($party?.three) {
        p3 = getFinalStats(
          $party.three.character,
          $party.three.weapon,
          $party.three.artifacts,
          $action.party3
        );
      }

      return { main, p1, p2, p3 };
    }
  );
}

export const stats = createStats();
