import axios from 'axios';
import * as types from '../constants/actionTypes';

export function signup(user) {
  return (dispatch) => {
    return axios({
      url: '/api/users',
      method: 'post',
      header: {
        'Content-type': 'application/json'
      },
      data: user
    });
  };
}