import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import expenseReducer from "./expense_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  expenses: expenseReducer
});

export default entitiesReducer;