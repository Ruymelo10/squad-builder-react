import { LOGIN, LOGOUT } from '../actions';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
}

export const getUser = (state) => state.user;
