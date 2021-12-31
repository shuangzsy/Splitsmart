import { connect } from 'react-redux';
import { requestExpenses, deleteExpense } from '../../actions/expense_action';
import ExpenseIndex from './expense_index';
import { openModal } from '../../actions/modal_actions';
import React from 'react';
import { logout } from '../../actions/session_actions';


const mSTP = (state) => ({
  expenses: Object.values(state.entities.expenses),
  currentUser: state.session.currentUser,
  splits: Object.values(state.entities.splits)
});

const mDTP = (dispatch) => ({
  UserLogout: () => dispatch(logout()),
  requestExpenses: () => dispatch(requestExpenses()),
  deleteExpense: expenseId => dispatch(deleteExpense(expenseId)),
  addExpense: (
    <button onClick={() => dispatch(openModal('addexpense'))}>
      Add an expense
    </button>),
  editExpense: (
    <button className="edit-expense-button" onClick={() => dispatch(openModal('editexpense'))}>
      Edit Expense
    </button>)
  
})

export default connect(mSTP, mDTP)(ExpenseIndex);