import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greeting from './components/Greeting';
import SignupPage from './components/signup/SignupPage';

render(
  <Router history={browserHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={Greeting} />
      <Route path="signup" component={SignupPage} />
    </Route>
  </Router>,
  document.getElementById('app')
);