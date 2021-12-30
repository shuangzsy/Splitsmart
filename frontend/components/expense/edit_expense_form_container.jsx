import { connect } from 'react-redux';
import { updateExpense, requestExpense } from '../../actions/expense_action';
import ExpenseForm from './expense_form';
import { withRouter } from 'react-router-dom';
import React from 'react';

class EditExpenseForm extends React.Component {
  componentDidMount() {
    this.props.requestExpense(this.props.expenseId);
    // debugger;
  }

  render() {
    const { expense, splits, formType, submitExpense } = this.props;
    // debugger;
    if (!expense) return null;
    return (
      <ExpenseForm
        expense={expense}
        splits = {splits}
        formType={formType}
        submitExpense={submitExpense} />
    );
  }
}

const mSTP = (state, ownProps) => {
  // debugger;
  return {
  expense: state.entities.expenses[ownProps.expenseId],
  splits: [[state.session.currentUser.email, -0.5], ['', 0.5]],
  formType: "Edit the expense"
}}

const mDTP = dispatch => ({
  requestExpense: (id) => dispatch(requestExpense(id)),
  submitExpense: (expense, splits) => dispatch(updateExpense(expense, splits))
  // submitExpense: ({ expense, splits }) => dispatch(createExpense({ expense, splits })),
})

export default withRouter(connect(mSTP, mDTP)(EditExpenseForm))
