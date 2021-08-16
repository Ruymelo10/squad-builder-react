export const LOGIN = 'login';
export const LOGOUT = 'logout';

export const userLogin = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

export const userLogout = () => {
  return {
    type: LOGOUT,
  };
};
