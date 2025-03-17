import { useState } from 'react';
import { createUser as apiCreateUser } from '../controllers/userController';
import { IUser } from '../types/userTypes';

export function useCreateUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  async function createUser(data: IUser) {
    setLoading(true);
    setError(null);

    try {
      const result = await apiCreateUser(data);
      setUser(result);
      return result;
    } catch (err) {
      console.error('API Fetch error:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { createUser, loading, error, user };
}
