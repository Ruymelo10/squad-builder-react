import React, { useState } from 'react';
import { Button } from '../../components/Button';
import {
  InsertPlayerWrap,
  Input,
  PlayerInputs1,
  PlayerInputs2,
  PositionOption,
  StatusMessage,
  PStatusMessage,
  FasStatusMessage,
  // FasStatusMessage,
} from './styles';

const goleiro = ['ELA', 'MAN', 'REF', 'POS'];
const linePlayer = ['VEL', 'FIN', 'PAS', 'DEF'];

export const InsertPlayer = () => {
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('init');

  function setFormValues(attribute) {
    let values = {};
    values.name = attribute.name.value;
    values.position = attribute.position.value;
    values.overall = attribute.overall.value;
    values.picture = 'exemplo.png';
    const attrArray = values.position === 'goleiro' ? goleiro : linePlayer;
    values.attributes = attrArray.map((atr, index) => {
      let x = attrArray[index];
      return { [atr]: attribute[x].value };
    });
    return values;
  }

  const closeMessage = () => {
    setStatus('init');
  };

  const clearFields = () => {
    const formName = document.getElementsByName('form')[0];
    formName.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = setFormValues(e.target);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    };
    fetch('http://localhost:8000/players', options)
      .then(() => setStatus('success'))
      .then(() => {
        clearFields();
      })
      .catch(() => setStatus('error'));
  };

  return (
    <InsertPlayerWrap>
      {status === 'init' ? null : status === 'success' ? (
        <StatusMessage>
          <FasStatusMessage className="fas fa-times" onClick={() => closeMessage()} />
          <PStatusMessage>Jogador adicionado com sucesso</PStatusMessage>
        </StatusMessage>
      ) : (
        <StatusMessage error>
          <FasStatusMessage error className="fas fa-times" onClick={() => closeMessage()} />
          <PStatusMessage error>Erro ao adicionar jogador</PStatusMessage>
        </StatusMessage>
      )}
      <h1>Adicionar Jogador</h1>
      <form onSubmit={handleSubmit} name="form">
        <PlayerInputs1>
          <Input>
            <label>Nome</label>
            <input name="name" />
          </Input>
          <PositionOption
            id="player-position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            name="position"
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
            <input name="overall" type="number" min="1" max="99" />
          </Input>
          {position === 'goleiro'
            ? goleiro.map((atribute) => {
                return (
                  <Input key={atribute}>
                    <label>{atribute}</label>
                    <input name={atribute} type="number" min="1" max="99" />
                  </Input>
                );
              })
            : linePlayer.map((atribute) => {
                return (
                  <Input key={atribute}>
                    <label>{atribute}</label>
                    <input name={atribute} type="number" min="1" max="99" />
                  </Input>
                );
              })}
        </PlayerInputs2>
        <Button className="form-input-btn" type="submit">
          Adicionar jogador
        </Button>
      </form>
    </InsertPlayerWrap>
  );
};
