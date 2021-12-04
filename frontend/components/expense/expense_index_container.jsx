import { connect } from 'react-redux';
import { requestExpenses, deleteExpense } from '../../actions/expense_action';
import ExpenseIndex from './expense_index';


const mSTP = (state) => ({
  expenses: Object.values(state.entities.expenses),
  currentUser: state.session.currentUser,
  splits: Object.values(state.entities.splits)
});

const mDTP = (dispatch) => ({
  UserLogout: () => dispatch(logout()),
  requestExpenses: () => dispatch(requestExpenses()),
  deleteExpense: expenseId => dispatch(deleteExpense(expenseId))
})

export default connect(mSTP, mDTP)(ExpenseIndex);