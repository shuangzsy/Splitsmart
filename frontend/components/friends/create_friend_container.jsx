import { connect } from 'react-redux';
import { createFriend } from '../../actions/friend_action';
import FriendForm from './friend_form';

const mSTP = state => ({
  friend: {
    FriendEmail: ''
  },
  formType: "Invite friends"
})

const mDTP = dispatch => ({
  submitFriend: friend => dispatch(createFriend(friend))
})

export default connect(mSTP, mDTP)(FriendForm)
