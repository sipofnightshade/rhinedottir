import { characterData } from '$lib/data/characters';
import type { SavedCharacter } from '$lib/types/loadout';
import { getLevelIndex } from './getLevelIndex';

export function createCharacter(
  avatarId: number,
  skillLevelMap: { [key: string]: number },
  showAvatarInfoList: { avatarId: number; level: number }[],
  talentIdList: number[] | undefined,
  propMap: any
): SavedCharacter | null {
  const characterInfo = showAvatarInfoList.find((info) => info.avatarId === avatarId);
  const character = characterData.find((data) => data.uid === avatarId);
  const talentLevels = Object.values(skillLevelMap);

  if (characterInfo && character) {
    const atk = talentLevels[0] - 1;
    const skill = talentLevels[1] - 1;
    const burst = talentLevels[2] - 1;
    const constellation = talentIdList ? talentIdList.length : 0; // Numerical length of talentIdList

    const characterAscension = Number(propMap['1002'].val);
    const characterLevel = Number(propMap['4001'].val);

    const lvl = getLevelIndex(characterAscension, characterLevel);

    let lvlBonus = {
      atk: 0,
      skill: 0,
      burst: 0
    };

    if (constellation >= 3 && character.c3) lvlBonus[character.c3] += 3;
    if (constellation >= 5 && character.c5) lvlBonus[character.c5] += 3;

    return {
      id: character.id,
      url: character.url,
      fullName: character.fullName,
      selected: character.name,
      rating: character.rating,
      lvl,
      atk: atk,
      skill: skill,
      burst: burst,
      constellation: constellation,
      weapon: character.weapon,
      vision: character.vision,
      lvlBonus
    };
  } else {
    return null; // Return null if avatarId is not found in the provided data
  }
}
