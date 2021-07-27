const initialState = {
  users: [],
  status: 'init',
  error: null,
};

export function fetchUserReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER_REQUEST':
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        users: action.payload,
        status: 'fetch-success',
        error: null,
      };
    case 'FETCH_USER_FAILURE':
      return {
        ...state,
        status: 'fetch-failure',
        error: action.error,
      };
    default:
      return state;
  }
}

export const getFetchedUsers = (state) => state.fecthUsers;
