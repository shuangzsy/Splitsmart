import React from 'react';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      });
    }
  }

  render() {
    { if (this.props.formType === 'signup'){
    return (
      <div className='signup_form'>
        <h1>Sign Up</h1>
        <form className='signup_form_details' onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" onChange={this.update('email')} />
          
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={this.update('username')} />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" onChange={this.update('password')} />
          <button>{this.props.formType}</button>
        </form>
      </div>)}
      else {return (
      <div className='login_form'>
        <h1>Log In</h1>
        <form className='login_form_details' onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input id="email" type="text" onChange={this.update('email')} />
          {/* <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={this.update('username')} /> */}
          <label htmlFor="password">Password</label>
          <input id="password" type="password" onChange={this.update('password')} />
          <button>{this.props.formType}</button>
        </form>
      </div>
      )}
     }
    }
  }
