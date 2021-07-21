const validateLogIn = (values, user, status) => {
  let currentUser = user.filter((user) => {
    return values.username === user.username;
  });

  let errors = {};

  if (currentUser.length === 0) {
    errors.userNotFound = 'Usuário não encontrado';
  } else if (values.password !== user[0].password) {
    errors.incorrectPassword = 'Senha incorreta';
  }
  currentUser = currentUser[0];

  if (Object.keys(errors).length > 0) {
    status = 'login-error';
  } else {
    status = 'login-success';
  }

  return { errors, status, currentUser };
};

export default validateLogIn;
