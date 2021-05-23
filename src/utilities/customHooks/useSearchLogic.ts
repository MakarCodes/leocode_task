import { useState, ChangeEvent } from 'react';

export const useSearchLogic = () => {
  const [searchPhrase, setSearchPhrase] = useState('');

  const handleSearchOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchPhrase(e.target.value);

  return { searchPhrase, searchOnChange: handleSearchOnChange };
};
