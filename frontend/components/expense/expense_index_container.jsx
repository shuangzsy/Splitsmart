import { connect } from 'react-redux';
import { requestExpenses, deleteExpense } from '../../actions/expense_action';
import ExpenseIndex from './expense_index';


const mSTP = (state) => ({
  expenses: Object.values(state.expenses)
});

const mDTP = (dispatch) => ({
  requestExpenses: () => dispatch(requestExpenses()),
  deleteExpense: expenseId => dispatch(deleteExpense(expenseId))
})

export default connect(mSTP, mDTP)(ExpenseIndex);