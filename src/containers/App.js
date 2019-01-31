import React from 'react';
// Provider wraps the entire application allowing it to use redux store
import {Provider} from 'react-redux';
// Import the config function used for bringing together reducers and applied middlewares
import {configureStore} from '../store/index';
// Import router so that we can navigate from page to page
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './Main';
import Navbar from './Navbar';

// Run config function to bring reducers together and apply middleware(thunk and redux extension for Chrome)
const store = configureStore();

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
