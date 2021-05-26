import React from 'react';

// Import styles
import classes from './styles.module.scss';

interface IProps {
  name: string;
  username: string;
}

const User: React.FC<IProps> = ({ name, username }) => {
  return (
    <div className={classes.Item} data-testid='user-item'>
      <span className={classes.Name} data-testid='user-name'>
        {name}
      </span>
      <span className={classes.Username} data-testid='user-username'>
        {username}
      </span>
    </div>
  );
};

export default User;
