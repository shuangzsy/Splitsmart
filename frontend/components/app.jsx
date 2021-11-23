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
      <div className='header'>
        <div>
        <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1637653233/IMG_5588_iksqs5.jpg"/>
        </div>
 
        <ul>
          <Link className='login' to='/login'>Log In</Link>
          <Link className='signup' to='/signup'>Sign Up</Link>
        </ul>
    </div>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      {/* <ProtectedRoute path='/dashboard' component={DashboardNavbar}/> */}
  </>

);

export default App;