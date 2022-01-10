import React from 'react';
import ActivityIndexItem from './activity_index_item';
import LeftNav from '../nav/left_side_bar';
import DashboardNav from '../dashborad_nav';

class ActivityIndex extends React.Component {
  constructor(props) {
    super(props)

    // this.state 
  }

  componentDidMount() {
    this.props.requestExpenses();
  }

  render() {
    const { activities } = this.props;
    return (
      <div>
        <div>
          <div><DashboardNav currentUser={this.props.currentUser} UserLogout={this.props.UserLogout} /></div>
        </div>
        <div className='all-activities-container'>
          <div className='left_side_bar'><LeftNav expenses={this.props.expenses} splits={this.props.splits} currentUser={this.props.currentUser} /></div>
          <div className='all-activities'>
            <div className='all-activities-title'>Recent Activity</div>
            <ul>
              {
                activities.map(activity => <ActivityIndexItem key={activity.id} activity={activity}/>)
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ActivityIndex;
