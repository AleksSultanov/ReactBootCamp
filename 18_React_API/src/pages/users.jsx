import { Await, Link, useLoaderData } from 'react-router-dom';
// import Albums from '../components/Albums';
import { Suspense, lazy, useEffect, useState } from 'react';
import { usersService } from '../api/services/users.js';
import { useUsers } from '../api/hooks/useUsers.js';

const LazyAlbums = lazy(() => import('./../components/Albums/index.jsx'));

export function Users() {
  // const { users } = useLoaderData();

  const { users, isLoading, getUsersRequest } = useUsers();

  return (
    <>
      <h1>Users</h1>
      {/* <Suspense fallback={<p>Loading..</p>}>
        <Await resolve={users}>
          {(resolvedUsers) => {
            return (
              <ul>
                {resolvedUsers?.length > 0 &&
                  resolvedUsers.map((user) => {
                    return (
                      <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                      </li>
                    );
                  })}
              </ul>
            );
          }}
        </Await>
      </Suspense> */}
      {isLoading ? (
        'loading...'
      ) : (
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id} className="userName">
                {user.name}
              </li>
            );
          })}
        </ul>
      )}
      <Suspense fallback={<p>Loading</p>}>
        <LazyAlbums />
      </Suspense>
      <button onClick={getUsersRequest}>get users</button>
    </>
  );
}
