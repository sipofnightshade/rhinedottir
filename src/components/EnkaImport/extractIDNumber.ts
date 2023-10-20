/**
 * Extracts a 5-digit ID number from a string with the format "UI_RelicIcon_<ID>_X".
 * @param inputString - The input string containing the ID number.
 * @returns The extracted 5-digit ID number or null if no match is found.
 */
function extractIdNumber(inputString: string): number | null {
  const regex: RegExp = /UI_RelicIcon_(\d{5})_\d+/;
  const match: RegExpMatchArray | null = inputString.match(regex);
  if (match && match[1]) {
    return parseInt(match[1], 10);
  } else {
    return null; // Return null if no match is found
  }
}
