import { apiFetch } from '../services/api';

export async function fetchUsers(query: string) {
  return apiFetch(`${process.env.NEXT_PUBLIC_API_URL}/users?query=${query}`);
}

export async function fetchUserById(id: string) {
  console.log('ovdje nisam');
  console.log(id);
  return apiFetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`);
}
