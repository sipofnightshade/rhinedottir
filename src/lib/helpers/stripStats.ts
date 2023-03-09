import type { ALL_STATS } from '$lib/types/talents';

export function stripStat(stat: ALL_STATS): string {
  const stripped = stat.replace(/Res|%$/g, '');
  return stripped;
}
