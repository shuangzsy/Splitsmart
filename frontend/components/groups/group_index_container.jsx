import { connect } from 'react-redux';
import { requestGroups, deleteGroup } from '../../actions/group_action';
import GroupIndex from './group_index';


const mSTP = (state) => ({
  groups: Object.values(state.entities.groups),
});

const mDTP = (dispatch) => ({
  requestGroups: () => dispatch(requestGroups()),
  deleteGroup: groupId => dispatch(deleteGroup(groupId))
})

export default connect(mSTP, mDTP)(GroupIndex);