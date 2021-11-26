import * as ExpenseAPIUtil from '../util/user_api_util';
export const RECEIVE_EXPENSES = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

export const receiveExpenses = expenses => ({
  type: RECEIVE_EXPENSES,
  expenses
});

export const receiveExpense = expense => ({
  type: RECEIVE_EXPENSE,
  expense
});

export const removeExpense = expenseId => ({
  type: REMOVE_EXPENSE,
  expenseId
});

export const requestExpenses = () => (dispatch) => (
  ExpenseAPIUtil.getExpenses().then(expenses => dispatch(receiveExpenses(expenses)))
);

export const requestExpense = (expenseId) => (dispatch) => (
  ExpenseAPIUtil.getExpense(expenseId).then(expense => dispatch(receiveExpense(expense)))
);

export const createExpense = (expense) => (dispatch) => (
  ExpenseAPIUtil.createExpense(expense).then(expense => dispatch(receiveExpense(expense)))
);

export const updateExpense = (expense) => (dispatch) => (
  ExpenseAPIUtil.updateExpense(expense).then(expense => dispatch(receiveExpense(expense)))
);

export const deleteExpense = (expenseId) => (dispatch) => (
  ExpenseAPIUtil.deleteExpense(expenseId).then(expense => dispatch(removeExpense(expense.id)))
);

