import { connect } from 'react-redux';
import { updateExpense } from '../../actions/expense_action';
import ExpenseForm from './expense_form';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => ({
  expense: state.entities.expenses[ownProps.match.params.expenseId],
  splits: [[state.session.currentUser.email, -0.5], ['', 0.5]],
  formType: "Edit the expense"
})

const mDTP = dispatch => ({

  submitExpense: (expense, splits) => dispatch(updateExpense(expense, splits))
  // submitExpense: ({ expense, splits }) => dispatch(createExpense({ expense, splits })),
})

export default withRouter(connect(mSTP, mDTP)(ExpenseForm))
