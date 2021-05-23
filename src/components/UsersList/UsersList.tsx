import React from 'react';

// Import components
import User from '../User/User';

// Import styles
import classes from './styles.module.scss';

interface IProps {
  users: IUser[];
}

const UsersList: React.FC<IProps> = ({ users }) => {
  const renderUsersList = users.map(({ id, name, username }, index) => (
    <User key={id} name={name} username={username} number={index + 1} />
  ));
  return (
    <>
      {users.length ? (
        <div className={classes.List}>{renderUsersList}</div>
      ) : (
        <p>No results...</p>
      )}
    </>
  );
};

export default UsersList;
