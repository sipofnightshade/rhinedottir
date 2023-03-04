import { derived } from 'svelte/store';
import { getCalculatedStat } from '$lib/helpers/getCalculatedStat';
import { character } from './characterStore';
import { weapon } from './weaponStore';
import { artifact } from './artifactStore';

function createStats() {
  return derived([character, weapon, artifact], ([$character, $weapon, $artifacts]) => {
    const BASE = {
      atk: ($character.stats?.attack ?? 0) + ($weapon.stats?.attack ?? 0),
      hp: $character.stats?.hp ?? 0,
      def: $character.stats?.defense ?? 0
    };

    const flatStats = Object.values($artifacts)
      .map((artifact) => {
        return [
          artifact.mainStat,
          artifact.substats.map((item: { stat: string; value: number }) => {
            return item;
          })
        ];
      })
      .flat(2)
      .filter((item) => item.stat !== '' && item.value !== 0);

    const combinedStats = () => {
      let characterStat = {};
      let weaponStat = {};

      switch ($character.selected.specialized) {
        case 'critdmg':
          characterStat = {
            stat: 'critdmg',
            value: (($character.stats?.specialized ?? 0) - 0.5) * 100
          };
          break;

        case 'critrate':
          characterStat = {
            stat: 'critrate',
            value: (($character.stats?.specialized ?? 0) - 0.05) * 100
          };
          break;

        case 'em':
          characterStat = {
            stat: 'em',
            value: $character.stats?.specialized ?? 0
          };
          break;

        default:
          characterStat = {
            stat: $character.selected.specialized,
            value: ($character.stats?.specialized ?? 0) * 100
          };
          break;
      }

      switch ($weapon.selected.specialized) {
        case 'em':
          weaponStat = {
            stat: 'em',
            value: $weapon.stats?.specialized ?? 0
          };
          break;

        default:
          weaponStat = {
            stat: $weapon.selected.specialized,
            value: ($weapon.stats?.specialized ?? 0) * 100
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
      {
        hp: 0,
        atk: 0,
        def: 0,
        em: 0,
        anemo: 0,
        cryo: 0,
        dendro: 0,
        electro: 0,
        geo: 0,
        hydro: 0,
        pyro: 0,
        physical: 0,
        critrate: 0,
        critdmg: 0,
        energy: 100,
        healing: 0
      }
    );

    return {
      ...totalStats,
      baseATK: BASE.atk,
      baseHP: BASE.hp,
      baseDEF: BASE.def,
      hp: BASE.hp + totalStats.hp,
      atk: BASE.atk + totalStats.atk,
      def: BASE.def + totalStats.def,
      critrate: 5 + totalStats.critrate,
      critdmg: 50 + totalStats.critdmg
    };
  });
}

export const stats = createStats();
