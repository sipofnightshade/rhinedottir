import genshinStatsAll from './genshinStatsAll';
import { CharacterData } from '$lib/data/Characters';
import { WeaponData } from '$lib/data/Weapons';
import { labels } from '$lib/data/Levels';

describe('Test genshinStatsAll script', () => {
  test('returns character stats', () => {
    CharacterData.forEach((character) => {
      labels.lvlValues.forEach((level) => {
        const result = genshinStatsAll.calcStatsForCharacter(character.name, level);
        expect(result).toHaveProperty('level');
        expect(result).toHaveProperty('ascension');
        expect(result).toHaveProperty('hp');
        expect(result).toHaveProperty('attack');
        expect(result).toHaveProperty('defense');
        expect(result).toHaveProperty('specialized');
        expect(result).toHaveProperty('substat');
      });
    });
  });

  test('returns weapon stats', () => {
    WeaponData.sword.forEach((weapon) => {
      labels.lvlValues.forEach((level) => {
        const result = genshinStatsAll.calcStatsForWeapon(weapon.name, level);
        expect(result).toHaveProperty('level');
        expect(result).toHaveProperty('ascension');
        expect(result).toHaveProperty('attack');
        expect(result).toHaveProperty('specialized');
        expect(result).toHaveProperty('substat');
      });
    });
  });
});
