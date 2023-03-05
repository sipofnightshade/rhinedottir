// This takes only the resistance values, so 10% would be 0.1
// and not 1.1, important to note that.

// Also, calculate the total resistances before using this fucntion.

export function calcRESMultiplier(
  baseRes: number,
  bonusRes: number,
  debuffRes: number
) {
  const res = baseRes + bonusRes - debuffRes;

  if (res < 0) {
    return 1 - res / 2;
  } else if (res >= 0 && res < 0.75) {
    return 1 - res;
  } else {
    return 1 / (4 * res + 1);
  }
}

/**
 * @EXAMPLE
 * console.log(calcRESMultiplier(0.1,0,0))
 * ▶ 0.9
 * console.log(calcRESMultiplier(0.1,0,0.4))
 * ▶ 1.15
 */
