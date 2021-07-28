import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Button } from '../../components/Button';
import { Formations } from '../../components/Formations';
import { Players } from '../../components/Players';
import { loadPlayers } from '../../utils/load-players';
import { FormationArea } from '../../components/FormationArea';
import { PlayerPositionProvider } from '../../components/PlayerPositionContext';

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
          <input className="squad-input" placeholder="Dê um nome à sua equipe" />
          <div className="squad-content">
            <PlayerPositionProvider>
              <div className="squad-players-area">
                <div className="squad-players-area-text">
                  <h1>Área dos jogadores</h1>
                  <p>
                    Aqui você escolhe quem fará parte da sua equipe. Cada jogador tem seu overall e
                    atributos de velocidade (VEL), finalização(FIN), passe(PAS), defesa(DEF), de
                    acordo com suas características reais.
                  </p>
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
                  Refazer escalação
                </Button>
                <Button buttonStyle="btn--outline">Confirmar escalação</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
