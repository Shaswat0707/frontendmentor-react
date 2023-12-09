import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./Todos.css";

const Todos = () => {
  return (
    <div className="todo-container">
      <Navbar />
      <div className="todo-wrapper">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default Todos;
