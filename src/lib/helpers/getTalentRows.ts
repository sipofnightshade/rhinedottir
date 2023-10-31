// types
import type { Hit } from '$lib/types/talents';
import type { CurrentCharacter } from '$lib/stores/characterStore';
import type { DamageType } from '$lib/types/global';
import type { Enemy } from '$lib/types/enemy';
import type { Index_Stats } from '$lib/data/Stats';

// helpers & calculators
import { calcFinalDMG } from '$lib/calculators/calcFinalDMG';

// data
import TalentValues from '$lib/data/TalentValues.json';
import { getCombatValue } from './getCombatValue';

type TalentType = 'normal' | 'charged' | 'plunge' | 'skill' | 'burst';

export function getTalentRows(
  character: CurrentCharacter,
  stats: Index_Stats,
  enemy: Enemy,
  type: TalentType,
  dmgType: DamageType
) {
  const cName = character.selected.id;
  const combatValue = getCombatValue(type);
  const values = TalentValues[cName as keyof typeof TalentValues][combatValue];
  const additionalStats = getAdditionalStats(type);

  const rows = character.selected[type].map((hit: Hit) => {
    const element = hit.hasOwnDMGType ? hit.hasOwnDMGType : dmgType;
    //
    return calcFinalDMG(hit, values, element, character, stats, enemy, additionalStats);
  });

  return rows;
}

function getAdditionalStats(type: TalentType) {
  switch (type) {
    case 'normal':
      return {
        specialMultiplier: 'normalSpecialMultiplier',
        defIgnore: 'normalDefIgnore',
        talentLvlId: 'atk',
        flatDMG: 'normalFlatDMG',
        critRate: 'normalCritRate',
        critDMG: 'normalCritDMG'
      };
    case 'charged':
      return {
        specialMultiplier: 'chargedSpecialMultiplier',
        defIgnore: 'chargedDefIgnore',
        talentLvlId: 'atk',
        flatDMG: 'chargedFlatDMG',
        critRate: 'chargedCritRate',
        critDMG: 'chargedCritDMG'
      };
    case 'plunge':
      return {
        specialMultiplier: 'plungeSpecialMultiplier',
        defIgnore: 'plungeDefIgnore',
        talentLvlId: 'atk',
        flatDMG: 'plungeFlatDMG',
        critRate: 'plungeCritRate',
        critDMG: 'plungeCritDMG'
      };
    case 'skill':
      return {
        specialMultiplier: 'skillSpecialMultiplier',
        defIgnore: 'skillDefIgnore',
        talentLvlId: 'skill',
        flatDMG: 'skillFlatDMG',
        critRate: 'skillCritRate',
        critDMG: 'skillCritDMG'
      };
    case 'burst':
      return {
        specialMultiplier: 'burstSpecialMultiplier',
        defIgnore: 'burstDefIgnore',
        talentLvlId: 'burst',
        flatDMG: 'burstFlatDMG',
        critRate: 'burstCritRate',
        critDMG: 'burstCritDMG'
      };
  }
}
