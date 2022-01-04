import { connect } from 'react-redux';
import { createExpense } from '../../actions/expense_action';
import ExpenseForm from './expense_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const mSTP = state => ({
  expense: {
    description: '',
    total_amount: '',
    creator_id: state.entities.users.id,
    settled: false,
    group_name:''
  },
  splits: [[state.session.currentUser.email, 0.5],['',0.5]],
  allSplits: Object.values(state.entities.splits),
  allExpenses: Object.values(state.entities.expenses),
  formType: "Add an expense",
  currentUserEmail: state.session.currentUser.email,
  currentUser: state.session.currentUser,
  friends: Object.values(state.entities.friends)
})

const mDTP = dispatch => ({
  
  submitExpense: (expense, splits) => dispatch(createExpense(expense, splits)),
  closeModal: () => dispatch(closeModal()),
})

export default withRouter(connect(mSTP, mDTP)(ExpenseForm))
