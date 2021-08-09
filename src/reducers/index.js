import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  SET_MEMORY,
  CLEAR_MEMORY,
  SOLVE_EQUATION,
} from "./../actions";

export const initialState = {
  total: "",
  operation: "+",
  memory: 0,
  num1: "",
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return parseInt(num1) + parseInt(num2);
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: state.total + action.payload,
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        num1: state.total,
        total: "",
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: "",
        num1: "",
      };

    case SET_MEMORY:
      return {
        ...state,
        memory: state.total,
      };
    case CLEAR_MEMORY:
      return { ...state, memory: "0" };
    case SOLVE_EQUATION:
      return {
        ...state,
        total: calculateResult(state.num1, state.total, state.operation),
      };

    default:
      return state;
  }
};

export default reducer;
