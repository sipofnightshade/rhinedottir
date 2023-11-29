import type { ArtifactStats } from '$lib/types/artifacts';

const maximum = {
  fourStar: {
    hp: 956,
    atk: 63,
    def: 74.1,
    'hp%': 18.7,
    'atk%': 18.7,
    'def%': 23.5,
    em: 75,
    energy: 21,
    critrate: 12.5,
    critdmg: 25
  },
  fiveStar: {
    hp: 1793,
    atk: 117,
    def: 139,
    'hp%': 35,
    'atk%': 35,
    'def%': 44,
    em: 140,
    energy: 39,
    critrate: 23.5,
    critdmg: 47
  }
};

export function getMaxSubstatValue(rating: boolean, stat: ArtifactStats, num: number) {
  if (!stat) return true;

  const x = stat as keyof typeof maximum.fiveStar;

  if (rating) return maximum.fiveStar[x] >= num;
  return maximum.fourStar[x] >= num;
}
