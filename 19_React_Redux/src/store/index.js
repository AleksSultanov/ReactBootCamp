import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/users';
import themeReducer from './slices/theme';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    theme: themeReducer,
  },
});
