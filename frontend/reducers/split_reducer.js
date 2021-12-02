import {
  RECEIVE_EXPENSE
} from '../actions/expense_action';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const splitReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_EXPENSE:
      // debugger
      Object.values(action.splits).map(split =>{
        newState[split.id] = split
      })
      return newState;
    default:
      return state;
  }
}

export default splitReducer;