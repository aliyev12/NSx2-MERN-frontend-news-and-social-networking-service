import React from 'react';
// Provider wraps the entire application allowing it to use redux store
import {Provider} from 'react-redux';
// Import the config function used for bringing together reducers and applied middlewares
import {configureStore} from '../store/index';
// Import router so that we can navigate from page to page
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import Navbar from './Navbar';
import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
import jwtDecode from 'jwt-decode';

// Run config function to bring reducers together and apply middleware(thunk and redux extension for Chrome)
const store = configureStore();

/* Check and see if there currently is a token stored in the localstorage
If there is a token stored in localStorage, then make it so than all api requests with axios
include that token in the headers */
if(localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    // Prevent someone from manually tampering with the key of jwtToken in localStorage
    try {
        // If localStorage contains a wrong token, then the decoding will fail
        store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
    } catch(e) {
        // When decoding fails, current used is set to nothing and isAuthenticated is set to false
        store.dispatch(setCurrentUser({}));
    }
}

// Stateless functional component declaration
const App = () => (
  <Provider store={store} >
    <Router>
      <div className="onboarding">
        <Navbar />
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
