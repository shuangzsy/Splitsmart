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
  formType: "Create Expense"
})

const mDTP = dispatch => ({
  
  submitExpense: expense => dispatch(createExpense(expense)),
  closeModal: () => dispatch(closeModal()),
  otherForm: (
    <button onClick={() => dispatch(openModal('addexpense'))}>
      Signup
    </button>)
})

export default connect(mSTP, mDTP)(ExpenseForm)
