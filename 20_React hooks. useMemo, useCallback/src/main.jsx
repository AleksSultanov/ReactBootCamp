import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { router } from './router/index.jsx';
import { UsersProvider } from './store/context.jsx';
import { store } from './store/index.js';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <UsersProvider>
        <RouterProvider router={router} />
      </UsersProvider>
    </Provider>
  </React.StrictMode>,
);
