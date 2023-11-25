import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './router/index.jsx';

import './index.css';
import React from 'react';
import { UsersProvider } from './api/store/context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersProvider>
      <RouterProvider router={router} />
    </UsersProvider>  
  </React.StrictMode>,
);
