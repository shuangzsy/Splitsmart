import {
  RECEIVE_FRIEND_ERRORS,
  REMOVE_FRIEND_ERRORS
} from '../actions/friend_action';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FRIEND_ERRORS:
      return action.errors;
    case REMOVE_FRIEND_ERRORS:
      return [];
    default:
      return state;
  }
};