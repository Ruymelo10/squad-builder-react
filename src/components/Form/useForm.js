import { useState } from 'react';
import { loadUsers } from '../../utils/load-users';

export const useForm = (validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('init');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormResponse = async () => {
    const usersResponse = await loadUsers();
    setErrors(validate(values, usersResponse));
    setStatus('not-loading');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputErrors = {};
    if (!values.username) {
      inputErrors.username = 'Usuário obrigatório';
    }
    if (!values.password) {
      inputErrors.password = 'Senha obrigatória';
    }
    setErrors(inputErrors);

    if (Object.keys(inputErrors).length === 0) {
      setStatus('loading');
      handleFormResponse();
    }
  };

  return { handleChange, values, handleSubmit, errors, status };
};
