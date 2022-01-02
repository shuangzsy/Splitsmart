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
    let copyExpense = {};
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
        splits={splits}
        formType={formType}
        submitExpense={submitExpense}
        currentUserEmail={currentUserEmail} />
    );
  }
}

export default withRouter(EditExpenseForm);