import { useTodoStore, setTodos } from "../store";

const TodoInput = () => {
  const newTodo = useTodoStore((state) => state.newTodo);
  const setNewTodo = useTodoStore((state) => state.setNewTodo);

  const newFilter = useTodoStore((state) => state.newFilter);
  const setNewFilter = useTodoStore((state) => state.setNewFilter);

  return (
    <div className="container">
      <div className="todo-input-wrapper">
        <input
          type="text"
          aria-label="Create new todo"
          placeholder="Create a new todo..."
          className="todo-input"
          value={newTodo}
          onKeyUp={(event) => {
            if (event.key === "Enter") setTodos();
          }}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <div
          className="circle"
          data-todo-status={newFilter}
          onClick={setNewFilter}
        >
          <div className="circle-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
