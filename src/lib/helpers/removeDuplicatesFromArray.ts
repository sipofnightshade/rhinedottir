export function removeDuplicatesFromArray<T>(array: T[]): T[] {
  const uniqueSet = new Set(array.map((item) => JSON.stringify(item)));
  return Array.from(uniqueSet).map((itemString) => JSON.parse(itemString));
}
