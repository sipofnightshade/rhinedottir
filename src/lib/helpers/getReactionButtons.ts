// types
import type { Hit } from '$lib/types/talents';
import type { CurrentCharacter } from '$lib/stores/characterStore';
import type { DamageType } from '$lib/types/global';
import type { Enemy } from '$lib/types/enemy';
import type { Index_Stats } from '$lib/data/Stats';

// helpers & calculators
import { calcTransforming } from '$lib/calculators/calcTransforming';

export function getReactionButtons(
  character: CurrentCharacter,
  stats: Index_Stats,
  enemy: Enemy
) {
  const lvl = character.lvl;
  const em = stats.em;
  const element = character.selected.vision;

  let reactions: any[] = [];

  if (element === 'dendro') {
    reactions.push(getBloom(em, stats.bloom, enemy.dendro));
  }

  if (element === 'hydro') {
    reactions.push(getBloom(em, stats.bloom, enemy.dendro));
  }

  if (element === 'electro') {
    reactions.push(getHyperBurgeon('hyperbloom', em, stats.hyperbloom, enemy.dendro));
  }

  if (element === 'pyro') {
    reactions.push(getHyperBurgeon('burgeon', em, stats.burgeon, enemy.dendro));
    reactions.push(getBurning(em, stats.burning, enemy.pyro));
  }

  if (element === 'geo') {
    reactions.push(getCrystallized(em, stats.crystallize, 0));
  }

  if (
    character.selected.weapon === 'claymore' ||
    element === 'geo' ||
    character.selected.id === 'wriothesley'
  ) {
    reactions.push(getShattered(em, stats.burning, enemy.physical));
  }

  function getHyperBurgeon(
    rxn: 'hyperbloom' | 'burgeon',
    em: number,
    bonus: number,
    res: number
  ) {
    const dmg = calcTransforming(rxn, em, lvl, bonus, res);
    const name = rxn === 'burgeon' ? 'Burgeon' : 'Hyperbloom';
    const tag = rxn === 'burgeon' ? 'BG' : 'HB';
    return {
      name,
      tag,
      damageBonus: rxn,
      elemental: 'dendro',
      damage: {
        base: dmg,
        basex2: dmg * 2
      }
    };
  }

  function getBloom(em: number, bonus: number, res: number) {
    const dmg = calcTransforming('bloom', em, lvl, bonus, res);
    return {
      name: 'Bloom',
      tag: 'BL',
      damageBonus: 'bloom',
      elemental: 'dendro',
      damage: {
        base: dmg,
        basex2: dmg * 2,
        basex3: dmg * 3,
        basex4: dmg * 4,
        basex5: dmg * 5
      }
    };
  }

  function getBurning(em: number, bonus: number, res: number) {
    const dmg = calcTransforming('burning', em, lvl, bonus, res);
    return {
      name: 'Burning',
      tag: 'BN',
      damageBonus: 'burning',
      elemental: 'pyro',
      damage: {
        base: dmg,
        basex2: dmg * 2,
        basex3: dmg * 3,
        basex4: dmg * 4,
        basex5: dmg * 5,
        basex6: dmg * 6,
        basex7: dmg * 7,
        basex8: dmg * 8
      }
    };
  }

  function getShattered(em: number, bonus: number, res: number) {
    const dmg = calcTransforming('shattered', em, lvl, bonus, res);
    return {
      name: 'Shattered',
      tag: 'SH',
      damageBonus: 'shattered',
      elemental: 'physical',
      damage: {
        base: dmg
      }
    };
  }

  function getCrystallized(em: number, bonus: number, res: number) {
    const dmg = calcTransforming('crystallize', em, lvl, bonus, res);
    return {
      name: 'Crystallize',
      damageBonus: 'crystallize',
      elemental: 'shield',
      damage: {
        base: dmg
      }
    };
  }

  return reactions;
}
