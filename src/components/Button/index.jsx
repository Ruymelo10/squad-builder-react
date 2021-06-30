import React from 'react';
import './styles.css';
import P from 'prop-types';

const STYLES = [
  'btn--primary',
  'btn--outline'
];

const SIZES = [
  'btn--medium',
  'btn--large'
];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = STYLES.includes(buttonSize) ? console.log : SIZES[0];
  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}
      type={type}>
      {children}
    </button>
  )
}
Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  buttonSize: P.string,
  buttonStyle: P.string,
  children: P.string.isRequired,
  type: P.string,
  onClick: P.func,
};
