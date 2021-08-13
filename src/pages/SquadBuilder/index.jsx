import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Button } from '../../components/Button';
import { Formations } from '../../components/Formations';
import { Players } from '../../components/Players';
import { loadPlayers } from '../../utils/load-players';
import { FormationArea } from '../../components/FormationArea';
import { PlayerPositionProvider } from '../../components/PlayerPositionContext';
import { i18next } from '../../translate/i18n';

export const SquadBuilder = () => {
  const [loading, setLoading] = useState(true);
  const [playersData, setPlayersdata] = useState({});

  useEffect(() => {
    const handleLoadPlayers = loadPlayers();
    handleLoadPlayers.then((data) => {
      setPlayersdata(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="SquadBuilder">
      {loading ? (
        <div className="squad-builder-loading">
          <i className="fas fa-spinner fa-spin fa-5x"></i>
        </div>
      ) : (
        <>
          <input className="squad-input" placeholder={i18next.t('inputPh.SquadBuilder')} />
          <div className="squad-content">
            <PlayerPositionProvider>
              <div className="squad-players-area">
                <div className="squad-players-area-text">
                  <h1>{i18next.t('h1.SquadBuilder')}</h1>
                  <p>{i18next.t('p.SquadBuilder')}</p>
                </div>
                <Players players={playersData} />
              </div>
              <div className="squad-area">
                <FormationArea />
              </div>
            </PlayerPositionProvider>
            <div className="squad-options">
              <Formations />
              <div className="squad-buttons">
                <Button buttonStyle="btn--outline" id="squad-redo-btn">
                  {i18next.t('buttons.SquadBuilderRedo')}
                </Button>
                <Button buttonStyle="btn--outline">{i18next.t('buttons.SquadBuilderSave')}</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
