export function sortObjectByValue(obj: Record<string, number>): [string, number][] {
  const entries = Object.entries(obj);
  entries.sort((a, b) => b[1] - a[1]);
  return entries;
}
