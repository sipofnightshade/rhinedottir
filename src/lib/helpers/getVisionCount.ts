/**
 * Filter an array to remove 'none' values, then count values based on different match types.
 *
 * @param values - An array of 4 strings.
 * @param matchType - Either 'same', 'different', 'anemo', 'cryo', 'dendro', 'electro', 'geo', 'hydro', or 'pyro'.
 * @param targetValue - The string to compare against (for 'same' matchType) or not used (for other match types).
 * @returns The count of values based on the specified match type.
 */
export function getVisionCount(
  values: string[],
  matchType:
    | 'same'
    | 'different'
    | 'anemo'
    | 'cryo'
    | 'dendro'
    | 'electro'
    | 'geo'
    | 'hydro'
    | 'pyro',
  targetValue: string
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
    case 'anemo':
    case 'cryo':
    case 'dendro':
    case 'electro':
    case 'geo':
    case 'hydro':
    case 'pyro':
      // Count values that match the specified element type
      return filteredValues.filter((value) => value === matchType).length;
    default:
      throw new Error('Invalid matchType. Use "same", "different", or an element type.');
  }
}
