import React from 'react';
import { Link } from 'react-router-dom';
import { InputForm } from '../../components/InputForm';
import { Button } from '../../components/Button';
import { useForm } from '../../components/Form/useForm';
export const LogIn = () => {
  const {handleSubmit} = useForm();
  return (
    <div className="LogIn">
      <form>
      <div className="Form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="login-form-input">
          <InputForm labelName="Usuario" htmlFor="username" type="text"
            name="username" placeholder="Nome"/>
          <InputForm labelName="Email" htmlFor="email" type="email"
            name="email" placeholder="Email"/>
          <InputForm labelName="Senha" htmlFor="password" type="password"
            name="password" placeholder=""/>
          <InputForm labelName="Confirmar Senha" htmlFor="password" type="password"
            name="password2" placeholder=""/>
        </div>
        <Button className="form-input-btn" type="submit">Cadastre-se</Button>
      </div>
    </form>
      <Link to="/signup">Não tem conta? Registre-se aqui</Link>
    </div>
  );
};
