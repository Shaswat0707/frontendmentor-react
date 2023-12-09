/* eslint-disable react/prop-types */
import { useTodoStore } from "../store";
import { useState } from "react";

const Todo = ({ todo }) => {
  const [isDragging, setIsDragging] = useState(false);
  const changeStatus = useTodoStore((state) => state.changeStatus);
  return (
    <div
      className={
        isDragging ? `single-todo-wrapper dragging` : `single-todo-wrapper`
      }
      data-todo-status={todo.status}
      draggable="true"
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
    >
      <div
        className="todo-status"
        onClick={() => changeStatus(todo.id, todo.status)}
      >
        <div className="todo-status-inner"></div>
      </div>
      <div className="todo-text">{todo.text}</div>
      <div className="todo-close"></div>
    </div>
  );
};

export default Todo;
