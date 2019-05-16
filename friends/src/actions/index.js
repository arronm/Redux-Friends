import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = credentials => dispatch => {
  dispatch({
    type: LOGIN_START,
  });

  axios.post('http://localhost:5000/api/login', credentials)
    .then(({ data }) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.payload,
      })
    })
    .catch(error => {
      console.log('Error:', error);
    });
}


export const ACQUIRE_FRIENDS = 'ACQUIRE_FRIENDS';
export const acquireFriends = () => dispatch => {
  dispatch({
    type: ACQUIRE_FRIENDS,
  });
}
