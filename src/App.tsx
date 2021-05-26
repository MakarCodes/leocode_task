// Import custom hooks
import { useFetchLogic } from './utilities/customHooks/useFetchLogic';
import { useSearchLogic } from './utilities/customHooks/useSearchLogic';

// Import variables
import { USERS_URL, INITIAL_USERS_DATA } from './helpers/variables';

// Import components
import Spinner from './components/UI/Spinner';
import UsersList from './components/UsersList';
import SearchInput from './components/SearchInput/SearchInput';

// Import styles
import classes from './styles.module.scss';

const App = () => {
  const { data, isLoading, isError } = useFetchLogic(
    USERS_URL,
    INITIAL_USERS_DATA
  );

  const { searchPhrase, searchOnChange, renderFilteredUsers } = useSearchLogic(data);

  return (
    <div className={classes.Wrapper}>
      <h1 className={classes.Title}>Users List</h1>
      <div className={classes.Content}>
        <SearchInput
          searchPhrase={searchPhrase}
          searchOnChange={searchOnChange}
        />
        {!isLoading ? <UsersList users={renderFilteredUsers} /> : <Spinner />}
        {!isLoading && isError && (
          <p>Sorry, error has occured. Please try later.</p>
        )}
      </div>
    </div>
  );
};

export default App;
