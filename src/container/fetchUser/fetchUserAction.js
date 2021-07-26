export const loadUsers = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_USER_REQUEST' });

    const usersResponse = await fetch('http://localhost:8000/users');
    const users = await usersResponse.json();
    dispatch({
      type: 'FETCH_USER_SUCCESS',
      payload: users,
    });

    return users;
  };
};
