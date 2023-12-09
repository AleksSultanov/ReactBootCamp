export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type TItem = {
  userId: number;
  id: number;
  text: string;
};

// export type TItemExample<T> = {
//   myId: string;
//   data: T;
// };

// type ItemPost = TItemExample<Post>;
// type ItemTodo = TItemExample<Todo>;

// const todo: ItemTodo = {
//   myId: "",
//   data: {
//     completed: false,
//     title: "",
//     id: 0,
//     userId: 0,
//   },
// };

// console.log(todo);
