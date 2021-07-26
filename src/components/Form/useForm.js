import { useState } from 'react';
import { loadUsers } from '../../container/fetchUser/fetchUserAction';
import { validateMissingFields } from './validateMissingFields';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../container/user/userAction';

export const useForm = (validate, formType) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('init');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormResponse = (users) => {
    const currentStatus = status;
    const validateResponse = validate(values, users, currentStatus);
    setErrors(validateResponse.errors);
    setStatus(validateResponse.status);
    if (validateResponse.status === 'login-success') {
      dispatch(
        userLogin({
          name: validateResponse.currentUser.username,
          role: validateResponse.currentUser.role,
        }),
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputErrors = validateMissingFields(values, formType);
    setErrors(inputErrors);

    if (Object.keys(inputErrors).length === 0) {
      setStatus('loading');
      dispatch(loadUsers())
        .then((users) => handleFormResponse(users))
        .catch(() => {
          dispatch({
            type: 'FETCH_USER_FAILURE',
            error: 'fetch error',
          });
        });
    }
  };

  return { handleChange, values, handleSubmit, errors, status };
};
