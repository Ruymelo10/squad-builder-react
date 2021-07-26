const initialState = [];

export function fetchUserReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export const getFetchedUsers = (state) => state.fecthUsers;
