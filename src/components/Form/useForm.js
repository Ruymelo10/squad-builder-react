import { useState, useEffect, useCallback } from 'react';
import { loadUsers } from '../../container/fetchUser/fetchUserAction';
import { validateMissingFields } from './validateMissingFields';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../container/user/userAction';
import { useSelector } from 'react-redux';
import { getFetchedUsers } from '../../container/fetchUser/fetchUserReducer';
import { getUser } from '../../container/user/userReducer';

export const useForm = (validate, formType) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('init');
  const { users } = useSelector(getFetchedUsers);
  const { name } = useSelector(getUser);
  const fetchStatus = useSelector(getFetchedUsers).status;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleFormResponse = useCallback(() => {
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
  }, [dispatch, status, users, validate, values]);

  useEffect(() => {
    if (fetchStatus === 'fetch-success' && name === undefined) {
      handleFormResponse();
    }
  }, [handleFormResponse, fetchStatus, name]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputErrors = validateMissingFields(values, formType);
    setErrors(inputErrors);

    if (Object.keys(inputErrors).length === 0) {
      setStatus('loading');
      dispatch(loadUsers());
    }
  };

  return { handleChange, values, handleSubmit, errors, status };
};
