import { React } from 'react';
import './styles.scss';

export const PlayersArea = () => {
  return (
    <div className="PlayersArea">
      <div className="playes-area-text">
        <h1>Área dos jogadores</h1>
        <p>
          Aqui você escolhe quem fará parte da sua equipe. Cada jogador tem seu overall e atributos
          de velocidade (VEL), finalização(FIN), passe(PAS), defesa(DEF), de acordo com suas
          características reais.
        </p>
      </div>
    </div>
  );
};
