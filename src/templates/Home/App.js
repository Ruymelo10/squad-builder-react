import React from 'react';
import './App.scss';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="app-content">
        <h1>Elenco dos sonhos</h1>
        <p>Escolha a formação, seus jogadores e monte uma verdadeira seleção para disputar com a galera </p>
      </div>
      <img src="/images/champions-trophy.png" alt="squad-image" className="app-image"></img>
      <div className="app-buttons">
        <Button buttonSize="btn--large">
          <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
            Cadastrar
          </Link>
        </Button>
        <Button buttonSize="btn--large" buttonStyle="btn--outline">
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            Entrar
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default App;
