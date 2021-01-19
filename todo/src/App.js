import "./App.css";
import reducer, { initialState } from "./reducers/reducer";
import ToDoList from "./components/ToDoList";
import { addToDo, clearToDo, setComplete } from "./actions/actions";
import React, { useReducer } from "react";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setTodo = (todo) => {
    dispatch(addToDo(todo));
  };

  const completeTodo = (todoId) => {
    dispatch(setComplete(todoId));
  };
  const handleClear = () => {
    dispatch(clearToDo());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <ToDoForm setTodo={setTodo} handleClear={handleClear} />
        <div className="cardContainer">
          <ToDoList completeTodo={completeTodo} listTodo={state.toDos} />
        </div>
      </header>
    </div>
  );
}

export default App;
