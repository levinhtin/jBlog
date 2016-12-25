import * as types from '../constants/actionTypes';
import isEmpty from 'lodash/isEmpty';
import cookie from 'react-cookie';

// localStore
const userInfo = JSON.parse(localStorage.getItem('userInfo'));
const initialState = {
  isAuthenticated: !isEmpty(userInfo),
  user: userInfo || null
};

export function userReducers(state = initialState, action) {
  console.log('UserReducers');
  switch (action.type) {
    case types.SIGNIN:
      return {
        isAuthenticated: true,
        user: action.user
      };
    case types.SIGNUP:
      return {
        isAuthenticated: false,
        data: action.payload
      };
    case types.LOGOUT:
      localStorage.removeItem('userInfo');
      cookie.remove('accessToken', {path: '/'});

      return {
        isAuthenticated: false,
        user: null
      };
    case types.ERROR:
      return {
        data: action.payload
      }
    default:
      return state;
  }
}