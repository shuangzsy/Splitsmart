import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session from './session_reducer';
import errors from './session_errors_reducer';
import ui from './ui_reducer';
import friendErrors from './friend_errors_reducer';
import expenseErrors from './expense_errors_reducer';

const RootReducer = combineReducers({
  entities,
  session,
  errors,
  friendErrors,
  expenseErrors,
  ui,
});

export default RootReducer;