import React, { useState } from "react";

const ToDoForm = ({ setTodo, handleClear }) => {
  const [todoInput, settodoInput] = useState("");

  const handleChange = (e) => {
    settodoInput(e.target.value);
  };
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    setTodo(todoInput);
    settodoInput("");
  };

  return (
    <div>
      <form onSubmit={handleTodoSubmit}>
        <label>
          ToDo
          <input
            type="text"
            placeholder="Enter new task"
            name="input"
            value={todoInput}
            onChange={handleChange}
          ></input>
        </label>
        <br></br>
        <button type="button" onClick={handleTodoSubmit}>
          Add New Task
        </button>
        <br></br>
        <button type="clearbutton" onClick={handleClear}>
          Clear Completed
        </button>
      </form>
    </div>
  );
};
export default ToDoForm;
