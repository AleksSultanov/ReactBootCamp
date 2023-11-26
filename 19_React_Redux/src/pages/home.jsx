import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../components/ui/Button/index.jsx';
import { setTheme } from '../store/slices/theme.js';

export default function Home() {

  const { code, name, themeClass} = useSelector (
    (state) => state.theme, //state.theme -reducer из \store\index.js
  );

  const dispatch = useDispatch();
  
  function onSelectTheme() {
    if (code === 'themeDefalut') 
      dispatch(setTheme('themeDark'));
    else
      dispatch(setTheme('themeDefalut'));
  }
  
  return(
    <>
      <h1 className = {themeClass}>Home page</h1>
      <Button
        onClick={onSelectTheme}
      >{name} </Button>
    </>
     );
}
