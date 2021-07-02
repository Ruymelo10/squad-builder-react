export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password !== values.password2) {
    errors.password2 = 'Passwords do not match';
  }

  return errors;
}
