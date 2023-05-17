import { User } from 'declarations';
import { api } from 'services';

export async function getAllUsers() {
  const response = await api.get<User[]>('/users');

  return response.data;
}

export async function createUser(data: User) {
  const response = await api.post<User>('/users', data);

  return response.data;
}

export async function updateUser(id: User['id'], data: User) {
  const response = await api.post<User>(`/users/${id}`, data);

  return response.data;
}
