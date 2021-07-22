import { React } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { useSelector } from 'react-redux';
import { getUser } from '../../reducers/userReducer';

export const Main = () => {
  const { name } = useSelector(getUser);

  return (
    <div className="Main">
      <h1>Bem vindo {name}</h1>
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
