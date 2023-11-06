import type { DamageType, Reactions } from '$lib/types/global';

type Damage = {
  dmgType: DamageType;
  dmgValue: number;
};

export function separateDamage(
  type: DamageType | Reactions,
  value: number,
  baseType: DamageType,
  baseDMG: number
): Damage[] {
  switch (type) {
    case 'anemo':
    case 'cryo':
    case 'dendro':
    case 'electro':
    case 'hydro':
    case 'pyro':
    case 'geo':
    case 'physical':
      return [{ dmgType: type, dmgValue: value }];

    case 'aggravate':
      return [{ dmgType: 'electro', dmgValue: value }];

    case 'spread':
      return [{ dmgType: 'dendro', dmgValue: value }];

    case 'melt':
      return [{ dmgType: baseType, dmgValue: value }];
    case 'vaporize':
      return [{ dmgType: baseType, dmgValue: value }];
    case 'electrocharged':
      if (baseType === 'hydro') {
        return [
          { dmgType: baseType, dmgValue: baseDMG },
          { dmgType: 'electro', dmgValue: value - baseDMG }
        ];
      } else if (baseType === 'electro') {
        return [{ dmgType: 'electro', dmgValue: value }];
      }

    case 'overloaded':
      if (baseType === 'electro') {
        return [
          { dmgType: baseType, dmgValue: baseDMG },
          { dmgType: 'pyro', dmgValue: value - baseDMG }
        ];
      } else if (baseType === 'pyro') {
        return [{ dmgType: 'pyro', dmgValue: value }];
      }

    case 'superconduct':
      if (baseType === 'electro') {
        return [
          { dmgType: baseType, dmgValue: baseDMG },
          { dmgType: 'cryo', dmgValue: value - baseDMG }
        ];
      } else if (baseType === 'cryo') {
        return [{ dmgType: 'cryo', dmgValue: value }];
      }

    case 'pyroSwirl':
      return [
        { dmgType: 'pyro', dmgValue: value - baseDMG },
        { dmgType: 'anemo', dmgValue: baseDMG }
      ];

    case 'cryoSwirl':
      return [
        { dmgType: 'cryo', dmgValue: value - baseDMG },
        { dmgType: 'anemo', dmgValue: baseDMG }
      ];

    case 'hydroSwirl':
      return [
        { dmgType: 'hydro', dmgValue: value - baseDMG },
        { dmgType: 'anemo', dmgValue: baseDMG }
      ];

    case 'electroSwirl':
      return [
        { dmgType: 'electro', dmgValue: value - baseDMG },
        { dmgType: 'anemo', dmgValue: baseDMG }
      ];

    default:
      throw new Error(`Unknown type: ${type}`);
  }
}
