import {
  RECEIVE_EXPENSES,
  RECEIVE_EXPENSE,
  REMOVE_EXPENSE
} from '../actions/expense_action';

const expenseReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_EXPENSE:
      newState[action.expense.id] = action.expense;
      return newState;
    case RECEIVE_EXPENSES:
      return action.expenses;
    case REMOVE_EXPENSE:
      delete newState[action.expense.id];
      return newState;
    default:
      return state;
  }
}

export default expenseReducer;