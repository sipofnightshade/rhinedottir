import { createArtifactEnka } from './createArtifact';
import { createWeapon } from './createWeapon';
import { createCharacter } from './createCharacter';
// types
import type { SavedArtifactItem, SavedCharacter, SavedWeapon } from '$lib/types/loadout';

interface Equipment {
  character: SavedCharacter | null;
  weapon: SavedWeapon | null;
  artifacts: {
    flower: SavedArtifactItem;
    feather: SavedArtifactItem;
    sands: SavedArtifactItem;
    goblet: SavedArtifactItem;
    circlet: SavedArtifactItem;
  };
}

const noArtifact: SavedArtifactItem = {
  selected: 'none',
  uid: 0,
  url: 'none',
  statsID: 'none',
  fullName: 'None',
  rating: [1],
  lvl: 0,
  isFiveStar: false,
  mainStat: {
    stat: 'hp',
    value: 0
  },
  substats: [
    { stat: '', value: 0 },
    { stat: '', value: 0 },
    { stat: '', value: 0 },
    { stat: '', value: 0 }
  ]
};

export function createEquipment(data: any, showAvatarInfoList: []): Equipment | null {
  const { avatarId, equipList, skillLevelMap, talentIdList, propMap } = data;

  const loadout: Equipment = {
    character: null,
    weapon: null,
    artifacts: {
      flower: noArtifact,
      feather: noArtifact,
      sands: noArtifact,
      goblet: noArtifact,
      circlet: noArtifact
    }
  };

  // create character
  loadout.character = createCharacter(
    avatarId,
    skillLevelMap,
    showAvatarInfoList,
    talentIdList,
    propMap
  );

  // create artifacts & weapons
  equipList.forEach((equipment: any) => {
    if (equipment.flat) {
      switch (equipment.flat.itemType) {
        case 'ITEM_WEAPON':
          if (equipment.weapon) {
            loadout.weapon = createWeapon(equipment);
          }
          break;

        case 'ITEM_RELIQUARY':
          const equipType = equipment.flat.equipType;
          const artifact = createArtifactEnka(equipment);
          if (!artifact) return;

          switch (equipType) {
            case 'EQUIP_BRACER':
              loadout.artifacts.flower = artifact;
              break;
            case 'EQUIP_NECKLACE':
              loadout.artifacts.feather = artifact;
              break;
            case 'EQUIP_SHOES':
              loadout.artifacts.sands = artifact;
              break;
            case 'EQUIP_RING':
              loadout.artifacts.goblet = artifact;
              break;
            case 'EQUIP_DRESS':
              loadout.artifacts.circlet = artifact;
              break;
          }
          break;
      }
    }
  });

  if (!loadout.character || !loadout.weapon) return null;
  return loadout;
}
