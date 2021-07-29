import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { InsertPlayerWrap, Input, PlayerInputs1, PlayerInputs2, PositionOption } from './styles';

export const InsertPlayer = () => {
  const [position, setPosition] = useState(undefined);
  return (
    <InsertPlayerWrap>
      <h1>Adicionar Jogador</h1>
      <form>
        <PlayerInputs1>
          <Input>
            <label>Nome</label>
            <input />
          </Input>
          <PositionOption
            id="player-position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="" disabled selected>
              Posição
            </option>
            <option value="atacante">atacante</option>
            <option value="meia">meia</option>
            <option value="defensor">defensor</option>
            <option value="goleiro">goleiro</option>
          </PositionOption>
        </PlayerInputs1>
        <PlayerInputs2>
          <Input>
            <label>Overall</label>
            <input type="number" min="1" max="99" />
          </Input>
          <Input>
            {position === 'goleiro' ? <label>ELA</label> : <label>VEL</label>}
            <input type="number" min="1" max="99" />
          </Input>
          <Input>
            {position === 'goleiro' ? <label>MAN</label> : <label>FIN</label>}
            <input type="number" min="1" max="99" />
          </Input>
          <Input>
            {position === 'goleiro' ? <label>REF</label> : <label>PAS</label>}
            <input type="number" min="1" max="99" />
          </Input>
          <Input>
            {position === 'goleiro' ? <label>POS</label> : <label>DEF</label>}
            <input type="number" min="1" max="99" />
          </Input>
        </PlayerInputs2>
        <Button>Submit</Button>
      </form>
    </InsertPlayerWrap>
  );
};
