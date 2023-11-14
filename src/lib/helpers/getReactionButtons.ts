// types
import type { CurrentCharacter } from '$lib/stores/characterStore';
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
    reactions.push(getBurning(em, stats.burning, enemy.pyro));
  }

  if (element === 'hydro') {
    reactions.push(getBloom(em, stats.bloom, enemy.dendro));
  }

  if (element === 'electro') {
    reactions.push(getHyperbloom(em, stats.bloom, enemy.dendro));
  }

  if (element === 'pyro') {
    reactions.push(getBurgeon(em, stats.bloom, enemy.dendro));
    reactions.push(getBurning(em, stats.burning, enemy.pyro));
  }

  if (element === 'geo') {
    reactions.push(getCrystallized(em, stats.crystallize, 0));
  }

  if (element === 'anemo') {
    reactions.push(getBloom(em, stats.bloom, enemy.dendro));
    reactions.push(getHyperbloom(em, stats.bloom, enemy.dendro));
    reactions.push(getBurgeon(em, stats.bloom, enemy.dendro));
    reactions.push(getBurning(em, stats.burning, enemy.pyro));
  }

  if (
    character.selected.weapon === 'claymore' ||
    element === 'geo' ||
    character.selected.id === 'wriothesley'
  ) {
    reactions.push(getShattered(em, stats.burning, enemy.physical));
  }

  function getHyperbloom(em: number, bonus: number, res: number) {
    const dmg = calcTransforming('hyperbloom', em, lvl, bonus, res);
    return {
      name: 'Hyperbloom',
      tag: 'HB',
      damageBonus: 'hyperbloom',
      elemental: 'dendro',
      damage: {
        hyperbloom: dmg,
        hyperbloom2: dmg * 2
      }
    };
  }

  function getBurgeon(em: number, bonus: number, res: number) {
    const dmg = calcTransforming('burgeon', em, lvl, bonus, res);
    return {
      name: 'Burgeon',
      tag: 'HB',
      damageBonus: 'burgeon',
      elemental: 'dendro',
      damage: {
        burgeon: dmg,
        burgeon2: dmg * 2
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
        bloom: dmg,
        bloom2: dmg * 2,
        bloom3: dmg * 3,
        bloom4: dmg * 4,
        bloom5: dmg * 5
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
        burning: dmg,
        burning2: dmg * 2,
        burning3: dmg * 3,
        burning4: dmg * 4,
        burning5: dmg * 5,
        burning6: dmg * 6,
        burning7: dmg * 7,
        burning8: dmg * 8
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
        shattered: dmg
      }
    };
  }

  function getCrystallized(em: number, bonus: number, res: number) {
    const crystalShield = calcTransforming('crystallize', em, lvl, bonus, res);
    const shieldStrength = stats.shieldStrength ?? 0;
    const finalShield = crystalShield * (1 + shieldStrength);
    return {
      name: 'Crystallize',
      damageBonus: 'crystallize',
      elemental: 'shield',
      damage: {
        shield: finalShield
      }
    };
  }

  return reactions;
}
