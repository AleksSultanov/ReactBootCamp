import { useEffect, useState } from 'react';

export function useUsers() {
  const [users, setUsers] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {}, []);

  return {
    users,
    isLoading,
  };
}
