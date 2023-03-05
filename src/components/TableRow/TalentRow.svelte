<script lang="ts">
  import type { Hit } from '$lib/data/TalentsTypes';
  import type { DamageType } from '$lib/types/global';
  import TalentValues from '$lib/data/TalentValues.json';
  import Cell from './Cell.svelte';

  // import calculators
  import { calcDEFMultiplier } from '$lib/calculators/calcDEFMultiplier';
  import { calcRESMultiplier } from '$lib/calculators/calcRESMultiplier';
  import { calcCritDamage } from '$lib/calculators/calcCritDamage';
  import { calcSpecialMultiplier } from '$lib/calculators/calcSpecialMultiplier';
  import { calcDamage } from '$lib/calculators/calcDamage';

  export let type: 'combat1' | 'combat2' | 'combat3';
  export let data: Hit;
  export let stats: any;
  export let charLvl: number;
  export let talentLvl: number;
  export let el: DamageType;

  // temporary values
  const values = TalentValues.traveleranemo[type];
  const defIgnore = 0;
  const defReduce = 0;
  const baseRes = 0.1;
  const bonusRes = 0;
  const debuffRes = 0;

  // talent element
  const element = data.elemental ? data.elemental : el;

  // character damage values and multipliers
  // const SpecialMultiplier = calcSpecialMultiplier(buffs.special);
  const SpecialMultiplier = 1;
  const FlatDMG = 0;
  const DMGBonus = 0;
  const AmplifyingMultipler = 1;

  // target stats
  const DMGReduction = 0;
  const DEFMultiplier = calcDEFMultiplier(charLvl, 100, defReduce, defIgnore);
  const RESMultiplier = calcRESMultiplier(baseRes, bonusRes, debuffRes);

  $: FinalDMG = data.damage.reduce((total, damage) => {
    const BaseDMG =
      stats[damage.scaling] * values[damage.param as keyof typeof values][talentLvl];

    const calculatedDMG = calcDamage(
      BaseDMG,
      SpecialMultiplier,
      FlatDMG,
      DMGBonus,
      DMGReduction,
      DEFMultiplier,
      RESMultiplier,
      AmplifyingMultipler
    );
    return total + calculatedDMG;
  }, 0);
</script>

<div class="grid grid-cols-24 px-1 py-1 text-tb">
  <Cell align="start" col="col-span-2" value={data.tag} />
  <Cell align="start" col="col-span-10 text-slate-400" value={data.name} />
  <Cell align="center" col="col-span-2">
    <img class="h-6 w-6" src="/images/elements/{el}.svg" alt="" />
  </Cell>
  <Cell align="end" col="col-span-4 text-slate-400" value={FinalDMG.toFixed(0)} />
  <Cell align="end" col="col-span-6" value={(FinalDMG * 1.5).toFixed(0)} />
</div>
