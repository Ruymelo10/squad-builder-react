export default function validateSignUp(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Usuario obrigatório';
  }

  if (!values.email) {
    errors.email = 'Email obrigatório';
  }

  if (!values.password) {
    errors.password = 'Senha obrigatória';
  }

  if (!values.password2) {
    errors.password2 = 'Senha obrigatória';
  } else if (values.password !== values.password2) {
    errors.password2 = 'Senhas incompatíveis';
  }

  return errors;
}
