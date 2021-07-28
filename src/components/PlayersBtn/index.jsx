import React from 'react';
import './styles.scss';
import P from 'prop-types';
import { usePlayerPosition } from '../PlayerPositionContext';

export const PlayersBtn = ({ position }) => {
  const { setPlayerAreaPosition } = usePlayerPosition();
  return (
    <div className="PlayersBtn">
      <button
        className="fas fa-plus-circle fa-3x"
        onClick={() => {
          setPlayerAreaPosition(position);
        }}
      />
    </div>
  );
};

PlayersBtn.propTypes = {
  position: P.string,
  onClick: P.func,
};
