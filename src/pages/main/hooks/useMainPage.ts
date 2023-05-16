import { InputProps } from 'components/input';
import usersDB from 'data.json';
import { User } from 'declarations';
import { useDebounceValue } from 'hooks';
import { useMemo, useState } from 'react';

export function useMainPage() {
  const [users, setUsers] = useState<User[]>(usersDB);
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounceValue(searchValue);
  const displayedUsers = useMemo(() => {
    // const filteredUsers = users.filter((user) =>
    //   user.email.toLowerCase().includes(debouncedValue.toLowerCase())
    // );
    // if (filteredUsers.length > 0) {
    //   return filteredUsers;
    // }

    return users.filter((user) =>
      user.email.toLowerCase().includes(debouncedValue.toLowerCase())
    );
  }, [debouncedValue, users]);

  const handleSearchChange: InputProps['onChange'] = (event) => {
    setSearchValue(event.target.value);
  };
  console.log(displayedUsers);

  return { users: displayedUsers, searchValue, handleSearchChange };
}
