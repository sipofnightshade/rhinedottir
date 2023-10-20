import { characterData } from '$lib/data/characters';

export function createCharacter(
  avatarId: number,
  skillLevelMap: { [key: string]: number },
  showAvatarInfoList: { avatarId: number; level: number }[],
  talentIdList: number[]
) {
  const characterInfo = showAvatarInfoList.find((info) => info.avatarId === avatarId);
  const character = characterData.find((data) => data.uid === avatarId);
  const talentLevels = Object.values(skillLevelMap);

  if (characterInfo && character) {
    const atk = talentLevels[0];
    const skill = talentLevels[1];
    const burst = talentLevels[2];
    const constellation = talentIdList.length ?? 0; // Numerical length of talentIdList

    return {
      name: character.name,
      lvl: characterInfo.level,
      atk: atk,
      skill: skill,
      burst: burst,
      constellation: constellation
    };
  } else {
    return null; // Return null if avatarId is not found in the provided data
  }
}
