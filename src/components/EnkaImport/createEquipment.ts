import { createArtifact } from './createArtifact';
import { createWeapon } from './createWeapon';
// types
import type { SavedArtifactItem, SavedWeapon } from '$lib/types/loadout';

interface Equipment {
  weapon: SavedWeapon | null;
  flower: SavedArtifactItem;
  feather: SavedArtifactItem;
  sands: SavedArtifactItem;
  goblet: SavedArtifactItem;
  circlet: SavedArtifactItem;
}

const noArtifact: SavedArtifactItem = {
  selected: 'none',
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

export function createEquipment(avatarList: any): Equipment {
  const equipmentData: Equipment = {
    weapon: null,
    flower: noArtifact,
    feather: noArtifact,
    sands: noArtifact,
    goblet: noArtifact,
    circlet: noArtifact
  };

  avatarList.equipList.forEach((equipment: any) => {
    if (equipment.flat) {
      switch (equipment.flat.itemType) {
        case 'ITEM_WEAPON':
          if (equipment.weapon) {
            equipmentData.weapon = createWeapon(equipment);
          }
          break;

        case 'ITEM_RELIQUARY':
          const equipType = equipment.flat.equipType;
          const artifact = createArtifact(equipment) || noArtifact;

          switch (equipType) {
            case 'EQUIP_BRACER':
              equipmentData.flower = artifact;
              break;
            case 'EQUIP_NECKLACE':
              equipmentData.feather = artifact;
              break;
            case 'EQUIP_SHOES':
              equipmentData.sands = artifact;
              break;
            case 'EQUIP_RING':
              equipmentData.goblet = artifact;
              break;
            case 'EQUIP_DRESS':
              equipmentData.circlet = artifact;
              break;
          }
          break;
      }
    }
  });

  return equipmentData;
}
