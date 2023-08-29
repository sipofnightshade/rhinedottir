export const artifactMainStats = {
  sands: [
    { label: 'ATK%', value: 'atk%' },
    { label: 'HP%', value: 'hp%' },
    { label: 'DEF%', value: 'def%' },
    { label: 'EM', value: 'em' },
    { label: 'Energy', value: 'energy' }
  ],
  circlet: [
    { label: 'CRIT Rate', value: 'critrate' },
    { label: 'CRIT DMG', value: 'critdmg' },
    { label: 'HP%', value: 'hp%' },
    { label: 'ATK%', value: 'atk%' },
    { label: 'DEF%', value: 'def%' },
    { label: 'EM', value: 'em' },
    { label: 'Healing%', value: 'healing' }
  ],
  goblet: [
    { label: 'HP%', value: 'hp%' },
    { label: 'ATK%', value: 'atk%' },
    { label: 'DEF%', value: 'def%' },
    { label: 'EM', value: 'em' },
    { label: 'Anemo DMG', value: 'anemo' },
    { label: 'Cryo DMG', value: 'cryo' },
    { label: 'Dendro DMG', value: 'dendro' },
    { label: 'Electro DMG', value: 'electro' },
    { label: 'Geo DMG', value: 'geo' },
    { label: 'Hydro DMG', value: 'hydro' },
    { label: 'Pyro DMG', value: 'pyro' },
    { label: 'Physical DMG', value: 'physical' }
  ]
};

export const artifactSubStats = [
  { label: 'Select...', value: '' },
  { label: 'HP', value: 'hp' },
  { label: 'ATK', value: 'atk' },
  { label: 'DEF', value: 'def' },
  { label: 'HP%', value: 'hp%' },
  { label: 'ATK%', value: 'atk%' },
  { label: 'DEF%', value: 'def%' },
  { label: 'EM', value: 'em' },
  { label: 'ER', value: 'energy' },
  { label: 'CRIT Rate', value: 'critrate' },
  { label: 'CRIT DMG', value: 'critdmg' }
];

export const StatLabels = {
  '': 'Select...',
  hp: 'HP',
  atk: 'ATK',
  def: 'DEF',
  'hp%': 'HP%',
  'atk%': 'ATK%',
  'def%': 'DEF%',
  em: 'EM',
  energy: 'ER',
  critrate: 'CRIT Rate',
  critdmg: 'CRIT DMG',
  anemo: 'Anemo DMG',
  cryo: 'Cryo DMG',
  dendro: 'Dendro DMG',
  electro: 'Electro DMG',
  geo: 'Geo DMG',
  hydro: 'Hydro DMG',
  pyro: 'Pyro DMG',
  physical: 'Physical DMG',
  healing: 'Healing BONUS'
};

export const weaponStatLabels = {
  critdmg: 'CRIT DMG',
  critrate: 'CRIT Rate',
  'hp%': 'HP',
  'atk%': 'ATK',
  'def%': 'DEF',
  em: 'Elemental Mastery',
  energy: 'Energy Recharge',
  physical: 'Physical DMG Bonus'
};

export type All_Stats = keyof typeof allStats;

export interface Index_Stats {
  [key: string]: number;
}
export const allStats = {
  atk: 0,
  def: 0,
  hp: 0,
  'atk%': 0,
  'def%': 0,
  'hp%': 0,
  em: 0,
  critrate: 0,
  critdmg: 0,
  energy: 0,
  healing: 0,
  healingIncoming: 0,
  anemo: 0,
  cryo: 0,
  dendro: 0,
  electro: 0,
  geo: 0,
  hydro: 0,
  pyro: 0,
  physical: 0,
  anemoRes: 0,
  cryoRes: 0,
  dendroRes: 0,
  electroRes: 0,
  geoRes: 0,
  hydroRes: 0,
  pyroRes: 0,
  physicalRes: 0,
  dmgIncrease: 0,
  dmgIncreaseElemental: 0,
  normal: 0,
  charged: 0,
  plunge: 0,
  skill: 0,
  burst: 0,
  normalATKSpd: 0,
  chargedATKSpd: 0,
  moveSpd: 0,
  normalSpecialMultiplier: 0,
  chargedSpecialMultiplier: 0,
  plungeSpecialMultiplier: 0,
  skillSpecialMultiplier: 0,
  burstSpecialMultiplier: 0,
  normalFlatDMG: 0,
  chargedFlatDMG: 0,
  plungeFlatDMG: 0,
  skillFlatDMG: 0,
  burstFlatDMG: 0,
  normalCritRate: 0,
  chargedCritRate: 0,
  plungeCritRate: 0,
  skillCritRate: 0,
  burstCritRate: 0,
  normalCritDMG: 0,
  chargedCritDMG: 0,
  plungeCritDMG: 0,
  skillCritDMG: 0,
  burstCritDMG: 0,
  ownBonusDMG: 0, // These are for custom stats
  ownBonusFlatDMG: 0, // These are for custom stats
  ownCritRate: 0, // These are for custom stats
  ownCritDMG: 0, // These are for custom stats
  normalDefIgnore: 0,
  chargedDefIgnore: 0,
  plungeDefIgnore: 0,
  skillDefIgnore: 0,
  burstDefIgnore: 0,
  defReduce: 0,
  dmgReduction: 0, // https://genshin-impact.fandom.com/wiki/DMG_Reduction
  // party stats
  partyBurstCost: 0,
  partyMaxEM: 0,
  // reaction bonuses
  aggravate: 0,
  spread: 0,
  melt: 0,
  vaporize: 0,
  burning: 0,
  superconduct: 0,
  swirl: 0,
  electrocharged: 0,
  shattered: 0,
  overloaded: 0,
  bloom: 0,
  burgeon: 0,
  hyperbloom: 0,
  crystallize: 0,
  shieldStrength: 0,
  flatValue: 0
} as const;
