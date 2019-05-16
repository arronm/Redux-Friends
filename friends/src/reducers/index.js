// import actions
import { ACQUIRE_FRIENDS, LOGIN_START, LOGIN_SUCCESS } from '../actions';

const initialState = {
  friends: [],
  asyncRequest: false,
  loggedIn: false,
  error: null,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        asyncRequest: action.type,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        asyncRequest: false,
        loggedIn: true,
      }
    case ACQUIRE_FRIENDS:
      return {
        ...state,
        asyncRequest: action.type,
      };
    default:
      return state;
  }
}

export default rootReducer;
