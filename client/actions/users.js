import axios from 'axios';
import * as types from '../constants/actionTypes';

export function signup(user) {
  return (dispatch) => {
    axios({
      url: '/api/users',
      method: 'post',
      header: {
        'Content-type': 'application/json'
      },
      data: user
    })
    .then(res => {
      dispatch({type: types.SIGNUP, res});
    })
    .catch(err => {
      dispatch({type: types.ERROR, err});
    });
  };
}