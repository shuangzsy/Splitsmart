import {
  RECEIVE_EXPENSE_ERRORS,
  REMOVE_EXPENSE_ERRORS
} from '../actions/expense_action';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EXPENSE_ERRORS:
      return action.errors;
    case REMOVE_EXPENSE_ERRORS:
      return [];
    default:
      return state;
  }
};