import { render, screen } from '@testing-library/react';

// Immport components
import UserList from '../index';

// Import helpers
import { mockedUsers } from '../helpers';

describe('UserList component render correctly if', () => {
  it('renders correct number of users', () => {
    render(<UserList users={mockedUsers} />);

    const usersList = screen.getByTestId('users-list');

    expect(usersList.childElementCount).toEqual(mockedUsers.length);
  });
  it('renders information about result if there is no users', () => {
    render(<UserList users={[]} />);

    const info = screen.getByTestId('no-results');

    expect(info.textContent).toBe('No results...');
  });
});
