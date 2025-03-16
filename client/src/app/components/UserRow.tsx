import { IUser } from '../types/userTypes';

interface UserRowProps {
  user: IUser;
}

export default function UserRow({ user }: UserRowProps) {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {user.firstName}
      </td>
      <td className="px-6 py-4">{user.lastName}</td>
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4">{user.phoneNumber}</td>
      <td className="px-6 py-4">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
}
