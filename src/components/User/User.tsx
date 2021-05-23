import React from 'react';

// Import styles
import classes from './styles.module.scss';

interface IProps {
  name: string;
  username: string;
  number: number;
}

const User: React.FC<IProps> = ({ name, username, number }) => {
  return (
    <div className={classes.Item} data-testid='user-item'>
      <span className={classes.Lp} data-testid='user-lp'>
        {number}
      </span>
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
