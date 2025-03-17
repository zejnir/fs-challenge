'use client';

import { useState } from 'react';
import { useCreateUser } from '../hooks/useCreateUser';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';

export default function CreateUser() {
  const { createUser, loading, error } = useCreateUser();
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = {
      id: uuidv4(),
      firstName,
      lastName,
      email,
      phoneNumber,
    };

    await createUser(newUser);
    router.push('/');
  };

  return (
    <div className="bg-gray-800 h-screen py-20">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-4xl mx-auto mt-8 w-full px-5 md:px-0">
        <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <div className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <p className="px-6 py-3 w-full">Create User</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="border-b dark:border-gray-700 border-gray-200 flex flex-wrap w-full">
              <div className="px-6 py-4 w-full md:w-fit">
                <input
                  type="text"
                  className="text-gray-500 pl-3 w-full"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="px-6 py-4 w-full md:w-fit">
                <input
                  type="text"
                  className="text-gray-500 pl-3 w-full"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="px-6 py-4 w-full md:w-fit">
                <input
                  type="email"
                  className="text-gray-500 pl-3 w-full"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="px-6 py-4 w-full md:w-fit">
                <input
                  type="text"
                  className="text-gray-500 pl-3 w-full"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className="w-full flex justify-center py-5">
                <button
                  type="submit"
                  className="bg-white rounded-md px-5 py-1 text-black cursor-pointer"
                  disabled={loading}
                >
                  {loading ? 'Creating...' : 'Create'}
                </button>
              </div>
              {error && <div className="text-red-500 text-center">{error}</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
