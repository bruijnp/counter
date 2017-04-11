import {INCREMENT, DECREMENT} from '../constants/CounterConstants';

export const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state = state + 1;
    case DECREMENT:
      return state = state - 1;
    default:
      return state;
  }
};