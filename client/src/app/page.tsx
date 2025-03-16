'use client';

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserTable from './components/UserTable';
import useFetchUsers from './hooks/useFetchUsers';

export default function Index() {
  const [query, setQuery] = useState('');
  const users = useFetchUsers(query);

  return (
    <div className="bg-gray-800 h-screen py-20">
      <SearchBar query={query} setQuery={setQuery} />
      <UserTable users={users} />
    </div>
  );
}
