import Link from 'next/link';

export default function CreateUserButton() {
  return (
    <div className="flex justify-center mt-4">
      <Link
        href="/create-user"
        className="bg-gray-50 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
      >
        Create User
      </Link>
    </div>
  );
}
