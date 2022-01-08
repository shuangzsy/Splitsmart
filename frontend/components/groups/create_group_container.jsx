import { connect } from 'react-redux';
import { createGroup} from '../../actions/group_action';
import GroupForm from './group_form';

const mSTP = state => ({
  group: {
    group_name: ''
  },
  formType: "Add Groups"
  // groupErrors: state.groupErrors
})

const mDTP = dispatch => ({
  submitGroup: group => dispatch(createGroup(group))
  // removeFriendErrors: () => dispatch(removeFriendErrors())
})

export default connect(mSTP, mDTP)(GroupForm)
