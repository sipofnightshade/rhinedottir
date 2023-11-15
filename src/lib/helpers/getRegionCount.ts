/**
 * Filter an array to remove 'none' values, then count values based on different match types.
 *
 * @param values - An array of strings representing regions.
 * @param matchType - Either 'same', 'different', or one of the Genshin Impact regions.
 * @param targetValue - The string to compare against (for 'same' matchType) or not used (for other match types).
 * @returns The count of values based on the specified match type.
 */
export function getRegionCount(
  values: string[],
  matchType:
    | 'same'
    | 'different'
    | 'liyue'
    | 'sumeru'
    | 'mondstat'
    | 'inazuma'
    | 'fontaine'
    | 'natlan'
    | 'snezhnaya'
    | 'other',
  targetValue?: string
): number {
  // Remove 'none' values from the array
  const filteredValues = values.filter((value) => value !== 'none');

  switch (matchType) {
    case 'same':
      // Count values that match the targetValue
      return filteredValues.filter((value) => value === targetValue).length;
    case 'different':
      // Count distinct values in the filtered array
      return Array.from(new Set(filteredValues)).length;
    case 'liyue':
    case 'sumeru':
    case 'mondstat':
    case 'inazuma':
    case 'fontaine':
    case 'natlan':
    case 'snezhnaya':
    case 'other':
      // Count values that match the specified region
      return filteredValues.filter((value) => value === matchType).length;
    default:
      throw new Error(
        'Invalid matchType. Use "same", "different", or one of the Genshin Impact regions.'
      );
  }
}
