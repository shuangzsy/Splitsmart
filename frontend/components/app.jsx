import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import UserProfileContainer from './user/user_profile_container';
import mainPage from './main_page';
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
      {/* <div className='header'>
        <div>
        <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1637653233/IMG_5588_iksqs5.jpg"/>
        </div>
 
        <ul>
          <Link className='login' to='/login'>Log In</Link>
          <Link className='signup' to='/signup'>Sign Up</Link>
        </ul>
    </div> */}
    <Switch>
      <AuthRoute exact path="/" component={mainPage} /> 
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
    {/* <div>
      <img src="https://res.cloudinary.com/dnmk6viwx/image/upload/v1637687229/Screen_Shot_2021-11-23_at_9.05.40_AM_umuqrr.png" alt="" />
    </div> */}
      {/* <ProtectedRoute path='/dashboard' component={DashboardNavbar}/> */}
  </>

);

export default App;