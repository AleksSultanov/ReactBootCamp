import { TItem } from "./types/index";
import { Todo, Post } from "./types";

const jsonApiUrl: string = "https://jsonplaceholder.typicode.com";
const MAX_ITEMS_LENGTH = 5;

function cutArray<T>(arr: T[]): T[] {
  return arr.slice(0, MAX_ITEMS_LENGTH);
}

function formatPosts(arr: Post[]): TItem[] {
  return arr.map((item) => {
    return {
      // ...item,
      id: item.id,
      userId: item.userId,
      text: item.body,
      selected: false,
    };
  });
}

function formatTodos(arr: Todo[]): TItem[] {
  return arr.map((item) => {
    return {
      // ...item,
      id: item.id,
      userId: item.userId,
      text: item.title,
      selected: false,
    };
  });
}

export function getTodos(): Promise<TItem[]> {
  return fetch(`${jsonApiUrl}/todos`)
    .then((response) => response.json())
    .then((data) => cutArray<Todo>(data))
    .then(formatTodos);
}

export function addTodo(todo: Todo): Promise<Todo> {
  return fetch(`${jsonApiUrl}/todos`, {
    method: "POST",
    body: JSON.stringify(todo),
  }).then((response) => response.json());
}

export function getPosts(): Promise<TItem[]> {
  return fetch(`${jsonApiUrl}/posts`)
    .then((response) => response.json())
    .then((data) => cutArray<Post>(data))
    .then(formatPosts);
}
