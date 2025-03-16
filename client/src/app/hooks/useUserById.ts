'use client';

import { useState, useEffect } from 'react';
import { fetchUserById } from '../controllers/userController';
import { IUser } from '../types/userTypes';

export default function useUserById(id: string): IUser | null {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    async function getUser() {
      const data = await fetchUserById(id);
      console.log('ovdje sam');
      console.log('data', data);
      setUser(data);
    }
    getUser();
  }, [id]);

  return user;
}
