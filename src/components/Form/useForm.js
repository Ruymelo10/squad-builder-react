import { useState } from 'react';
import { loadUsers } from '../../utils/load-users';
import { validateMissingFields } from './validateMissingFields';

export const useForm = (validate, formType) => {
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
    const currentStatus = status;
    const validateResponse = validate(values, usersResponse, currentStatus);
    setErrors(validateResponse.errors);
    setStatus(validateResponse.status);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputErrors = validateMissingFields(values, formType);
    setErrors(inputErrors);

    if (Object.keys(inputErrors).length === 0) {
      setStatus('loading');
      handleFormResponse();
    }
  };

  return { handleChange, values, handleSubmit, errors, status };
};
