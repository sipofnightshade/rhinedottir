export function calcSpecialMultiplier(
  talentSpecialMultiplier = 0,
  actionSpecialMultiplier = 0
) {
  return 1 + talentSpecialMultiplier + actionSpecialMultiplier;
}
