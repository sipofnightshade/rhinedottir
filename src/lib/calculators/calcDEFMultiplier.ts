const Lvls = [1, 20, 20, 40, 40, 50, 50, 60, 60, 70, 70, 80, 80, 90];

export function calcDEFMultiplier(
  charLvl: number,
  enemyLvl: number,
  defReduce: number,
  defIgnore: number
): number {
  //Calculate the base value for the character and the enemy
  const charVal = Lvls[charLvl] + 100;
  const enemyVal = enemyLvl + 100;

  //Calculate the reduction and ignore multipliers
  const defReduceMult = 1 - defReduce;
  const defIgnoreMult = 1 - defIgnore;
  const k = (1 - defReduce) * (1 - defIgnore);

  //Calculate and return the final enemy defense multiplier
  return charVal / (charVal + enemyVal * defReduceMult * defIgnoreMult);
}

/**
 * @EXAMPLE
 * console.log(calcDefenseMultiplier(7,90,0,0))
 * ▶ 0.45714285714285713
 * console.log(calcDefenseMultiplier(13,90,0,0.6))
 * ▶ 0.7142857142857143
 */
