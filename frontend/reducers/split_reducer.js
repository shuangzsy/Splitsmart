import {
  RECEIVE_EXPENSE, RECEIVE_EXPENSES, REMOVE_EXPENSE
} from '../actions/expense_action';
import {
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const splitReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_EXPENSES:
    case RECEIVE_EXPENSE:
      if (!action.splits) return newState;
      Object.values(action.splits).map(split => {
        newState[split.id] = split
      })
      return newState;
    case REMOVE_EXPENSE:
      Object.values(newState).map(split => {
        if (split.expenseId === action.expenseId){
          delete newState[split.id];
        }
      })
      return newState
    case LOGOUT_CURRENT_USER:
      return {}
    default:
      return state;
  }
}

export default splitReducer;