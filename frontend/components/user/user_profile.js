import React from 'react';
// import EventIndexItem from './event_index_item';
import { Link } from 'react-router-dom';

/*
Export an `EventIndex` presentational component that renders a list (`ul`) of
`EventIndexItems`. This component should receive `events` from the store as a 
prop via its container and fetch them once it has successfully mounted to the 
DOM. Below the `ul`, add a link to the new event page with text 'New Event'.
*/

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   this.props.requestCurrentUser();
  // }

  render() {
 
    return (
      <p>hello</p>
    )
  }
}

export default UserProfile;
