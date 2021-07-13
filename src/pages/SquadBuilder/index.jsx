import { React } from 'react';
import './styles.scss';
import { Button } from '../../components/Button';
import { Formations } from '../../components/Formations';
import { PlayersArea } from '../../components/PlayersArea';

export const SquadBuilder = () => {
  return (
    <div className="SquadBuilder">
      <input className="squad-input" placeholder="Dê um nome à sua equipe" />
      <div className="squad-content">
        <PlayersArea />
        <div className="squad-area"></div>
        <div className="squad-options">
          <Formations />
          <div className="squad-buttons">
            <Button buttonStyle="btn--outline" id="squad-redo-btn">
              Refazer escalação
            </Button>
            <Button buttonStyle="btn--outline">Confirmar escalação</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
