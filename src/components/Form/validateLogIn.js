const validateLogIn = (values, user, status) => {
  const currentUser = user.filter((user) => {
    return values.username === user.username;
  });

  let errors = {};

  if (currentUser.length === 0) {
    errors.userNotFound = 'Usuário não encontrado';
  } else if (values.password !== user[0].password) {
    errors.incorrectPassword = 'Senha incorreta';
  }

  if (Object.keys(errors).length > 0) {
    status = 'login-error';
  } else {
    status = 'login-success';
  }

  return { errors, status };
};

export default validateLogIn;
