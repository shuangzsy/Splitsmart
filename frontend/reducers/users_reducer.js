import {
  RECEIVE_USER,
  RECEIVE_USERS,
  REMOVE_USER
} from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USER:
      console.log(action.user)
      let user = Object.assign({}, action.user);
      delete user["expenses"]
      newState[action.user.id] = user;
      return newState;
    case RECEIVE_USERS:
      action.users.forEach(user => {
        delete user['expenses']
        newState[user.id] = user
      })
      return newState;
    case REMOVE_USER:
      delete newState[action.user.id];
      return newState;
    default:
      return state;
  }
}

export default usersReducer;