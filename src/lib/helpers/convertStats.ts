import type { ArtifactStats } from '$lib/types/artifacts';

/** @todo Add Conversions for GOOD */
export const convertStat = (appendPropId: string): ArtifactStats => {
  switch (appendPropId) {
    case 'FIGHT_PROP_HP':
    case 'hp':
      return 'hp';
    case 'FIGHT_PROP_ATTACK':
    case 'atk':
      return 'atk';
    case 'FIGHT_PROP_DEFENSE':
    case 'def':
      return 'def';
    case 'FIGHT_PROP_HP_PERCENT':
    case 'hp_':
      return 'hp%';
    case 'FIGHT_PROP_ATTACK_PERCENT':
    case 'atk_':
      return 'atk%';
    case 'FIGHT_PROP_DEFENSE_PERCENT':
    case 'def_':
      return 'def%';
    case 'FIGHT_PROP_CRITICAL':
    case 'critRate_':
      return 'critrate';
    case 'FIGHT_PROP_CRITICAL_HURT':
    case 'critDMG_':
      return 'critdmg';
    case 'FIGHT_PROP_CHARGE_EFFICIENCY':
    case 'enerRech_':
      return 'energy';
    case 'FIGHT_PROP_HEAL_ADD':
    case 'heal_':
      return 'healing';
    case 'FIGHT_PROP_ELEMENT_MASTERY':
    case 'eleMas':
      return 'em';
    case 'FIGHT_PROP_PHYSICAL_ADD_HURT':
    case 'physical_dmg_':
      return 'physical';
    case 'FIGHT_PROP_FIRE_ADD_HURT':
    case 'pyro_dmg_':
      return 'pyro';
    case 'FIGHT_PROP_ELEC_ADD_HURT':
    case 'electro_dmg_':
      return 'electro';
    case 'FIGHT_PROP_WATER_ADD_HURT':
    case 'hydro_dmg_':
      return 'hydro';
    case 'FIGHT_PROP_WIND_ADD_HURT':
    case 'anemo_dmg_':
      return 'anemo';
    case 'FIGHT_PROP_ICE_ADD_HURT':
    case 'cryo_dmg_':
      return 'cryo';
    case 'FIGHT_PROP_ROCK_ADD_HURT':
    case 'geo_dmg_':
      return 'geo';
    case 'FIGHT_PROP_GRASS_ADD_HURT':
    case 'dendro_dmg_':
      return 'dendro';
    default:
      return '';
  }
};
