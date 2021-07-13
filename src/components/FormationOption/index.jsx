import { React } from 'react';
import './styles.scss';
import P from 'prop-types';

export const FormationOption = ({ children }) => {
  return (
    <div className="FormationOptions">
      <h2>{children}</h2>
    </div>
  );
};

FormationOption.propTypes = {
  children: P.string.isRequired,
};
