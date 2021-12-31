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
    const { expense, splits, formType, submitExpense, currentUserEmail } = this.props;
    // debugger;
    if (!expense) return null;
    let copyExpense =  {};
    copyExpense["create_at"] = expense["createAt"];
    copyExpense["creator_id"] = expense["creatorId"];
    copyExpense["description"] = expense["description"];
    copyExpense["group_name"] = expense["groupName"];
    copyExpense["id"] = expense["id"];
    copyExpense["payer"] = expense["payer"];
    copyExpense["settled"] = expense["settled"];
    copyExpense["total_amount"] = expense["totalAmount"];

    return (
      <ExpenseForm
        expense={copyExpense}
        splits = {splits}
        formType={formType}
        submitExpense={submitExpense}
        currentUserEmail={currentUserEmail} />
    );
  }
}

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
    currentUserEmail: state.session.currentUser.email
}}

const mDTP = dispatch => ({
  requestExpense: (id) => dispatch(requestExpense(id)),
  submitExpense: (expense, splits) => dispatch(updateExpense(expense, splits))
  // submitExpense: ({ expense, splits }) => dispatch(createExpense({ expense, splits })),
})

export default withRouter(connect(mSTP, mDTP)(EditExpenseForm))
