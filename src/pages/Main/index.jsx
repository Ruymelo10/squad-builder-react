import { React } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

export const Main = () => {
  const user = localStorage.getItem('user');
  const role = localStorage.getItem('role');

  return (
    <div className="Main">
      <h1>Bem vindo {user}</h1>
      <div className="main-buttons">
        <Link to="/squad-builder">
          <Button>Times</Button>
        </Link>
        <Link to="/duels">
          <Button>Duelos</Button>
        </Link>
        {role === 'admin' && (
          <Link to="/insert-player">
            <Button>Adicionar Jogador</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
