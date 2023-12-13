import { ACTIVE, COMPLETED } from "../CONSTANTS";
import {
  useTodoStore,
  getActiveTodosCount,
  setFilter,
  clearCompleted,
} from "../store";
import Todo from "./Todo";
import { useRef } from "react";

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".single-todo-wrapper:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const filter = useTodoStore((state) => state.filter);

  const selectAll = () => {
    setFilter("");
  };
  const selectActive = () => {
    setFilter(ACTIVE);
  };
  const selectCompleted = () => {
    setFilter(COMPLETED);
  };
  const ref = useRef();
  return (
    <div className="container">
      <div className="todo-list-container">
        <div
          className="todo-list-wrapper"
          ref={ref}
          onDragOver={(e) => {
            e.preventDefault();
            const afterElement = getDragAfterElement(ref.current, e.clientY);
            const draggable = ref.current.querySelector(".dragging");
            if (afterElement == null) {
              ref.current.appendChild(draggable);
            } else {
              ref.current.insertBefore(draggable, afterElement);
            }
          }}
        >
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
        <div className="todo-last-item">
          <div className="todo-items-left">
            {getActiveTodosCount()} items left
          </div>
          <div className="todo-list-status">
            <div
              className={
                filter === ""
                  ? "todo-list-status-item active"
                  : "todo-list-status-item"
              }
              onClick={selectAll}
            >
              All
            </div>
            <div
              className={
                filter === ACTIVE
                  ? "todo-list-status-item active"
                  : "todo-list-status-item"
              }
              onClick={selectActive}
            >
              Active
            </div>
            <div
              className={
                filter === COMPLETED
                  ? "todo-list-status-item active"
                  : "todo-list-status-item"
              }
              onClick={selectCompleted}
            >
              Completed
            </div>
          </div>
          <div className="todo-list-clear" onClick={clearCompleted}>
            Clear Completed
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
