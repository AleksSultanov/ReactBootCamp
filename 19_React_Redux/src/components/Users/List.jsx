import { UsersItem } from './Item.jsx';

export function UsersList({ users, selectedUserId, setSelectedUser, className }) {
  return (
    <ul className = {className}>
      {users?.map((user) => (
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
