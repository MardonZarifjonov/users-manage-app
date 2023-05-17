import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { InputProps } from 'components/input';
import { User } from 'declarations';
import { useDebounceValue } from 'hooks';
import { useEffect, useMemo, useState } from 'react';
import { createUser, getAllUsers } from 'services/users';

export function useMainPage() {
  const queryClient = useQueryClient();

  const userQuery = useQuery({ queryKey: ['users'], queryFn: getAllUsers });
  const userCreate = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
  // const [users, setUsers] = useState<User[]>([]);
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

    return userQuery?.data?.filter((user) =>
      user.email.toLowerCase().includes(debouncedValue.toLowerCase())
    );
  }, [debouncedValue, userQuery.data]);

  const handleSearchChange: InputProps['onChange'] = (event) => {
    setSearchValue(event.target.value);
  };

  const handleUserAdd = (data: User) => {
    const isUserExists = userQuery?.data?.find(
      (user) => user.email === data.email
    );
    if (!isUserExists) {
      userCreate.mutate(data);
    }
  };

  console.log(userQuery.data);

  return {
    open,
    users: displayedUsers,
    loading: userQuery.isLoading || userQuery.isFetching,
    searchValue,
    handleSearchChange,
    handleModal: setOpen,
    handleUserAdd,
  };
}
