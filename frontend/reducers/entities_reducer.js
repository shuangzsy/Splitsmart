import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import expenseReducer from "./expense_reducer";
import splitReducer from "./split_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  expenses: expenseReducer,
  splits : splitReducer
});

export default entitiesReducer;