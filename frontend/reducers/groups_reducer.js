import {
  RECEIVE_GROUPS,
  RECEIVE_GROUP,
  REMOVE_GROUP,
  RECEIVE_GROUP_ERRORS,
  REMOVE_GROUP_ERRORS
} from '../actions/group_action';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const groupReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.friends || newState
    case RECEIVE_GROUP:
      newState[action.group.id] = action.group;
      return newState;
    case RECEIVE_GROUPS:
      return action.groups || newState;
    case REMOVE_GROUP:
      delete newState[action.groupId];
      return newState;
    default:
      return state;
  }
}

export default groupReducer;