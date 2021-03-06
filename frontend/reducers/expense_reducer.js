import {
  RECEIVE_EXPENSES,
  RECEIVE_EXPENSE,
  REMOVE_EXPENSE
} from '../actions/expense_action';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const expenseReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.expenses || newState
    case RECEIVE_EXPENSE:
      newState[action.expense.id] = action.expense;
      // newState[action.splits] = splits
      return newState;
    case RECEIVE_EXPENSES:
      return action.expenses || newState;
    case REMOVE_EXPENSE:
      delete newState[action.expenseId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default expenseReducer;