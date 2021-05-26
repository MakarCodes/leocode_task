import { useState, ChangeEvent } from 'react';

export const useSearchLogic = (data: IUser[]) => {
  const [searchPhrase, setSearchPhrase] = useState('');

  const handleSearchOnChange = (value: string) =>
    setSearchPhrase(value);
    
  const renderFilteredUsers = data.filter(({ name }) =>
    name.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  return { searchPhrase, searchOnChange: handleSearchOnChange, renderFilteredUsers };
};
