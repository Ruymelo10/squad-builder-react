export default function validateSignUp(values, user) {
  let errors = {};
  const searchtUsername = user.some((user) => {
    return values.username === user.username;
  });
  const searchtEmail = user.some((user) => {
    return values.email === user.email;
  });

  if (searchtUsername || searchtEmail) {
    if (searchtEmail) {
      errors.emailFound = 'Email já cadastrado';
    } else if (searchtUsername) {
      errors.usernameFound = 'Nome de usuário indisponível';
    }
  } else {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    };
    fetch('http://localhost:8000/users', options);
  }

  return errors;
}
