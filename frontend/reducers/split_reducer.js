import {
  RECEIVE_EXPENSE, RECEIVE_EXPENSES
} from '../actions/expense_action';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const splitReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_EXPENSES:
    case RECEIVE_EXPENSE:
      if (!action.splits) return newState;
      Object.values(action.splits).map(split =>{
        newState[split.id] = split
      })
      return newState;
    default:
      return state;
  }
}

export default splitReducer;