import { User } from 'declarations';
import { api } from 'services';

export async function getAllUsers() {
  const response = await api.get<User[]>('/users');

  return response.data;
}
