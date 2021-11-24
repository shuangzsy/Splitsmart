import { connect } from 'react-redux';
import {logout} from '../../actions/session_actions';
import UserProfile from './user_profile';

const mSTP = (state, ownProps) => ({
  currentUser: state.session.currentUser["username"]
});

const mDTP = (dispatch) => ({
  UserLogout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(UserProfile);