import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  taskId: null,
  path: ''
};

export const taskIdSlice = createSlice({
  name: 'breadcrumbs',
  initialState,
  reducers: {
    setTaskId(state, action) {
      state.taskId = action.payload;
    },
    setPath(state, action) {
      state.path = action.path;
    },
  },
});

export const { setTaskId } =
  taskIdSlice.actions;

export default taskIdSlice.reducer;
