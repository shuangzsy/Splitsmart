import { connect } from 'react-redux';
// import { requestEvents, deleteEvent } from '../../actions/event_actions';
// import { fetchEvents } from '../../util/event_api_util';
import UserProfile from './user_profile';

const mSTP = (state, ownProps) => ({
  currentUser: state.users[ownProps.match.params.userId]
});

// const mDTP = (dispatch) => ({
//   requestEvents: () => dispatch(requestEvents()),
//   deleteEvent: eventId => dispatch(deleteEvent(eventId))
// })

export default connect(mSTP, null)(UserProfile);