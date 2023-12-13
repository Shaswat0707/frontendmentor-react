import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useTodoStore } from "./store";
import "./Todos.css";

const Todos = () => {
  const theme = useTodoStore((state) => state.theme);
  return (
    <div className="todo-container" data-theme={theme}>
      <Navbar />
      <div className="todo-wrapper">
        <div className="todo-parent">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Todos;
