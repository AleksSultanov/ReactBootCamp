import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../pages/root.jsx';
// import Home from '../pages/home.jsx';
import { Layout } from '../layout.jsx';
import { About } from '../pages/about.jsx';
import { ROUTE_PATHES } from './pathes.js';
import { Users } from '../pages/users.jsx';
import { User } from '../pages/user.jsx';
// import { usersLoader } from '../loaders/usersLoader.js';
import { NotFoundPage } from '../pages/notFound.jsx';
import { Suspense, lazy } from 'react';
import { ComicsPage } from '../pages/comics/comics.jsx';
import { ComicsItemPage } from '../pages/comics/comicsItem.jsx';

const HomeLazy = lazy(() => import('../pages/home.jsx'));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTE_PATHES.users,
        element: <Users />,
        // loader: usersLoader,
      },
      {
        path: ROUTE_PATHES.user,
        element: <User />,
      },
      // {
      //   path: ROUTE_PATHES.userCreate,
      //   element: <UserCreate />,
      // },
      {
        path: ROUTE_PATHES.home,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <HomeLazy />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATHES.about,
        element: <About />,
      },
      {
        path: ROUTE_PATHES.root,
        element: <Root />,
      },
      {
        path: ROUTE_PATHES.comics,
        element: <ComicsPage />,
      },
      {
        path: ROUTE_PATHES.comicsItem,
        element: <ComicsItemPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
