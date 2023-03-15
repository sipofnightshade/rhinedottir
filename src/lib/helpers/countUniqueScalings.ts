import type { Action, ALL_STATS } from '$lib/types/talents';

export function countUniqueScalings(values: Action['values']): number {
  const uniqueScalings = new Set<ALL_STATS>();

  for (const value of values) {
    uniqueScalings.add(value.scaling);
  }

  return uniqueScalings.size;
}
