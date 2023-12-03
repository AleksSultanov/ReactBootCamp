export function UsersItem({ user = {}, selectedUserId, setSelectedUser }) {
  return (
    <li onClick={() => setSelectedUser(user.id)}>
      <span>{user.name}</span>
      {selectedUserId === user.id && <span> selected user</span>}
    </li>
  );
}
