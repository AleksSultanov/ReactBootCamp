import { useCallback, useState } from 'react';
import { MemoizedUsersList } from '../components/Users/List.jsx';
import { useAddUserMutation, useGetUsersQuery } from '../api/query/users.js';

export function Users() {
  const [isToggle, setToggle] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const { data, isLoading, error } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();

  function onToggle() {
    setToggle(!isToggle);
  }

  function onSelect(id) {
    setSelectedUserId(id);
  }

  function onUserAdd() {
    addUser({
      name: 'Valera',
    });
  }

  const memoizedOnSelect = useCallback((id) => {
    onSelect(id);
  }, []);

  return (
    <>
      {isToggle && <h1>is dark theme</h1>}
      {isLoading ? (
        'loading...'
      ) : (
        <MemoizedUsersList
          users={data}
          setSelectedUser={memoizedOnSelect}
          selectedUserId={selectedUserId}
        />
      )}
      <button onClick={onToggle}>toggle button</button>
      <button onClick={onUserAdd}>add user</button>
    </>
  );
}
