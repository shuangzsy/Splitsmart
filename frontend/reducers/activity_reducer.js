import {
  RECEIVE_EXPENSE, RECEIVE_EXPENSES,
} from '../actions/expense_action';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const activityReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.activities || newState
    // case RECEIVE_EXPENSE:
    //   newState[action.activity.id] = action.activity;
    //   return newState;
    case RECEIVE_EXPENSES:
      return action.activities || newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default activityReducer;