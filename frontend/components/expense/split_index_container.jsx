import { connect } from 'react-redux';
import { requestExpenses, deleteExpense } from '../../actions/expense_action';
import SplitIndex from './split_index';


const mSTP = (state) => ({
  expenses: Object.values(state.entities.expenses),
  splits: Object.values(state.entities.splits),
  currentUser: state.session.currentUser.email,
  currentUsername: state.session.currentUser.username
});

const mDTP = (dispatch) => ({
  requestExpenses: () => dispatch(requestExpenses()),
  deleteExpense: expenseId => dispatch(deleteExpense(expenseId))
})

export default connect(mSTP, mDTP)(SplitIndex);