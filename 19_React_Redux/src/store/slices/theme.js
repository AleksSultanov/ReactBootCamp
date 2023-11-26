import { createSlice } from '@reduxjs/toolkit';
import classnames from 'classnames';
import classes from './styles.module.css';

const themeType = {
  themeDefalut: 'Светлая тема',
  themeDark: 'Темная тема',
}

const themeClass = {
  themeDefalut: classnames(classes.themeDefalut),
  themeDark: classnames(classes.themeDark),
}


const initialState = {
  code: 'themeDefalut',
  name: 'Светлая тема',
  themeClass: classnames(classes.themeDefalut)
};

export const themesSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.code = action.payload;
      state.name = themeType[state.code];
      state.themeClass = themeClass[state.code];
    },
  },
});

export const { setTheme } = themesSlice.actions;

export default themesSlice.reducer;
