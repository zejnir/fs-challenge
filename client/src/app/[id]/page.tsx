'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import useUserById from '../../app/hooks/useUserById';
import useUpdateUserById from '../hooks/useUpdateUser';
import { IUser } from '../../app/types/userTypes';

export default function EditUser() {
  const params = useParams();
  const { id } = params;
  const user = typeof id === 'string' ? useUserById(id) : null;
  const { updateUser, isLoading: isUpdating, error } = useUpdateUserById();

  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setPhoneNumber(user.phoneNumber);
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id || typeof id !== 'string') {
      console.error('Invalid user ID');
      return;
    }

    const updatedUser: Partial<IUser> = {
      firstName,
      lastName,
      email,
      phoneNumber,
    };
    await updateUser(id, updatedUser);
  };

  if (!user) {
    return (
      <div className="bg-gray-800 h-screen py-20 w-full flex justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-800 h-screen py-20">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-4xl mx-auto mt-8 w-full px-5 md:px-0">
        <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full">
          <div className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full">
            <div>
              <p className="px-6 py-3 w-full">Edit User</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 flex flex-wrap w-full">
              <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-full md:w-fit">
                <input
                  type="text"
                  className="text-gray-500 pl-3 w-full"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-full md:w-fit">
                <input
                  type="text"
                  className="text-gray-500 pl-3 w-full"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-full md:w-fit">
                <input
                  type="text"
                  className="text-gray-500 pl-3 w-full"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-full md:w-fit">
                <input
                  type="text"
                  className="text-gray-500 pl-3 w-full"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="w-full flex justify-center py-5">
                <button
                  type="submit"
                  className="bg-white rounded-md px-5 py-1 text-black cursor-pointer"
                  disabled={isUpdating}
                >
                  {isUpdating ? 'Saving...' : 'Save'}
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
