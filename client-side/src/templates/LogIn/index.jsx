import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { InputForm } from '../../components/InputForm';
import { useForm } from '../../components/Form/useForm';
import validate from '../../components/Form/validateLogIn';
import { Button } from '../../components/Button';

export const LogIn = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);
  return (
    <div className="LogIn">
      <Link to="/">
        <i className="fas fa-chevron-left"></i>
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="Form">
          <h2>Log in</h2>
          <div className="login-form-input">
            <InputForm
              labelName="Usuario"
              htmlFor="username"
              type="text"
              name="username"
              placeholder="Nome"
              onChange={handleChange}
              values={values.username}
            />
            {errors.username && <p>{errors.username}</p>}
            <InputForm
              labelName="Senha"
              htmlFor="password"
              type="password"
              name="password"
              placeholder=""
              onChange={handleChange}
              valvalues={values.password}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <Button className="form-input-btn" type="submit">
            Entrar
          </Button>
        </div>
      </form>
      <Link to="/signup" style={{ textAlign: 'center', margin: '2vh 0', color: 'inherit' }}>
        Não tem conta? Registre-se aqui
      </Link>
    </div>
  );
};
