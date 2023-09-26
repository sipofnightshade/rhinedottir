<script lang="ts">
  // import { combos, type ButtonDamage, type Damage } from '$lib/stores/comboStore';
  import { character } from '$lib/stores/characterStore';

  export let btn: any;
  $: console.log(btn);

  const weapon = $character.selected.weapon;

  let dmgTypes = Object.keys(btn.damage);
  let currentIndex = 0;
  let currentDmgType = dmgTypes[currentIndex];

  function switchDamage() {
    currentIndex = (currentIndex + 1) % dmgTypes.length;
    currentDmgType = dmgTypes[currentIndex];
    // combos.changeBtnReaction(rowIndex, btnIndex, currentDmgType as ButtonDamage);
  }

  const btnImage = btn.url
    ? `/images/talents/${btn.url}.webp`
    : `/images/ui/${weapon}.webp`;

  function getButtonHalves(dmgType: string, el: string) {
    let top = '';
    let bot = '';

    if (dmgType === 'melt' && el === 'pyro') {
      top = 'bg-pyro';
      bot = 'bg-cryo';
    } else if (dmgType === 'melt' && el === 'cryo') {
      top = 'bg-cryo';
      bot = 'bg-pyro';
    }

    if (dmgType === 'vaporize' && el === 'pyro') {
      top = 'bg-pyro';
      bot = 'bg-hydro';
    } else if (dmgType === 'vaporize' && el === 'hydro') {
      top = 'bg-hydro';
      bot = 'bg-pyro';
    }

    if (dmgType === 'spread') {
      top = 'bg-dendro';
      bot = 'bg-electro';
    }

    if (dmgType === 'aggravate') {
      top = 'bg-electro';
      bot = 'bg-dendro';
    }

    if (dmgType === 'overloaded') {
      top = 'bg-pyro';
      bot = 'bg-electro';
    }

    if (dmgType === 'superconduct') {
      top = 'bg-cryo';
      bot = 'bg-electro';
    }
    if (dmgType === 'electrocharged') {
      top = 'bg-electro';
      bot = 'bg-hydro';
    }
    if (dmgType === 'hydroSwirl') {
      top = 'bg-hydro';
      bot = 'bg-anemo';
    }
    if (dmgType === 'pyroSwirl') {
      top = 'bg-pyro';
      bot = 'bg-anemo';
    }
    if (dmgType === 'cryoSwirl') {
      top = 'bg-cryo';
      bot = 'bg-anemo';
    }
    if (dmgType === 'electroSwirl') {
      top = 'bg-electro';
      bot = 'bg-anemo';
    }

    if (dmgType === 'physical') {
      top = 'bg-slate-700';
      bot = 'bg-slate-700';
    }

    switch (dmgType) {
      case 'pyro':
      case 'dendro':
      case 'hydro':
      case 'cryo':
      case 'electro':
      case 'geo':
      case 'anemo':
        top = `bg-${dmgType}`;
        bot = `bg-${dmgType}`;
        break;
    }

    return { top, bot };
  }

  $: damageType = currentDmgType === 'base' ? btn.elemental : currentDmgType;
  $: classes = getButtonHalves(damageType, btn.elemental);
</script>

<button
  class="mr-2 flex h-[70px] w-10 flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-slate-600"
  on:click={switchDamage}
>
  <div
    class="flex h-full w-full items-center justify-center border-b border-slate-700 border-opacity-0 {classes.top}"
    class:border-opacity-100={classes.top !== classes.bot}
  >
    <span class="mt-1 text-slate-100">{btn.tag}</span>
  </div>
  <div
    class="relative flex h-full w-full items-center justify-center border-t border-slate-700 border-opacity-0 transition-all {classes.bot}"
    class:border-opacity-100={classes.top !== classes.bot}
  >
    <img src={btnImage} class="top-1 mb-1 h-7 w-7" alt="Talent" />
  </div>
</button>
