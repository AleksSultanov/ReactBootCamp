import './App.css';
import { useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components';
import { SummaryForm } from './components/SummaryForm/index.jsx';

const theme ={
  main: "mediumseagreen",

};

// function onScroll(){
//   console.log("onScroll");
// }

function App() {
  // useEffect(()=> {
  //   document.addEventListener('scroll', onScroll);
  //   console.log("mount");
  //   return () => {
  //     console.log("unmount");
  //     document.removeEventListener('scroll', onScroll);

  //   }

  // },[] );

  const [isFormVisible, setFormVisible] = useState(true);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users'))|| [{}]);
  const [addedUser, setAddUser] = useState('');

  useEffect(() => {
    localStorage.setItem('users',JSON.stringify(users));
  }, [users, users.length]);

  function OnToogleForm () {
    setFormVisible(!isFormVisible);
  }

  function onInputUser (event) {
    setAddUser({
      id: Date.now(),
      name: event.target.value,
    });

  }
  function OnAddUser (event) {
    event.preventDefault();

    if (addedUser.name.trim()){
      setUsers([...users,addedUser]);
    }
    setAddUser({name:''});
  }

  return (
    <>
      <div className="form-container">
      <ThemeProvider theme={theme}>
        {isFormVisible && (
          <SummaryForm />
        )
        }
        <br/>
        <button onClick={OnToogleForm}>Toggle Form </button>
        <form>
          <input type="text" value={addedUser.name} onChange={onInputUser}/>
          <button onClick={OnAddUser}>Add User </button>
        </form>
        <ul>
          {users?.length >0 && users.map((user) => {
            return (
              <li key={user.id}>{user.name}</li>
            )
          })}
        </ul>

      </ThemeProvider> 
      </div>
    </>
  );
  }  


export default App;
