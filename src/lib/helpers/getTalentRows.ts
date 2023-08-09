// types
import type { ALL_STATS, Hit } from '$lib/types/talents';
import type { CurrentCharacter } from '$lib/stores/characterStore';
import type { DamageType } from '$lib/types/global';
import type { Enemy } from '$lib/types/enemy';

// helpers & calculators
import { calcFinalDMG } from '$lib/calculators/calcFinalDMG';
import { getCharacterName } from './getCharacterName';

// data
import TalentValues from '$lib/data/TalentValues.json';

type TalentType = 'normal' | 'charged' | 'plunge' | 'skill' | 'burst';

export function getTalentRows(
  character: CurrentCharacter,
  stats: Record<ALL_STATS, number>,
  enemy: Enemy,
  type: TalentType,
  dmgType: DamageType
) {
  const cName = getCharacterName(character.selected);
  const combatValue = getCombatValue(type);
  const values = TalentValues[cName as keyof typeof TalentValues][combatValue];
  const additionalStats = getAdditionalStats(type);

  const rows = character.selected[type].map((hit: Hit) => {
    const element = hit.elemental ? hit.elemental : dmgType;
    //
    return calcFinalDMG(hit, values, element, character, stats, enemy, additionalStats);
  });

  return rows;
}

function getCombatValue(type: TalentType) {
  switch (type) {
    case 'skill':
      return 'combat2';
    case 'burst':
      return 'combat3';
    default:
      return 'combat1';
  }
}

function getAdditionalStats(type: TalentType) {
  switch (type) {
    case 'normal':
      return {
        specialMultiplier: 'normalSpecialMultiplier',
        defIgnore: 'normalDefIgnore',
        talentLvlId: 'atk',
        flatDMG: 'normalFlatDMG',
        critRate: 'normalCritRate'
      };
    case 'charged':
      return {
        specialMultiplier: 'chargedSpecialMultiplier',
        defIgnore: 'chargedDefIgnore',
        talentLvlId: 'atk',
        flatDMG: 'chargedFlatDMG',
        critRate: 'chargedCritRate'
      };
    case 'plunge':
      return {
        specialMultiplier: 'plungeSpecialMultiplier',
        defIgnore: 'plungeDefIgnore',
        talentLvlId: 'atk',
        flatDMG: 'plungeFlatDMG',
        critRate: 'plungeCritRate'
      };
    case 'skill':
      return {
        specialMultiplier: 'skillSpecialMultiplier',
        defIgnore: 'skillDefIgnore',
        talentLvlId: 'skill',
        flatDMG: 'skillFlatDMG',
        critRate: 'skillCritRate'
      };
    case 'burst':
      return {
        specialMultiplier: 'burstSpecialMultiplier',
        defIgnore: 'burstDefIgnore',
        talentLvlId: 'burst',
        flatDMG: 'burstFlatDMG',
        critRate: 'burstCritRate'
      };
  }
}
