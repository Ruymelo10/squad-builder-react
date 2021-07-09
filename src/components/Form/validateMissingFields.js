export const validateMissingFields = (values, formType) => {
  const inputErrors = {};
  if (!values.username) {
    inputErrors.username = 'Usuário obrigatório';
  }
  if (!values.password) {
    inputErrors.password = 'Senha obrigatória';
  }

  if (formType === 'signup') {
    if (!values.email) {
      inputErrors.email = 'Email obrigatório';
    }
    if (!values.password2) {
      inputErrors.password2 = 'Senha obrigatória';
    } else if (values.password !== values.password2) {
      inputErrors.password2 = 'Senhas incompatíveis';
    }
  }

  return inputErrors;
};
