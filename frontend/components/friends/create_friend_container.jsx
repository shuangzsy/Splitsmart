import { connect } from 'react-redux';
import { createFriend, removeFriendErrors} from '../../actions/friend_action';
import FriendForm from './friend_form';

const mSTP = state => ({
  friend: {
    friend_email: ''
  },
  formType: "Add friends",
  friendErrors: state.friendErrors
})

const mDTP = dispatch => ({
  submitFriend: friend => dispatch(createFriend(friend)),
  removeFriendErrors: () => dispatch(removeFriendErrors())
})

export default connect(mSTP, mDTP)(FriendForm)
