// import actions
import { ACQUIRE_FRIENDS } from './actions';

const initialState = {
  friends: [],
  asyncRequest: false,
  error: null,
}

const rootReducer = (state = initialState, action) => {
switch (action.type) {
    case ACQUIRE_FRIENDS:
      return state;
    default:
      return state;
  }
}

export default rootReducer;
