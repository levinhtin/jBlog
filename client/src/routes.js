import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import {SignupPage, SigninPage, HomePage} from './pages';


const routes = [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: HomePage
    },
    childRoutes: [
      {
        path: 'signin',
        component: SigninPage
      },
      {
        path: 'signup',
        component: SignupPage
      }
    ]
  }
];

export default routes;