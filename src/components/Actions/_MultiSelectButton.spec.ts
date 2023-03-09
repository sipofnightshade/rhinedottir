import { render, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import MultiSelectButton from './_MultiSelectButton.svelte';
import { Talents } from '$lib/data/Talents';
import type { Action, TalentRecord } from '$lib/types/talents';

describe('MultiSelectButton', () => {
  test('renders component', () => {
    const { getByRole, getByTestId } = render(MultiSelectButton);
    const multiselectButton = getByRole('button');
    expect(multiselectButton).toBeInTheDocument();
    const actionButton = getByTestId('action-button');
    expect(actionButton).toBeInTheDocument();
  });

  test('renders component with props', () => {
    const { getByRole, getByTestId } = render(MultiSelectButton, {
      element: 'anemo',
      data: {
        name: 'Intertwined Winds - Elemental Absorption',
        url: 'UI_Talent_S_PlayerWind_04',
        description:
          'If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.',
        level: 1,
        constellation: 6,
        target: 'enemy',
        actionType: 'multiSelect',
        values: [
          { scaling: 'pyroRes', coef: -0.2 },
          { scaling: 'hydroRes', coef: -0.2 },
          { scaling: 'electroRes', coef: -0.2 },
          { scaling: 'cryoRes', coef: -0.2 }
        ]
      }
    });

    const multiselectButton = getByRole('button');
    const actionButton = getByTestId('action-button');
    expect(multiselectButton).toBeInTheDocument();
    expect(actionButton).toBeInTheDocument();
  });

  // test('should render MultiSelectButton component for all multiselect actions in each TalentRecord', () => {
  //   for (const character in Talents) {
  //     Talents[character].actions.forEach((action: Action) => {
  //       if (action.actionType === 'multiSelect') {
  //         const { getByRole, getByTestId } = render(MultiSelectButton, {
  //           element: 'anemo',
  //           data: { ...action }
  //         });

  //         const multiselectButton = getByRole('button');
  //         expect(multiselectButton).toBeInTheDocument();

  //         const actionButton = getByTestId('action-button');
  //         expect(actionButton).toBeInTheDocument();
  //       }
  //     });
  //   }
  // });
});
