import { React } from 'react';
import './styles.scss';
import P from 'prop-types';
import { PlayerAtr } from '../PlayerAtr';
export const Players = ({ players }) => {
  return (
    <div className="PlayersArea">
      {players.map((player, index) => {
        return (
          <div key={index} className="players-area-player">
            <h2>{player.overall}</h2>
            <p>{player.name}</p>
            <div className="players-area-player-stats">
              <PlayerAtr attributes={player.attributes} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

Players.propTypes = {
  players: P.array,
};
