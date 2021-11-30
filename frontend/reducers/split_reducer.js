import {
  RECEIVE_EXPENSE
} from '../actions/expense_action';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const splitReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_EXPENSE:
      newState[action.expense.id] = action.splits;
      return newState;
    default:
      return state;
  }
}

export default splitReducer;