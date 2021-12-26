import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';
import * as UserApi from './util/user_api_util';
import * as SessionApi from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
  window.store = store;
  window.UserApi = UserApi;
  window.SessionApi = SessionApi;
});