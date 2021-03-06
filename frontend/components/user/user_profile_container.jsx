import { connect } from 'react-redux';
import React from 'react';
import {logout} from '../../actions/session_actions';
import UserProfile from './user_profile';
import { openModal } from '../../actions/modal_actions';


const mSTP = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  expenses: Object.values(state.entities.expenses),
  splits: Object.values(state.entities.splits)
});

const mDTP = (dispatch) => ({
  UserLogout: () => dispatch(logout()),
  AddExpense: (
  <button className='add-expense-button' onClick={() => dispatch(openModal('addexpense'))}>
    Add an expense
  </button>)
})

export default connect(mSTP, mDTP)(UserProfile);