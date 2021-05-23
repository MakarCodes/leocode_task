import { render, screen } from '@testing-library/react';

// Immport components
import User from '../index';

const MOCKED_USER = {
  number: 1,
  name: 'Leanne Graham',
  username: 'Bret',
};

describe('User component render correctly if', () => {
  it('renders lp number', () => {
    render(
      <User
        name={MOCKED_USER.name}
        username={MOCKED_USER.username}
        number={MOCKED_USER.number}
      />
    );
    const number = screen.getByTestId('user-lp');
    const name = screen.getByTestId('user-name');
    const username = screen.getByTestId('user-username');

    expect(name.textContent).toBe(MOCKED_USER.name);
    expect(username.textContent).toBe(MOCKED_USER.username);
    expect(number.textContent).toBe(MOCKED_USER.number.toString());
  });
});
