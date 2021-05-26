import React from 'react';

// Import components
import User from '../User/User';

// Import styles
import classes from './styles.module.scss';

interface IProps {
  users: IUser[];
}

const UsersList: React.FC<IProps> = ({ users }) => {
  const renderUsersList = users.map(({ id, name, username }) => (
    <User key={id} name={name} username={username} />
  ));
  return (
    <>
      {users.length ? (
        <ul className={classes.List} data-testid='users-list'>
          {renderUsersList}
        </ul>
      ) : (
        <p data-testid='no-results'>No results...</p>
      )}
    </>
  );
};

export default UsersList;
