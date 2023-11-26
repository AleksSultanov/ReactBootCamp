import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: false,
  selectedUserId: null,
  isDarkTheme: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setSelectedUserId(state, action) {
      state.selectedUserId = action.payload;
    },
    setDarkTheme(state) {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { setUsers, setLoading, setSelectedUserId, setDarkTheme } =
  usersSlice.actions;

export default usersSlice.reducer;
