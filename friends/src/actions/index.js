import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = credentials => dispatch => {
  dispatch({
    type: LOGIN_START,
  });

  axios.post('http://localhost:5000/api/login', {
    username: 'Lambda School',
    password: 'i<3Lambd4',
  });
}


export const ACQUIRE_FRIENDS = 'ACQUIRE_FRIENDS';
export const acquireFriends = () => dispatch => {
  dispatch({
    type: ACQUIRE_FRIENDS,
  });
}
