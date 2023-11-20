import type { ArtifactStats } from '$lib/types/artifacts';

interface Params {
  stat: ArtifactStats;
  value: number;
}

export function getCritValue(data: Params): number {
  if (data.stat === 'critrate') return data.value * 2;
  if (data.stat === 'critdmg') return data.value;
  return 0;
}
