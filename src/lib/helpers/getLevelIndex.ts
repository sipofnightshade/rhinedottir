import { labels } from '$lib/data/Levels';

// Define a function that takes two parameters, ascension and level, and returns the index of the closest value in the array
export function getLevelIndex(ascension: number, level: number): number {
  // Check if the parameters are valid
  if (ascension < 0 || ascension > 6 || level < 1 || level > 90) {
    // Return -1 to indicate an error
    return -1;
  }

  // Define an array of the maximum levels for each ascension
  const maxLevels: number[] = [20, 40, 50, 60, 70, 80, 90];

  // Find the closest maximum level for the given ascension
  const closestMaxLevel: number = maxLevels[ascension];

  // Find the difference between the given level and the closest maximum level
  const diff: number = Math.abs(level - closestMaxLevel);

  // If the difference is less than or equal to 5, return the index of the closest maximum level
  if (diff <= 5) {
    return labels.lvl.indexOf(closestMaxLevel + '/' + closestMaxLevel);
  }

  // Otherwise, return the index of the previous maximum level
  else {
    return labels.lvl.indexOf(maxLevels[ascension - 1] + '/' + closestMaxLevel);
  }
}
