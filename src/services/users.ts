import { User } from 'declarations';
import { api } from 'services';

export async function getAllUsers() {
  const response = await api.get<User[]>('/users');

  return response.data;
}

export async function getUser(id: User['id']) {
  const response = await api.get<User>(`/users/${id}`);

  return response.data;
}

export async function createUser(data: User) {
  const response = await api.post<User>('/users', data);

  return response.data;
}

export async function updateUser({ id, data }: { id: User['id']; data: User }) {
  const response = await api.put<User>(`/users/${id}`, data);

  return response.data;
}

export async function deleteUser(id: User['id']) {
  const response = await api.delete<User>(`/users/${id}`);

  return response.data;
}
