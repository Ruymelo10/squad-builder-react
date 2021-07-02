import React from 'react';
import P from 'prop-types';
import { useForm } from '../Form/useForm';

export const InputForm = (props) => {
  // eslint-disable-next-line
  const {handleChange, values} = useForm();
  const {labelName, htmlFor, ...inputProps} = props;
  return (
    <>
      <label htmlFor={htmlFor} className="form-label" >
        {labelName}
      </label>
      <input type={inputProps.type} name={inputProps.name}
        className="form-input" placeholder={inputProps.placeholder}
         onChange={handleChange} value={values.name} />
    </>
  );
};

InputForm.propTypes = {
  labelName: P.string,
  htmlFor: P.string,
  type: P.string.isRequired,
  name: P.string.isRequired,
  placeholder: P.string
};
