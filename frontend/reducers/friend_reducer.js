import {
  RECEIVE_FRIENDS,
  RECEIVE_FRIEND,
  REMOVE_FRIEND
} from '../actions/friend_action';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const friendReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.friends || newState
    case RECEIVE_FRIEND:
      newState[action.friend.id] = action.friend;
      return newState;
    case RECEIVE_FRIENDS:
      return action.friends || newState;
    case REMOVE_FRIEND:
      delete newState[action.friendId];
      return newState;
    default:
      return state;
  }
}

export default friendReducer;