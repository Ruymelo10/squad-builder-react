import React from 'react';
import P from 'prop-types';
import './styles.scss';

export const InputForm = (props) => {
  const { labelName, htmlFor, ...inputProps } = props;
  return (
    <>
      <label htmlFor={htmlFor} className="form-label">
        {labelName}
      </label>
      <input className="form-input" {...inputProps} />
    </>
  );
};

InputForm.propTypes = {
  labelName: P.string.isRequired,
  htmlFor: P.string.isRequired,
  id: P.string.isRequired,
  type: P.string.isRequired,
  name: P.string.isRequired,
  placeholder: P.string,
};
