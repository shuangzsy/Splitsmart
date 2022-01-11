import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
    this.props.submitGroup(this.state);
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div className='add-group-container'>
        <form className='add-group-form' onSubmit={this.handleSubmit}>
          <div>
            <Link to="/dashboard"><img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1641708959/Screen_Shot_2022-01-08_at_10.08.58_PM_fsdfth.png" alt="" /></Link>
          </div>
          <div className='group-info-container'>
            <div className='add-group-form-title'>START A NEW GROUP</div>
            <div className='add-group-form-title-2'>My group shall be called...</div>
            <div className='add-group-input-button-container'>
              <input className='add-group-input' placeholder='Funkytown' type="text" value={this.state.group_name} onChange={this.update('group_name')} />
              <input className='add-group-submit-button' type="submit" value="Save" />
              {/* <div className='friend-error-show-up'>{this.props.friendErrors[0]}</div> */}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(GroupForm);