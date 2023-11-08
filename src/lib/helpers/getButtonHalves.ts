export function getButtonHalves(dmgType: string, el: string) {
  let top = '';
  let bot = '';

  if (dmgType === 'melt' && el === 'pyro') {
    top = 'bg-dark-pyro';
    bot = 'bg-dark-cryo';
  } else if (dmgType === 'melt' && el === 'cryo') {
    top = 'bg-dark-cryo';
    bot = 'bg-dark-pyro';
  }

  if (dmgType === 'vaporize' && el === 'pyro') {
    top = 'bg-dark-pyro';
    bot = 'bg-dark-hydro';
  } else if (dmgType === 'vaporize' && el === 'hydro') {
    top = 'bg-dark-hydro';
    bot = 'bg-dark-pyro';
  }

  if (dmgType === 'spread') {
    top = 'bg-dark-dendro';
    bot = 'bg-dark-electro';
  }

  if (dmgType === 'aggravate') {
    top = 'bg-dark-electro';
    bot = 'bg-dark-dendro';
  }

  if (dmgType === 'overloaded') {
    top = 'bg-dark-pyro';
    bot = 'bg-dark-electro';
  }

  if (dmgType === 'superconduct') {
    top = 'bg-dark-cryo';
    bot = 'bg-dark-electro';
  }
  if (dmgType === 'electrocharged') {
    top = 'bg-dark-electro';
    bot = 'bg-dark-hydro';
  }
  if (dmgType === 'hydroSwirl') {
    top = 'bg-dark-hydro';
    bot = 'bg-dark-anemo';
  }
  if (dmgType === 'pyroSwirl') {
    top = 'bg-dark-pyro';
    bot = 'bg-dark-anemo';
  }
  if (dmgType === 'cryoSwirl') {
    top = 'bg-dark-cryo';
    bot = 'bg-dark-anemo';
  }
  if (dmgType === 'electroSwirl') {
    top = 'bg-dark-electro';
    bot = 'bg-dark-anemo';
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
      top = `bg-dark-${dmgType}`;
      bot = `bg-dark-${dmgType}`;
      break;
  }

  return { top, bot };
}
