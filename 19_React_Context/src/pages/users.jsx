import { Await, Link, useLoaderData } from 'react-router-dom';
// import Albums from '../components/Albums';
import { Suspense, lazy, useContext, useEffect, useState } from 'react';
import { UsersList } from '../components/Users/List.jsx';
import { usersService } from '../api/services/users.js';
import { useUsers } from '../api/hooks/useUsers.js';
import { UsersContext } from '../api/store/context.jsx';

const LazyAlbums = lazy(() => import('./../components/Albums/index.jsx'));

export function Users() {

  // Если без контекста
  // const { users, isLoading, getUsersRequest } = useUsers();
  // const [selectedUserId, setSelectedUserIs] = useState(null);

  // function onSelectUserId(id) {
  //   setSelectedUserIs(id);
  // }
  const { users, isLoading,  getUsersRequest, onSelectUserId, selectedUserId} = 
    useContext(UsersContext)


  return (
    <>
      <h1>Users</h1>
      {isLoading ? (
        'loading...'
      ) : (
        <ul>
          <UsersList
             users = {users}
             selectedUserId = {selectedUserId}
             setSelectedUser = {onSelectUserId}
          />
        </ul>
      )}
      <Suspense fallback={<p>Loading</p>}>
        <LazyAlbums />
      </Suspense>
      <button onClick={getUsersRequest}>get users</button>
    </>
  );
}
