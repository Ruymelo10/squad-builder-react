import { React } from 'react';
import './styles.scss';
import P from 'prop-types';

export const PlayerAtr = ({ attributes }) => {
  const chooseColor = (color) => {
    return color >= 85 ? 'rgb(5, 194, 5)' : color >= 60 ? 'rgb(230, 195, 0)' : 'rgb(213, 7, 7)';
  };

  return (
    <div className="PlayerAtr">
      {attributes.map((attribute, index) => {
        return (
          <div key={index} className="palyer-atr">
            <p>
              {Object.keys(attribute)[0]} {Object.values(attribute)[0]}
            </p>

            <div
              className="player-atr-bar"
              style={{ backgroundColor: chooseColor(Object.values(attribute)[0]) }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

PlayerAtr.propTypes = {
  attributes: P.array.isRequired,
};
