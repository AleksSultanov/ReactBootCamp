import { Await, Link, useLoaderData } from 'react-router-dom';
// import Albums from '../components/Albums';
import {
  Suspense,
  lazy,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { usersService } from '../api/services/users.js';
import { useUsers } from '../api/hooks/useUsers.js';
import { UsersList, MemoizedUsersList } from '../components/Users/List.jsx';
import { UsersContext } from '../store/context.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDarkTheme,
  setSelectedUserId,
  setUsers,
} from '../store/slices/users.js';
import { useToggle } from '../hooks/index.js';
import { useTheme } from '../hooks/useTheme.js';
import { Button } from '../components/ui/Button/index.jsx';

const LazyAlbums = lazy(() => import('./../components/Albums/index.jsx'));

export function Users() {
  const { isToggle, onToggle: onToggleFromHook } = useToggle();
  const { codetheme, nametheme, themeClass, onSelectTheme} = useTheme(null);
  // const { users, isLoading } = useUsers();
  // const [tabs, setTabs] = useState([]);
  // const [active, setActiveTab] = useState({});
  // const [error, setErrors] = useState('');
  // const [data, setData] = useState({});

  // useEffect(() => {}, []);

  // useEffect(() => {}, []);

  // useEffect(() => {}, []);

  // const [isToggled, setToggled] = useState(true);
  const isLoading = useSelector((state) => state.users.isLoading);
  const users = useSelector((state) => state.users.users);
  const selectedUserId = useSelector((state) => state.users.selectedUserId);
  const isDarkTheme = useSelector((state) => state.users.isDarkTheme);

  const dispatch = useDispatch();
  // const { users } = useLoaderData();
  // const {
  //   users,
  //   isLoading,
  //   onSelectUserId: onSelectedUserFromContext,
  //   selectedUserId,
  // } = useContext(UsersContext);

  async function getUsers() {
    const users = await usersService.getUsers();

    dispatch(setUsers(users));
  }

  useEffect(() => {
    getUsers();
  }, []);

  // function onSelectUserId(id) {
  //   // onSelectedUserFromContext(id);
  // }

  const memoizedOnSelecteUserId = useCallback(
    (id) => {
      dispatch(setSelectedUserId(id));
    },
    [dispatch],
  );

  function onToggle() {
    console.log('toggle theme');
    dispatch(setDarkTheme());
  }

  return (
    <>
      {isDarkTheme && <h1>is dark theme</h1>}
      {isLoading ? (
        'loading...'
      ) : (
        <UsersList
          className = {themeClass}
          users={users}
          setSelectedUser={memoizedOnSelecteUserId}
          selectedUserId={selectedUserId}
        />
      )}
      <button onClick={onToggle}>toggle button</button>
      <Button onClick={onSelectTheme} > {nametheme}  </Button>
    </>
  );
}
