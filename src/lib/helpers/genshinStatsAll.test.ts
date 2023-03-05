import genshinStatsAll from './genshinStatsAll';
import { CharacterData } from '$lib/data/Characters';
import { WeaponData } from '$lib/data/Weapons';
import { labels } from '$lib/data/Levels';

describe('calcStatsForCharacter module', () => {
  test('returns expected properties for each character and level', () => {
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

  test('returns accurate data', () => {
    const result = genshinStatsAll.calcStatsForCharacter('klee', '90');
    expect(result).toEqual({
      level: 90,
      ascension: 6,
      hp: 10286.565419930499,
      attack: 310.93189668962077,
      defense: 614.8434950278315,
      specialized: 0.2879999876022339,
      substat: 'FIGHT_PROP_FIRE_ADD_HURT'
    });
  });
});

describe('calcStatsForWeapon module', () => {
  test('returns expected properties for each weapon and level', () => {
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

  test('returns accurate data', () => {
    const result1 = genshinStatsAll.calcStatsForWeapon('wolfsgravestone', 90);
    expect(result1).toEqual({
      level: 90,
      ascension: 6,
      attack: 608.074622109998,
      specialized: 0.49615199803817234,
      substat: 'FIGHT_PROP_ATTACK_PERCENT'
    });
  });
});
