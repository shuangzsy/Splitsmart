import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import UserProfileContainer from './user/user_profile_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <>
    {/* <Switch> */}
      <div className='header'>
        <img src="" alt="" />
        <ul>
          <Link className='login' to='/login'>Log In</Link>
          <Link className='signup' to='/signup'>Sign Up</Link>
        </ul>
    </div>
      {/* <Link to='/logout'>Log Out</Link> */}
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      {/* <ProtectedRoute path="/dashboard" component={UserProfileContainer} /> */}
    {/* </Switch> */}
    {/* <Route path='/logout' ></Route> */}
  </>

);

export default App;