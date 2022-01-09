import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import UserProfileContainer from './user/user_profile_container';
import ExpenseIndexContainer from './expense/expense_index_container';
import CreateGroupContainer from './groups/create_group_container';
import ExpenseShowContainer from './expense/expense_show_container';
import CreateFriendContainer from './friends/create_friend_container';
import mainNav from './main_nav';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import WelcomePage from './welcome';

const App = () => (
  <>
    <Switch>
      <AuthRoute exact path="/" component={WelcomePage} /> 
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path='/dashboard' component={UserProfileContainer} />
      <ProtectedRoute exact path='/all' component={ExpenseIndexContainer} />
      <ProtectedRoute exact path='/all/:expenseId' component={ExpenseShowContainer} />
      <ProtectedRoute exact path='/groups/new' component={CreateGroupContainer} />
      <ProtectedRoute exact path='/friends/new' component={CreateFriendContainer} />
    </Switch> 
  </>

);

export default App;