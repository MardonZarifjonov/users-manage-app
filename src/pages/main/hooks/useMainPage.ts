import { InputProps } from 'components/input';
import usersDB from 'data.json';
import { User } from 'declarations';
import { useDebounceValue } from 'hooks';
import { useEffect, useMemo, useState } from 'react';

export function useMainPage() {
  const [users, setUsers] = useState<User[]>(usersDB);
  const [searchValue, setSearchValue] = useState('');
  const [open, setOpen] = useState(false);
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

  const handleUserAdd = (data: User) => {
    const isUserExists = users.find((user) => user.email === data.email);
    if (!isUserExists) {
      setUsers([...users, { ...data }]);
    }
  };

  useEffect(() => {}, [users]);

  return {
    users: displayedUsers,
    searchValue,
    handleSearchChange,
    handleModal: setOpen,
    open,
    handleUserAdd,
  };
}
