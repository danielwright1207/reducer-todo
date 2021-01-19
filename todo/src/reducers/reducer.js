import { ADD, CLEAR, COMPLETE } from "../actions/actions";

export const initialState = {
  toDos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, toDos: [...state.toDos, action.payload] };
    case CLEAR:
      return {
        ...state,
        toDos: [
          ...state.toDos.filter((item) => {
            return !item.completed;
          }),
        ],
      };
    case COMPLETE:
      return {
        ...state,
        toDos: [
          ...state.toDos.map((item) => {
            if (item.id === action.payload) {
              return { ...item, completed: !item.completed };
            }
            return item;
          }),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
