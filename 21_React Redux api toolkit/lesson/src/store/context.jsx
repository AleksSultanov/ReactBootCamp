import { createContext, useState } from 'react';
import { useUsers } from '../api/hooks/useUsers';

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const { users, isLoading } = useUsers();
  const [selectedUserId, setSelectedUserId] = useState(null);

  function onSelectUserId(id) {
    setSelectedUserId(id);
  }

  return (
    <UsersContext.Provider
      value={{
        users,
        isLoading,
        selectedUserId,
        onSelectUserId,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}


