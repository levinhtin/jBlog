import customFetch from './axios';
import adapterFetch from "redux-api/lib/adapters/fetch";
import reduxApi, {transformer} from 'redux-api';

export default reduxApi({
  signup: {
    url: '/api/signup',
    options: {
      method: 'post'
    }
  }
}).use('fetch', customFetch);