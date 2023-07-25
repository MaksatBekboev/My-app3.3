import { ADD_NUMBER, CLEAR_LIST } from './actionTypes';

export const addNumber = (number) => {
  return {
    type: ADD_NUMBER,
    payload: number,
  };
};

export const clearList = () => {
  return {
    type: CLEAR_LIST,
  };
};