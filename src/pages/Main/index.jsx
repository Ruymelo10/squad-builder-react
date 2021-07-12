import { React } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

export const Main = () => {
  return (
    <div className="Main">
      <h1>Bem vindo</h1>
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
