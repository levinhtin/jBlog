import axios from 'axios';

export default function customFetch(url, option) {
  return axios(url, option);
}