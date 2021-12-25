import * as ExpenseAPIUtil from '../util/expense_api_util';
export const RECEIVE_EXPENSES = "RECEIVE_EXPENSES";
export const RECEIVE_EXPENSE = "RECEIVE_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";

export const receiveExpenses = ({expenses, splits}) => ({
  type: RECEIVE_EXPENSES,
  expenses,
  splits
});

export const receiveExpense = ({expense, splits}) => {
  return {
    type: RECEIVE_EXPENSE,
    expense,
    splits
  }
};

export const removeExpense = expenseId => ({
  type: REMOVE_EXPENSE,
  expenseId
});

export const requestExpenses = () => (dispatch) => (
  ExpenseAPIUtil.getExpenses().then(
    (payload) => {dispatch(receiveExpenses(payload))}
  )
);

export const requestExpense = (expenseId) => (dispatch) => (
  ExpenseAPIUtil.getExpense(expenseId).then(
    (payload) => {dispatch(receiveExpense(payload))}
  )
);

export const createExpense = (expense, splits) => (dispatch) => (
  ExpenseAPIUtil.createExpense(expense, splits).then((payload) => {
  dispatch(receiveExpense(payload))})
);

export const updateExpense = (expense, splits) => (dispatch) => (
  ExpenseAPIUtil.updateExpense(expense, splits).then((payload) => {
    dispatch(receiveExpense(payload))})
);

export const deleteExpense = (expenseId) => (dispatch) => (
  ExpenseAPIUtil.deleteExpense(expenseId).then(({expense}) => dispatch(removeExpense(expense.id)))
);

