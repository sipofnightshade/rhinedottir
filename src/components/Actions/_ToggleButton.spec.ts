import { render, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import ToggleButton from './_ToggleButton.svelte';

describe('ToggleButton', () => {
  test('renders component', () => {
    const { getByRole, getByTestId } = render(ToggleButton);
    const toggleButton = getByRole('button');
    expect(toggleButton).toBeInTheDocument();
    const actionButton = getByTestId('action-button');
    expect(actionButton).toBeInTheDocument();
  });

  test('renders component with props', () => {
    const { getByRole, getByTestId } = render(ToggleButton, {
      element: 'anemo',
      data: {
        name: 'Uprising Whirlwind',
        url: 'UI_Talent_S_PlayerWind_02',
        description:
          'Guiding the path of the wind currents, you summon a forward-moving tornado that pulls objects and opponents towards itself, dealing continuous Anemo DMG.\n\n**Elemental Absorption**\nIf the tornado comes into contact with Hydro/Pyro/Cryo/Electro, it will deal additional elemental DMG of that type.\nElemental Absorption may only occur once per use.',
        level: 1,
        constellation: 2,
        target: 'self',
        actionType: 'toggle',
        values: [{ scaling: 'energy', coef: 0.16 }]
      }
    });

    const toggleButton = getByRole('button');
    const actionButton = getByTestId('action-button');
    expect(toggleButton).toBeInTheDocument();
    expect(actionButton).toBeInTheDocument();
  });
});
