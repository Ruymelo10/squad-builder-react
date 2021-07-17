import { React } from 'react';
import './styles.scss';
import { PlayersBtn } from '../PlayersBtn';

export const FormationArea = () => {
  return (
    <div className="FormationArea">
      <div className="formation-area strikers">
        <PlayersBtn position="atacante" />
        <PlayersBtn position="atacante" />
        <PlayersBtn position="atacante" />
      </div>
      <div className="formation-area midfielders">
        <PlayersBtn position="meia" />
        <PlayersBtn position="meia" />
        <PlayersBtn position="meia" />
      </div>
      <div className="formation-area defenders">
        <PlayersBtn position="defensor" />
        <PlayersBtn position="defensor" />
        <PlayersBtn position="defensor" />
        <PlayersBtn position="defensor" />
      </div>
      <div className="formation-area goalkeeper">
        <PlayersBtn position="goleiro" />
      </div>
    </div>
  );
};
