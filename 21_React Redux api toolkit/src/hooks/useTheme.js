import { useState } from 'react';

import classnames from 'classnames';
import classes from './styles.module.css';

const themeType = {
    themeDefalut: 'Светлая тема',
    themeDark: 'Темная тема'
  }
  
  const themeClassType = {
    themeDefalut: classnames(classes.themeDefalut),
    themeDark: classnames(classes.themeDark)
  }
  
  
  const initialState = {
    code: 'themeDefalut',
    name: 'Светлая тема',
    themeClass: classnames(classes.themeDefalut)
  };


export function useTheme() {
    const [codetheme, setTheme] = useState(initialState.code);
    const [nametheme, setNameTheme] = useState(initialState.name);
    const [themeClass, setClassTheme] = useState(initialState.themeClass);


  
    function onTheme(value) {
        setTheme(value);
        setNameTheme(themeType[value]);
        setClassTheme(themeClassType[value]);
    }

    function onSelectTheme() {
        if (codetheme === 'themeDefalut') 
          onTheme('themeDark');
        else
          onTheme('themeDefalut');
      }
    return {
        codetheme,
        nametheme,
        themeClass,
        onSelectTheme
    };
  }
