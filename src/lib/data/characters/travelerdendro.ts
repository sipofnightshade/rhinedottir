import type { CharacterRecord } from '$lib/types/global';

const charName: CharacterRecord = {
  name: 'aether',
  fullName: 'Aether',
  rating: 5,
  weapon: 'sword',
  region: 'other',
  vision: 'dendro',
  c3: 'skill',
  c5: 'burst',
  specialized: 'atk%',
  burstCost: 60,
  talentNames: {
    normal: 'Foreign Fieldcleaver',
    skill: 'Razorgrass Blade',
    burst: 'Surgent Manifestation'
  },
  normal: [
    {
      name: '1 - Hit DMG',
      tag: 'N1',
      damageBonus: 'normal',
      damage: [[{ scaling: 'atk', param: 'param1' }]]
    },
    {
      name: '2 - Hit DMG',
      tag: 'N2',
      damageBonus: 'normal',
      damage: [[{ scaling: 'atk', param: 'param2' }]]
    },
    {
      name: '3 - Hit DMG',
      tag: 'N3',
      damageBonus: 'normal',
      damage: [[{ scaling: 'atk', param: 'param3' }]]
    },
    {
      name: '4 - Hit DMG',
      tag: 'N4',
      damageBonus: 'normal',
      damage: [[{ scaling: 'atk', param: 'param4' }]]
    },
    {
      name: '5 - Hit DMG',
      tag: 'N5',
      damageBonus: 'normal',
      damage: [[{ scaling: 'atk', param: 'param5' }]]
    }
  ],
  charged: [
    {
      name: 'Charged Attack',
      tag: 'CA',
      damageBonus: 'charged',
      damage: [
        [{ scaling: 'atk', param: 'param6' }],
        [{ scaling: 'atk', param: 'param7' }]
      ]
    }
  ],
  plunge: [
    {
      name: 'Plunge DMG',
      tag: 'PD',
      damageBonus: 'plunge',
      damage: [[{ scaling: 'atk', param: 'param9' }]]
    },
    {
      name: 'Low Plunge',
      tag: 'PL',
      damageBonus: 'plunge',
      damage: [[{ scaling: 'atk', param: 'param10' }]]
    },
    {
      name: 'High Plunge',
      tag: 'PH',
      damageBonus: 'plunge',
      damage: [[{ scaling: 'atk', param: 'param11' }]]
    }
  ],
  skill: [
    {
      name: 'Skill DMG',
      tag: 'E',
      damageBonus: 'skill',
      damage: [[{ scaling: 'atk', param: 'param1' }]]
    }
  ],
  burst: [
    {
      name: 'Lea Lotus Lamp DMG',
      tag: 'Q1',
      damageBonus: 'burst',
      damage: [[{ scaling: 'atk', param: 'param1' }]]
    },
    {
      name: 'Explosion DMG',
      tag: 'Q2',
      damageBonus: 'burst',
      damage: [[{ scaling: 'atk', param: 'param2' }]]
    }
  ],
  actions: [
    {
      name: 'Verdant Overgrowth',
      url: 'UI_Talent_U_PlayerGrass_01',
      description:
        '**Lea Lotus Lamp** will obtain one level of Overflowing Lotuslight every second it is on the field, increasing the Elemental Mastery of active character(s) within its AoE by 6. Overflowing Lotuslight has a maximum of 10 stacks.',
      level: 2,
      target: 'active',
      actionType: 'stack',
      values: [{ scaling: 'em', coef: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6] }]
    },
    {
      name: 'Verdant Luxury',
      url: 'UI_Talent_U_PlayerGrass_02',
      description:
        'Every point of Elemental Mastery the Traveler possesses increases the DMG dealt by **Razorgrass Blade** by 0.15% and the DMG dealt by **Surgent Manifestation** by 0.1%.',
      level: 8,
      target: 'self',
      sourceStats: ['em'],
      actionType: 'passive',
      values: [
        { scaling: 'skill', coef: 0.0015, source: ['em', 0] },
        { scaling: 'burst', coef: 0.001, source: ['em', 0] }
      ]
    },
    {
      name: 'Withering Aggregation - Dendro',
      url: 'UI_Talent_S_PlayerGrass_06',
      description:
        'The Dendro DMG Bonus of the character under the effect of Overflowing Lotuslight as created by the **Lea Lotus Lamp** is increased by 12%',
      constellation: 6,
      target: 'active',
      actionType: 'toggle',
      values: [{ scaling: 'dendro', coef: 0.12 }]
    },
    {
      name: 'Withering Aggregation - Transfiguration Element',
      url: 'UI_Talent_S_PlayerGrass_06',
      description:
        'If the Lamp has experienced a Lotuslight Transfiguration previously, the character will gain 12% DMG Bonus for the corresponding element.',
      constellation: 6,
      target: 'active',
      actionType: 'select',
      values: [
        { scaling: 'hydro', coef: 0.12 },
        { scaling: 'electro', coef: 0.12 },
        { scaling: 'pyro', coef: 0.12 }
      ]
    }
  ]
};

export default charName;
