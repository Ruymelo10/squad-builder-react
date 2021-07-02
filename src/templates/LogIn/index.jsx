import React from 'react';
import { Link } from 'react-router-dom';

export const LogIn = () => {
  return (
    <div className="LogIn">
      <Link to="/signup">Não tem conta? Registre-se aqui</Link>
    </div>
  );
};
