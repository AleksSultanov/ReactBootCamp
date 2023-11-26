import { Await, Link, useLoaderData } from 'react-router-dom';

// import Albums from '../components/Albums';
import { Suspense, lazy, useContext, useEffect, useState } from 'react';
import { usersService } from '../api/services/users.js';
import { UsersList } from '../components/Users/List.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUserId, setUsers } from '../store/slices/users.js';
import { Button } from '../components/ui/Button/index.jsx';
import { setTheme } from '../store/slices/theme.js';

const LazyAlbums = lazy(() => import('./../components/Albums/index.jsx'));


export function Users() {
  const dispatch = useDispatch();

  const { isLoading, users, selectedUserId } = useSelector(
    (state) => state.users, //state.users -reducer из \store\index.js
  );
  const { code, name, themeClass} = useSelector(
    (state) => state.theme, //state.theme -reducer из \store\index.js
  );


  async function getUsers() {
    const users = await usersService.getUsers();

    dispatch(setUsers(users));
  }

  useEffect(() => {
    getUsers();
  }, []);

  function onSelectUserId(id) {
    dispatch(setSelectedUserId(id));
  }

  function onSelectTheme() {
    if (code === 'themeDefalut') 
      dispatch(setTheme('themeDark'));
    else
      dispatch(setTheme('themeDefalut'));
  }


  return (
    <>
      <h1>Users</h1>
      {isLoading ? (
        'loading...'
      ) : (
        < >
        <UsersList
          className = {themeClass}
          users={users}
          setSelectedUser={onSelectUserId}
          selectedUserId={selectedUserId}
        />
        <Button onClick={onSelectTheme} > {name}  </Button>
        </>
      )}
      <Suspense callback={<p>Loading</p>}>
        <LazyAlbums />
      </Suspense>
    </>
  );
}
