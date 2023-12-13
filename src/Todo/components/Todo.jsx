/* eslint-disable react/prop-types */
import { changeStatus, clearSelected } from "../store";
import { useState } from "react";

const Todo = ({ todo }) => {
  const [isDragging, setIsDragging] = useState(false);
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
      <div className="todo-close" onClick={() => clearSelected(todo.id)}></div>
    </div>
  );
};

export default Todo;
