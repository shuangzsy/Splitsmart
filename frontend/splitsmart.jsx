import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';
import * as UserApi from './util/user_api_util';
import * as SessionApi from './util/session_api_util';
import {logout} from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {

  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
  window.store = store;
  window.UserApi = UserApi;
  window.SessionApi = SessionApi;
});