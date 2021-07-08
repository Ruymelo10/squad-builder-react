const validateLogIn = (values, user) => {
  const currentUser = user.filter((user) => {
    return values.username === user.username;
  });

  let errors = {};

  if (currentUser.length === 0) {
    errors.userNotFound = 'Usuário não encontrado';
  } else if (values.password !== user[0].password) {
    errors.incorrectPassword = 'Senha incorreta';
  }

  return errors;
};

export default validateLogIn;
