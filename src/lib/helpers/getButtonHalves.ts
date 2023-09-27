export function getButtonHalves(dmgType: string, el: string) {
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
