import * as ExpenseAPIUtil from '../util/expense_util';
export const RECEIVE_EXPENSES = "RECEIVE_EXPENSES";
export const RECEIVE_EXPENSE = "RECEIVE_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";

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

export const createExpense = (expense, split) => (dispatch) => (
  ExpenseAPIUtil.createExpense(expense, split).then(expense => dispatch(receiveExpense(expense)))
);

export const updateExpense = (expense) => (dispatch) => (
  ExpenseAPIUtil.updateExpense(expense).then(expense => dispatch(receiveExpense(expense)))
);

export const deleteExpense = (expenseId) => (dispatch) => (
  ExpenseAPIUtil.deleteExpense(expenseId).then(expense => dispatch(removeExpense(expense.id)))
);

