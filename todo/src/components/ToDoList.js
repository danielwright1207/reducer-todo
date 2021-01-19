import React from "react";
import ToDo from "./ToDo";
///////

const ToDoList = ({ completeTodo, listTodo }) => {
  return (
    <div>
      {listTodo.map((todo) => (
        <ToDo key={todo.id} todo={todo} completedTodo={completeTodo} />
      ))}
    </div>
  );
};
export default ToDoList;
