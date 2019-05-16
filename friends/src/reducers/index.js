// import actions
import { ACQUIRE_FRIENDS, LOGIN_START } from '../actions';

const initialState = {
  friends: [],
  asyncRequest: false,
  error: null,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        asyncRequest: LOGIN_START,
      };
    case ACQUIRE_FRIENDS:
      return state;
    default:
      return state;
  }
}

export default rootReducer;
