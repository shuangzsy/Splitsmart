import {
  RECEIVE_EXPENSES,
  RECEIVE_EXPENSE,
  REMOVE_EXPENSE
} from '../actions/expense_action';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const expenseReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      console.log(action.user)
      return action.user.expenses
    case RECEIVE_EXPENSE:
      newState[action.expense.id] = action.expense;
      return newState;
    case RECEIVE_EXPENSES:
      return action.expenses;
    case REMOVE_EXPENSE:
      delete newState[action.expenseId];
      return newState;
    default:
      return state;
  }
}

export default expenseReducer;