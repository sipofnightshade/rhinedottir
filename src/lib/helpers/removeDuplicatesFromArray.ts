/**
 * Removes duplicates from an array of objects based on unique properties,
 * and generates new unique IDs for each item using window.crypto.randomUUID().
 * @template T - The type of objects in the array.
 * @param {T[]} array - The array of objects.
 * @param {keyof T} ignoredProperty - The property to ignore during the comparison.
 * @returns {T[]} - The array with duplicates removed and new unique IDs generated.
 */
export function removeDuplicatesFromArray<T>(array: T[], ignoredProperty: keyof T): T[] {
  const uniqueSet = new Set(
    array.map((item) => {
      const clone = { ...item };
      delete clone[ignoredProperty];
      return JSON.stringify(clone);
    })
  );

  const uniqueArray = Array.from(uniqueSet).map((itemString) => {
    const clone = JSON.parse(itemString);
    clone[ignoredProperty] = window.crypto.randomUUID(); // Generate a new unique ID
    return clone as T;
  });

  return uniqueArray;
}
