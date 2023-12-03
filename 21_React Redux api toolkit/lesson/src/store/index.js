import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/users';
import breadcrumbsReducer from './slices/breadcrumbs';
import { baseApi, fakeApi } from '../api/query/index';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    breadcrumbs: breadcrumbsReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [fakeApi.reducerPath]: fakeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(fakeApi.middleware),
});
