import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import expenseReducer from "./expense_reducer";
import splitReducer from "./split_reducer";
import friendReducer from "./friend_reducer";
import groupReducer from "./groups_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  expenses: expenseReducer,
  splits: splitReducer,
  friends: friendReducer,
  groups: groupReducer,
});

export default entitiesReducer;