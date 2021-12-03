import React from 'react';
import { AuthRoute } from '../../util/route_util';
import UserProfile from '../user/user_profile';
import MainNav from '../main_nav';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.removeErrors()
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

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    { if (this.props.formType === 'signup'){
    return (
      <div>
        <MainNav />
        <div className='signup_container'> 
          <div className='signup_form'>
            <p>{this.props.errors[0]}</p>
            <form className='signup_form_details' onSubmit={this.handleSubmit}>
              <label style={{color: 'gray'}}>INTRODUCE YOURSELF</label>
              <label htmlFor="username">Hi there! My name is</label>
              <input id="username" type="text" onChange={this.update('username')} />
              <label htmlFor="email">Here’s my email address:</label>
              <input id="email" type="text" onChange={this.update('email')} />
              <label htmlFor="password">And here’s my password:</label>
              <input id="password" type="password" onChange={this.update('password')} />
              <button >Sign up!</button>
            </form>
          </div>
        </div>
      </div>)}
      else {return (
      <div>
        <MainNav/>
        <div className='login_container'>
          <div className='login_form'>
            <h1>Log In</h1>
            <p>{this.props.errors[0]}</p>
            <form className='login_form_details' onSubmit={this.handleSubmit}>
              <label htmlFor="email">Email address</label>
              <input id="email" type="text" onChange={this.update('email')} />
              <label htmlFor="password">Password</label>
              <input id="password" type="password" onChange={this.update('password')} />
              <button style={{ backgroundColor: "#1CC29F", color: 'white' }} >Log in</button>
            </form>
            <button className="demo-button" onClick={() => this.props.submitForm(this.props.demoUser)}>Demo</button>
          </div>
        </div>
      </div>
      )}
     }
    }
  }
