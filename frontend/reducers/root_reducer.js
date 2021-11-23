import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session from './session_reducer';

const RootReducer = combineReducers({
  entities,
  session
});

export default RootReducer;