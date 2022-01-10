import { connect } from 'react-redux';
import { requestExpenses} from '../../actions/expense_action';
import ActivityIndex from './activity_index';
import { logout } from '../../actions/session_actions';


const mSTP = (state) => ({
  activities: Object.values(state.entities.activities),
  expenses: Object.values(state.entities.expenses),
  currentUser: state.session.currentUser,
  splits: Object.values(state.entities.splits),
  users: Object.values(state.entities.users),
});

const mDTP = (dispatch) => ({
  UserLogout: () => dispatch(logout()),
  requestExpenses: () => dispatch(requestExpenses())
})

export default connect(mSTP, mDTP)(ActivityIndex);