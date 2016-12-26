import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import {SignupPage, SigninPage, HomePage} from './components/pages';


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