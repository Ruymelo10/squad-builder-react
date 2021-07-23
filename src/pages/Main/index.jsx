import { React } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

export const Main = () => {
  const user = localStorage.getItem('user');

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
      </div>
    </div>
  );
};
