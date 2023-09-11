/**
 * Filter an array to remove 'none' values, then count values that match or do not match a given string.
 *
 * @param values - An array of 4 strings.
 * @param matchType - Either 'same' or 'different'.
 * @param targetValue - The string to compare against.
 * @returns The count of values that match or do not match the target string.
 */
export function getVisionCount(
  values: string[],
  matchType: 'same' | 'different',
  targetValue: string
): number {
  // Remove 'none' values from the array
  const filteredValues = values.filter((value) => value !== 'none');

  if (matchType === 'same') {
    // Count values that match the targetValue
    const count = filteredValues.filter((value) => value === targetValue).length;
    return count;
  } else if (matchType === 'different') {
    // Count distinct values in the filtered array
    const distinctValues = Array.from(new Set(filteredValues));
    return distinctValues.length;
  } else {
    throw new Error('Invalid matchType. Use "same" or "different".');
  }
}
