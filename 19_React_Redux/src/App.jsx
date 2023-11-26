import { useEffect, useState, useId } from 'react';
import './App.css';
import { SummaryForm } from './components/SummaryForm/index.jsx';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes } from 'react-router-dom';

const theme = {
  main: 'mediumseagreen',
};

function App() {
  const [counter, setCounter] = useState(0);
  const [isFormVisible, setFormVisible] = useState(true);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('users')) || [],
  );
  const [addedUser, setAddedUser] = useState({});

  function handler() {}

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
    document.addEventListener('scroll', handler);

    return () => {
      document.removeEventListener('scroll', handler);
    };
  }, [users, users.length]);

  function onAddUser(event) {
    event.preventDefault();

    if (addedUser.name.trim()) {
      setUsers([...users, addedUser]);
      console.log([...users, addedUser]);
      setAddedUser({
        name: '',
      });
    }
  }

  function onInputUser(event) {
    setAddedUser({
      id: Date.now(),
      name: event.target.value,
    });
  }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      <div className="form-container">
        <ThemeProvider theme={theme}>
          {isFormVisible && <SummaryForm />}
        </ThemeProvider>
      </div>
      {/* <div className="list">
        <Card description={text1} tag="blue" title="Кораблик" />
        <Card description={text2} tag="green" title="Звездный дождь" />
        <Card description={text3} tag="violet" title="Летающие имена" />
      </div> */}
      <form>
        <input type="text" value={addedUser.name} onChange={onInputUser} />
        <button onClick={onAddUser}>Add user</button>
      </form>
      <ul>
        {users?.length > 0 &&
          users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
      </ul>
    </>
  );
}

export default App;
