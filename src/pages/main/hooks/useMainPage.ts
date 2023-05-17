import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { InputProps } from 'components/input';
import { User } from 'declarations';
import { useDebounceValue } from 'hooks';
import { useMemo, useState } from 'react';
import { createUser, getAllUsers, getUser, updateUser } from 'services/users';

export function useMainPage() {
  const queryClient = useQueryClient();
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
  const usersQuery = useQuery({ queryKey: ['users'], queryFn: getAllUsers });
  const userQuery = useQuery({
    queryKey: ['user', selectedId],
    queryFn: () => getUser(selectedId),
    enabled: !!selectedId,
  });

  const userCreate = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const userUpdate = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      queryClient.invalidateQueries({ queryKey: ['user', selectedId] });
    },
  });

  const [searchValue, setSearchValue] = useState('');
  const [open, setOpen] = useState(false);
  const debouncedValue = useDebounceValue(searchValue);
  const displayedUsers = useMemo(() => {
    return usersQuery?.data?.filter((user) =>
      user.email.toLowerCase().includes(debouncedValue.toLowerCase())
    );
  }, [debouncedValue, usersQuery.data]);

  const handleSearchChange: InputProps['onChange'] = (event) => {
    setSearchValue(event.target.value);
  };

  const handleUserAdd = async (data: User) => {
    const isUserExists = usersQuery?.data?.find(
      (user) => user.email === data.email
    );
    if (!isUserExists) {
      await userCreate.mutate(data);
    } else {
      await userUpdate.mutate({ id: selectedId, data });
    }

    setOpen(false);
  };

  const handleUserSelect = (id: User['id']) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleModal = (isOpen: boolean) => {
    setOpen(isOpen);
    !isOpen && setSelectedId(undefined);
  };

  return {
    open,
    users: displayedUsers,
    user: userQuery.data,
    singleUserLoading: userQuery.isLoading,
    loading: usersQuery.isLoading || usersQuery.isFetching,
    creating: userCreate.isLoading,
    searchValue,
    handleSearchChange,
    handleModal,
    handleUserAdd,
    handleUserSelect,
  };
}
