interface ModdedClasses {
  [key: string]: string;
}

export function formatText(text: string): string {
  // Bold text enclosed in ** and convert \n to line breaks
  const formattedText: string = text
    .split('**')
    .map((part, index) => {
      return index % 2 === 0
        ? part.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br/>')
        : `<strong>${part}</strong>`;
    })
    .join('');

  // Map elemental phrases to their corresponding CSS classes
  const customClasses: ModdedClasses = {
    'Anemo DMG': 'text-anemo',
    'Anemo RES': 'text-anemo',
    'Pyro DMG': 'text-pyro',
    'Pyro RES': 'text-pyro',
    'Hydro DMG': 'text-hydro',
    'Hydro RES': 'text-hydro',
    'Geo DMG': 'text-geo',
    'Geo RES': 'text-geo',
    'Dendro DMG': 'text-dendro',
    'Dendro RES': 'text-dendro',
    'Electro DMG': 'text-electro',
    'Electro RES': 'text-electro',
    'Cryo DMG': 'text-cryo',
    'Cryo RES': 'text-cryo',
    'Physical DMG': 'text-gray-500',
    'Physical RES': 'text-gray-500',
    Aggravate: 'text-electro',
    Spread: 'text-dendro',
    Burning: 'text-pyro',
    Bloom: 'text-dendro',
    Hyperbloom: 'text-dendro',
    Burgeon: 'text-dendro',
    Overloaded: 'text-pyro',
    Superconduct: 'text-cryo',
    'Electro-Charged': 'text-electro',
    Crystallize: 'text-geo',
    Swirl: 'text-anemo',
    MODIFIED: 'text-[#C2B396] tracking-wide',
    Pneuma: 'text-amber-200 ',
    Ousia: 'text-indigo-300 '
  };

  // Apply class and bold to specific phrases
  const regex: RegExp = new RegExp(
    `\\b(${Object.keys(customClasses).join('|')})\\b`,
    'gi'
  );

  return formattedText.replace(regex, (match: string) => {
    const cssClass: string = customClasses[match];
    return `<strong class="${cssClass}">${match}</strong>`;
  });
}
