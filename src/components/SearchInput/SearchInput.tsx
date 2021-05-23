import { ChangeEvent } from 'react';

// Import styles
import classes from './styles.module.scss';

interface IProps {
  searchPhrase: string;
  searchOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<IProps> = ({ searchPhrase, searchOnChange }) => (
  <input
    type='text'
    placeholder='Search'
    value={searchPhrase}
    onChange={e => searchOnChange(e)}
    className={classes.StyledInput}
  />
);
export default SearchInput;
