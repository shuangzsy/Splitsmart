import { connect } from 'react-redux';
import { updateExpense, requestExpense } from '../../actions/expense_action';
import { withRouter } from 'react-router-dom';
import React from 'react';
import EditExpenseForm from './edit_expense_form';


const mSTP = (state, ownProps) => {
  // debugger;
  let currentExpense = state.entities.expenses[ownProps.expenseId];
  let splitIds = currentExpense.splitIds;
  let splitPartner;
  splitIds.map(splitId => {
    if (state.entities.splits[splitId].email !== state.session.currentUser.email){
      splitPartner = state.entities.splits[splitId].email
    }
  });
  return {
    expense: currentExpense,
    splits: [[state.session.currentUser.email, 0.5], [splitPartner, 0.5]],
    formType: "Edit the expense",
    currentUserEmail: state.session.currentUser.email,
    allSplits: Object.values(state.entities.splits),
    allExpenses: Object.values(state.entities.expenses),
    currentUser: state.session.currentUser,
    friends: Object.values(state.entities.friends)
}}

const mDTP = dispatch => ({
  requestExpense: (id) => dispatch(requestExpense(id)),
  submitExpense: (expense, splits) => dispatch(updateExpense(expense, splits))
})

export default withRouter(connect(mSTP, mDTP)(EditExpenseForm))
