import React from 'react';
import './App.scss';
import { Button } from '../../components/Button';

function App() {
  return (
    <div className="App">
      <div className="app-content">
        <h1>Elenco dos sonhos</h1>
        <p>Escolha a formação, seus jogadores
          e monte uma verdadeira seleção para disputar com a galera </p>
      </div>
      <img src="/images/champions-trophy.png" alt="squad-image"
        className="app-image"></img>
      <div className="app-buttons">
        <Button>Cadastrar</Button>
        <Button buttonStyle="btn--outline">Entrar</Button>
      </div>
    </div>
  );
}

export default App;
