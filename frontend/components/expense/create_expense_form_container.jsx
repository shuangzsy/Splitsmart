import { connect } from 'react-redux';
import { createExpense } from '../../actions/expense_action';
import ExpenseForm from './expense_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
  expense: {
    description: 'Enter a description',
    total_amount: 0,
    creator_id: state.entities.users.id,
    settled: false,
    group_name:''
  },
  formType: "Add an expense"
})

const mDTP = dispatch => ({
  
  submitExpense: expense => dispatch(createExpense(expense)),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(ExpenseForm)
