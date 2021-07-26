export const loadUsers = () => {
  return async (dispatch) => {
    const usersResponse = await fetch('http://localhost:8000/users');
    const users = await usersResponse.json();
    dispatch({
      type: 'FETCH_USER',
      payload: users,
    });
    return users;
  };
};
