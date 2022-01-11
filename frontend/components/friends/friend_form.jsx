import React from 'react';
import { withRouter } from 'react-router-dom';

class FriendForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.friend;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidUpdate(prevProps){
  //   if (prevProps.friendErrors !== this.props.friendErrors){
  //     this.props.removeFriendErrors
  //   }
  // }
  componentDidMount() {
    this.props.removeFriendErrors()
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit() {
    this.props.submitFriend(this.state);
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div className='invite-friend-container'>
        <form onSubmit={this.handleSubmit}>
          <div className='invite-friend-form-title'>Add Friend</div>
          <div className='invite-friend-input-button-container'>
            <div><input className='invite-friend-input' placeholder='Enter an email address' type="text" value={this.state.friend_email} onChange={this.update('friend_email')} /></div>
            <div><input className='invite-friend-submit-button' type="submit" value="Add" /></div>
            <div className='friend-error-show-up'>{this.props.friendErrors[0]}</div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(FriendForm);