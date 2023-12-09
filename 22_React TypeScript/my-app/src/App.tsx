import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { List } from "./components/List";
import { TItem } from "./types";
import { getPosts, getTodos } from "./api";

function App() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState<TItem[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<TItem | null>(null);

  const [posts, setPosts] = useState<TItem[]>([]);
  const [selectedPost, setSelectedPost] = useState<TItem | null>(null);

  function onSelectTodo(todo: TItem) {
    setSelectedTodo(todo);
  }

  function onSelectPost(post: TItem) {
    setSelectedPost(post);
  }

  useEffect(() => {
    console.log(window.someParam);

    getTodos().then((todosFromRequest) => {
      console.log(todosFromRequest);
      setTodos(todosFromRequest);
    });

    getPosts().then((postsFromRequest) => {
      console.log(postsFromRequest);
      setPosts(postsFromRequest);
    });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>Todos</h1>
      <List onItemSelect={onSelectTodo} selected={selectedTodo} items={todos} />
      <h2>Posts</h2>
      <List onItemSelect={onSelectPost} selected={selectedPost} items={posts} />
    </>
  );
}

export default App;
