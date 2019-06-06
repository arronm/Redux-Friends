import axios from 'axios';
import axiosWithAuth from '../config/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = credentials => dispatch => {
  dispatch({
    type: LOGIN_START,
  });

  return axios.post('http://localhost:5000/api/login', credentials)
    .then(({ data }) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.payload,
      });
      localStorage.setItem('authToken', data.payload);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}


export const ACQUIRING_FRIENDS = 'ACQUIRING_FRIENDS';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
export const FRIENDS_FAILURE = 'FRIENDS_FAILURE';
export const acquiringFriends = () => dispatch => {
  dispatch({
    type: ACQUIRING_FRIENDS,
  });
  axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(({ data }) => {
      dispatch({
        type: FRIENDS_SUCCESS,
        payload: data,
      })
    })
    .catch(error => {
      console.log(error);
    });
}
