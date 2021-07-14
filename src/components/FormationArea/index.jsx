import { React } from 'react';
import './styles.scss';
import { PlayersBtn } from '../PlayersBtn';

export const FormationArea = () => {
  return (
    <div className="FormationArea">
      <div className="formation-area strikers">
        <PlayersBtn />
        <PlayersBtn />
        <PlayersBtn />
      </div>
      <div className="formation-area midfielders">
        <PlayersBtn />
        <PlayersBtn />
        <PlayersBtn />
      </div>
      <div className="formation-area defenders">
        <PlayersBtn />
        <PlayersBtn />
        <PlayersBtn />
        <PlayersBtn />
      </div>
      <div className="formation-area goalkeeper">
        <PlayersBtn />
      </div>
    </div>
  );
};
