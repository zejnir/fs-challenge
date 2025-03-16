import { useState, useEffect } from 'react';
import { fetchUsers } from '../controllers/userController';
import { IUser } from '../types/userTypes';

export default function useFetchUsers(query: string): IUser[] {
  const [users, setUsers] = useState<IUser[]>([]);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    async function getUsers() {
      const data = await fetchUsers(debouncedQuery);
      setUsers(data);
    }
    getUsers();
  }, [debouncedQuery]);

  return users;
}
