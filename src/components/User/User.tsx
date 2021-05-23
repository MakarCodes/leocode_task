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
    <div className={classes.Item}>
      <span className={classes.Lp}>{number}</span>
      <span className={classes.Name}>{name}</span>
      <span className={classes.Username}>{username}</span>
    </div>
  );
};

export default User;
