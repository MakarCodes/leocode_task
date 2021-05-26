import { ChangeEvent } from 'react';

// Import styles
import classes from './styles.module.scss';

interface IProps {
  searchPhrase: string;
  searchOnChange: (value: string) => void;
}

const SearchInput: React.FC<IProps> = ({ searchPhrase, searchOnChange }) => (
  <input
    type='text'
    placeholder='Search'
    value={searchPhrase}
    onChange={e => searchOnChange(e.target.value)}
    className={classes.StyledInput}
  />
);
export default SearchInput;
