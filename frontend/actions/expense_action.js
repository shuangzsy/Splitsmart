import * as ExpenseAPIUtil from '../util/expense_api_util';
export const RECEIVE_EXPENSES = "RECEIVE_EXPENSES";
export const RECEIVE_EXPENSE = "RECEIVE_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";
export const RECEIVE_EXPENSE_ERRORS = "RECEIVE_EXPENSE_ERRORS";
export const REMOVE_EXPENSE_ERRORS = "REMOVE_EXPENSE_ERRORS";

export const receiveExpenses = ({expenses, splits, activities}) => ({
  type: RECEIVE_EXPENSES,
  expenses,
  splits,
  activities
});

export const receiveExpense = ({expense, splits, activity}) => {
  return {
    type: RECEIVE_EXPENSE,
    expense,
    splits,
    activity
  }
};

export const receiveExpenseErrors = errors => ({
  type: RECEIVE_EXPENSE_ERRORS,
  errors
});

export const removeExpenseErrors = () => ({
  type: REMOVE_EXPENSE_ERRORS,
});

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

export const createExpense = (expense, splits, activity) => (dispatch) => (
  ExpenseAPIUtil.createExpense(expense, splits, activity).then(
    payload => (dispatch(receiveExpense(payload))),
    (err) => {dispatch(receiveExpenseErrors(err.statusText))}
  )
);

export const updateExpense = (expense, splits) => (dispatch) => (
  ExpenseAPIUtil.updateExpense(expense, splits).then(
    payload => (dispatch(receiveExpense(payload))),
    err => (dispatch(receiveExpenseErrors(err.statusText))
  ))
);

export const deleteExpense = (expenseId) => (dispatch) => (
  ExpenseAPIUtil.deleteExpense(expenseId).then(({expense}) => dispatch(removeExpense(expense.id)))
);

