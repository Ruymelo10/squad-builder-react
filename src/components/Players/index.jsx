import React from 'react';
import './styles.scss';
import P from 'prop-types';
import { PlayerAtr } from '../PlayerAtr';
import { usePlayerPosition } from '../PlayerPositionContext';

export const Players = ({ players }) => {
  const { playerAreaPosition } = usePlayerPosition();

  return (
    <div className="PlayersArea">
      {playerAreaPosition === 'default' ? (
        <h2>Selecione uma posição ao no gramado</h2>
      ) : (
        players
          .filter((player) => {
            return player.position === playerAreaPosition;
          })
          .map((player, index) => {
            return (
              <div key={index} className="players-area-player">
                <h2>{player.overall}</h2>
                <p>{player.name}</p>
                <div className="players-area-player-stats">
                  <PlayerAtr attributes={player.attributes} />
                </div>
              </div>
            );
          })
      )}
    </div>
  );
};

Players.propTypes = {
  players: P.array,
  position: P.string,
};

Players.defaultProps = {
  position: 'default',
};
