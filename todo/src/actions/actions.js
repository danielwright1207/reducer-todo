export const ADD = "ADD";
export const CLEAR = "CLEAR";
export const COMPLETE = "COMPLETE";

export const addToDo = (todo) => {
  const newToDo = { todo, id: Date.now(), conpleted: false };
  return { type: ADD, payload: newToDo };
};
export const clearToDo = () => {
  return { type: CLEAR };
};
export const setComplete = (id) => {
  return { type: COMPLETE, payload: id };
};
