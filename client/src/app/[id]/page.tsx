'use client';

import { useParams } from 'next/navigation';
import useUserById from '../../app/hooks/useUserById';

export default function EditUser() {
  const params = useParams();
  const { id } = params;
  const user = typeof id === 'string' ? useUserById(id) : null;

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
          <form>
            <div className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 flex flex-wrap w-full">
              <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-full md:w-fit">
                <input
                  type="text"
                  className="text-gray-500 pl-3 w-full"
                  placeholder={user.firstName}
                />
              </div>
              <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-full md:w-fit">
                <input
                  type="text"
                  className="text-gray-500 pl-3 w-full"
                  placeholder={user.lastName}
                />
              </div>
              <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-full md:w-fit">
                <input
                  type="text"
                  className="text-gray-500 pl-3 w-full"
                  placeholder={user.email}
                />
              </div>
              <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-full md:w-fit">
                <input
                  type="text"
                  className="text-gray-500 pl-3 w-full"
                  placeholder={user.phoneNumber}
                />
              </div>
              <div className="w-full flex justify-center py-5">
                <button className="bg-white rounded-md px-5 py-1 text-black cursor-pointer">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
