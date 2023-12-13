import { create } from "zustand";
import { v4 as uuid } from "uuid";
import { LIGHT, ACTIVE } from "./CONSTANTS";

const getActiveTodos = () =>
  useTodoStore.getState().allTodos.filter((todo) => todo.status === ACTIVE);

export const getActiveTodosCount = () => getActiveTodos().length;

export const setTodos = () => {
  const newTodo = {
    id: uuid(),
    text: useTodoStore.getState().newTodo,
    status: useTodoStore.getState().newFilter,
  };

  let newTodos = useTodoStore.getState().todos;
  const filter = useTodoStore.getState().filter;
  if (filter === "" || filter === newTodo.status)
    newTodos = [...newTodos, newTodo];

  useTodoStore.setState((state) => ({
    allTodos: [...state.allTodos, { ...newTodo }],
    todos: [...newTodos],
    newTodo: "",
  }));
};

export const setFilter = (filter) => {
  let newTodos;
  if (filter === "") newTodos = useTodoStore.getState().allTodos;
  else
    newTodos = useTodoStore
      .getState()
      .allTodos.filter((todo) => todo.status === filter);
  useTodoStore.setState(() => ({
    todos: [...newTodos],
    filter: filter,
  }));
};

export const changeStatus = (id, status) => {
  const filter = useTodoStore.getState().filter;
  const newAllTodos = useTodoStore.getState().allTodos.map((todo) => {
    if (todo.id === id) todo.status = !status;
    return todo;
  });
  let newTodos;
  if (filter === "") newTodos = newAllTodos;
  else newTodos = newAllTodos.filter((todo) => todo.status === filter);
  useTodoStore.setState(() => ({
    todos: [...newTodos],
    allTodos: [...newAllTodos],
  }));
};

export const clearCompleted = () => {
  const newAllTodos = useTodoStore
    .getState()
    .allTodos.filter((todo) => todo.status === ACTIVE);
  useTodoStore.setState(() => ({
    todos: [...newAllTodos],
    allTodos: [...newAllTodos],
    filter: "",
  }));
};

export const clearSelected = (id) => {
  const newAllTodos = useTodoStore
    .getState()
    .allTodos.filter((todo) => todo.id !== id);
  const newTodos = useTodoStore
    .getState()
    .todos.filter((todo) => todo.id !== id);

  useTodoStore.setState(() => ({
    todos: [...newTodos],
    allTodos: [...newAllTodos],
  }));
};

export const useTodoStore = create((set, get) => ({
  todos: [],
  allTodos: [],
  filter: "",
  newTodo: "",
  newFilter: ACTIVE,
  theme: LIGHT,
  setNewTodo: (todo) => set({ newTodo: todo }),
  setTheme: () => set({ theme: !get().theme }),
  setNewFilter: () => set({ newFilter: !get().newFilter }),
}));
