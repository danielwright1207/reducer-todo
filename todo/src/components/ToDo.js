import React from "react";

const ToDo = ({ todo, completedTodo }) => {
  return (
    <div
      onClick={() => completedTodo(todo.id)}
      className={`task${todo.completed ? " completed" : ""}`}
    >
      <p>{todo.todo}</p>
    </div>
  );
};
export default ToDo;
