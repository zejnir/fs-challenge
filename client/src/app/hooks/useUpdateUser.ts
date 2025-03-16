'use client';

import { useState } from 'react';
import { updateUserById } from '../controllers/userController';
import { IUser } from '../types/userTypes';

interface IError {
  message: string;
  code?: string;
  status?: number;
}

export default function useUpdateUserById() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateUser = async (
    id: string,
    userData: Partial<IUser>
  ): Promise<IUser | null> => {
    setIsLoading(true);
    setError(null);

    if (!id) {
      setError('User ID is required');
      setIsLoading(false);
      return null;
    }

    try {
      const updatedUser = await updateUserById(id, userData as IUser);
      return updatedUser;
    } catch (err) {
      const error = err as IError;
      setError(error.message || 'Failed to update user');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { updateUser, isLoading, error };
}
