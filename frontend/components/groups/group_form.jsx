import React from 'react';
import { withRouter } from 'react-router-dom';

class GroupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.group;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit() {
    debugger;
    this.props.submitGroup(this.state);
    debugger;
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div className='add-group-container'>
        <form onSubmit={this.handleSubmit}>
          <div className='add-group-form-title'>Add Group</div>
          <div className='add-group-input-button-container'>
            <div><input className='add-group-input' placeholder='Enter the group name' type="text" value={this.state.group_name} onChange={this.update('group_name')} /></div>
            <div><input className='add-group-submit-button' type="submit" value="Add Group" /></div>
            {/* <div className='friend-error-show-up'>{this.props.friendErrors[0]}</div> */}
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(GroupForm);