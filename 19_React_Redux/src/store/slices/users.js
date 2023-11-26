import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: false,
  selectedUserId: null,
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
  },
});

export const { setUsers, setLoading, setSelectedUserId } = usersSlice.actions;

export default usersSlice.reducer;
