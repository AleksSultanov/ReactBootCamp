import { useEffect, useState } from 'react';
import { usersService } from '../services/users';

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // const { users } = useLoaderData();

  async function getUsersRequest() {
    setLoading(true);

    try {
      const usersData = await usersService.getUsers();

      setTimeout(() => {
        setUsers(usersData);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError(error);
    }
  }

  return {
    users,
    error,
    isLoading,
    getUsersRequest,
  };
}
