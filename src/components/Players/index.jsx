import { React } from 'react';
import './styles.scss';
import P from 'prop-types';

export const Players = ({ players }) => {
  return (
    <div className="PlayersArea">
      {players.map((player, index) => {
        return (
          <div key={index} className="players-area-player">
            <h2>{player.overall}</h2>
            <p>{player.name}</p>
            <div className="players-area-player-stats">
              <p>VEL {player.velocidade}</p>
              <p>FIN {player.finalizacao}</p>
              <p>PAS {player.passe}</p>
              <p>DEF {player.defesa}</p>
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
