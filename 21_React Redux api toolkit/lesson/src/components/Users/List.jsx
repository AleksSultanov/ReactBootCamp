import { memo, useMemo } from 'react';
import { UsersItem } from './Item.jsx';

function someHeavyOperation(users) {
  // let startTime = performance.now();
  // while (performance.now() - startTime < 500) {}

  console.log('heavy operation');

  return users?.map((user) => {
    return {
      ...user,
      extraFields: {
        points: 0,
        role: '',
      },
    };
  });
}

export function UsersList({ users, selectedUserId, setSelectedUser }) {
  const formattedUsers = useMemo(() => {
    return someHeavyOperation(users);
  }, [users]);

  console.log('render users list');

  return (
    <ul>
      {formattedUsers &&
        formattedUsers.length > 0 &&
        formattedUsers?.map((user) => (
          <UsersItem
            user={user}
            selectedUserId={selectedUserId}
            key={user.id}
            setSelectedUser={setSelectedUser}
          />
        ))}
    </ul>
  );
}

export const MemoizedUsersList = memo(UsersList);
