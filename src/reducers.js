import { ADD_NUMBER, CLEAR_LIST } from './actionTypes';

const initialState = {
  list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case CLEAR_LIST:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default reducer;