import { derived } from 'svelte/store';
import { getCalculatedStat } from '$lib/helpers/getCalculatedStat';
import { character } from './characterStore';
import { weapon } from './weaponStore';
import { artifact } from './artifactStore';
import { action } from './actionStore';

function createStats() {
  return derived(
    [character, weapon, artifact, action],
    ([$character, $weapon, $artifacts, $action]) => {
      const BASE = {
        atk: ($character.stats?.attack ?? 0) + ($weapon.stats?.attack ?? 0),
        hp: $character.stats?.hp ?? 0,
        def: $character.stats?.defense ?? 0
      };

      const flatStats = Object.values($artifacts)
        .map((artifact) => {
          const mainStat = artifact.mainStat || {}; // Set default value for mainStat
          const substats = artifact.substats || []; // Set default value for substats

          const filteredSubstats = substats.filter(
            (item: { stat: string; value: number }) => item.stat && item.value !== 0
          ); // Filter substats with non-empty stat and non-zero value

          return [mainStat, ...filteredSubstats];
        })
        .flat(1)
        .filter((item) => item && item.stat && item.value !== 0) // Filter out items with undefined or empty stat and non-zero value
        .map((item) => {
          if (
            item.stat === 'em' ||
            item.stat === 'atk' ||
            item.stat === 'def' ||
            item.stat === 'hp'
          ) {
            return item;
          }
          return { ...item, value: item.value / 100 };
        });

      const combinedStats = () => {
        let characterStat = {};
        const weaponStat = {
          stat: $weapon.selected.specialized,
          value: $weapon.stats?.specialized
        };

        switch ($character.selected.specialized) {
          case 'critdmg':
            characterStat = {
              stat: 'critdmg',
              value: $character.stats?.specialized && $character.stats?.specialized - 0.5
            };
            break;

          case 'critrate':
            characterStat = {
              stat: 'critrate',
              value: $character.stats?.specialized && $character.stats?.specialized - 0.05
            };
            break;

          default:
            characterStat = {
              stat: $character.selected.specialized,
              value: $character.stats?.specialized
            };
            break;
        }

        return [...flatStats, characterStat, weaponStat];
      };

      const totalStats = combinedStats().reduce(
        (acc, { stat, value }) => {
          if (stat.includes('%')) {
            return {
              ...acc,
              [stat.slice(0, -1)]:
                acc[stat.slice(0, -1)] + getCalculatedStat(BASE, stat, value)
            };
          }

          return {
            ...acc,
            [stat]: acc[stat] + getCalculatedStat(BASE, stat, value)
          };
        },
        { ...$action.main }
      );

      /**
       * @todo
       * 1. Fix up those functions/import them
       * 2. Total up enemy stats, main stats and party stats then
       *    return those as separate properties.
       * eg;
       * 
       * const selected = {
        ...totalStats,
        baseATK: BASE.atk,
        baseHP: BASE.hp,
        baseDEF: BASE.def,
        hp: BASE.hp + totalStats.hp,
        atk: BASE.atk + totalStats.atk,
        def: BASE.def + totalStats.def,
        critrate: 0.05 + totalStats.critrate,
        critdmg: 0.5 + totalStats.critdmg,
        energy: 1 + totalStats.energy
        }

        return {selected, p1, p2, p3, enemy}
       */

      return {
        ...totalStats,
        baseATK: BASE.atk,
        baseHP: BASE.hp,
        baseDEF: BASE.def,
        hp: BASE.hp + totalStats.hp,
        atk: BASE.atk + totalStats.atk,
        def: BASE.def + totalStats.def,
        critrate: 0.05 + totalStats.critrate,
        critdmg: 0.5 + totalStats.critdmg,
        energy: 1 + totalStats.energy
      };
    }
  );
}

export const stats = createStats();
