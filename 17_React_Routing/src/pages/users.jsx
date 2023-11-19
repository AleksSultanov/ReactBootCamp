import { Link, useLoaderData } from 'react-router-dom';

export function Users() {
  const { users } = useLoaderData();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users?.length > 0 &&
          users.map((user) => {
            return (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
