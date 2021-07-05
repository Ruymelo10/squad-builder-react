export default function validateLogIn(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Usuario obrigatório';
  }

  if (!values.password) {
    errors.password = 'Senha obrigatória';
  }

  return errors;
}
