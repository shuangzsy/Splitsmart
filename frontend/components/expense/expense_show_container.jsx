import { connect } from 'react-redux';
import { requestExpense } from '../../actions/expense_action';
import ExpenseShow from './expense_show';

const mSTP = (state, ownProps) => ({
  splits: (() => {
    const expense = state.entities.expenses[ownProps.expense.id];
    return expense.splitIds.map(splitId =>  {
      return state.entities.splits[splitId]
    })
  })()
}); 

const mDTP = dispatch => ({
  requestExpense: expenseId => dispatch(requestExpense(expenseId))
})

export default connect(mSTP, mDTP)(ExpenseShow);
