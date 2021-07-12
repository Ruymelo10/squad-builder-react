import { React } from 'react';
import './styles.scss';
import { Button } from '../../components/Button';

export const SquadBuilder = () => {
  return (
    <div className="SquadBuilder">
      <input className="squad-input" placeholder="Dê um nome à sua equipe" />
      <div className="squad-content">
        <div className="squad-players"></div>
        <div className="squad-area"></div>
        <div className="squad-options">
          <div className="squad-formations"></div>
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
