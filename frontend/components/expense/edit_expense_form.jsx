import ExpenseForm from './expense_form';
import { withRouter } from 'react-router-dom';
import React from 'react';

class EditExpenseForm extends React.Component {
  componentDidMount() {
    this.props.requestExpense(this.props.expenseId);
    // debugger;
  }

  render() {
    const { expense, splits, formType, submitExpense, currentUserEmail, allSplits, allExpenses, currentUser, friends, groups} = this.props;
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
        key={copyExpense.id}
        expense={copyExpense}
        splits={splits}
        formType={formType}
        submitExpense={submitExpense}
        currentUserEmail={currentUserEmail}
        allSplits={allSplits}
        allExpenses={allExpenses}
        currentUser={currentUser}
        friends={friends}
        groups={groups}/>
    );
  }
}

export default withRouter(EditExpenseForm);