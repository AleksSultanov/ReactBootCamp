import { UsersItem } from './Item.jsx';

export function UsersList({ users, selectedUserId, setSelectedUser }) {
  return (
    <ul>
      {users?.map((user) => {
        return  (
          <UsersItem
            user={user}
            selectedUserId={selectedUserId}
            key={user.id}
            setSelectedUser={setSelectedUser}
          />
        )
      })}
    </ul>
  );
}
