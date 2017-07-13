import React from 'react';
import {
  // NOTE no more browserHistory https://reacttraining.com/react-router/web/api/BrowserRouter
  BrowserRouter as Router,
  Route
  // NOTE Hello react-router-dom!
} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </Provider>
);

export default Root;
