import { apiCreateUser, apiFetch, apiUpdateUser } from '../services/api';
import { IUser } from '../types/userTypes';

export async function fetchUsers(query: string) {
  return apiFetch(`${process.env.NEXT_PUBLIC_API_URL}/users?query=${query}`);
}

export async function fetchUserById(id: string) {
  return apiFetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`);
}

export async function updateUserById(id: string, data: IUser) {
  return apiUpdateUser(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, data);
}

export async function createUser(data: IUser) {
  return apiCreateUser(`${process.env.NEXT_PUBLIC_API_URL}/users`, data);
}
