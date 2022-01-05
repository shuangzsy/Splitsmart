import React from 'react';

class FriendForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.friend;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit() {
    this.props.submitFriend(this.state);
  }

  render() {
    return (
      <div className='invite-friend-container'>
        <form onSubmit={this.handleSubmit}>
          <div className='invite-friend-form-title'>Add Friend</div>
          <div className='invite-friend-input-button-container'>
            <div><input className='invite-friend-input' placeholder='Enter an email address' type="text" value={this.state.description} onChange={this.update('friend_email')} /></div>
            <div><input className='invite-friend-submit-button' type="submit" value="Add Friend" /></div>
          </div>
        </form>
      </div>
    )
  }
}

export default FriendForm;