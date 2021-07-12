import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './styles.scss';
import { InputForm } from '../../components/InputForm';
import { useForm } from '../../components/Form/useForm';
import validate from '../../components/Form/validateLogIn';
import { Button } from '../../components/Button';

export const LogIn = () => {
  const formType = 'login';
  const { handleChange, handleSubmit, values, errors, status } = useForm(validate, formType);
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
              onChange={({ target }) => {
                handleChange({
                  target: {
                    name: target.name,
                    value: target.value.replace(/\s/g, ''),
                  },
                });
              }}
              value={values.username}
            />
            {errors.username && <p>{errors.username}</p>}
            {errors.userNotFound && <p>{errors.userNotFound}</p>}
            <InputForm
              labelName="Senha"
              htmlFor="password"
              type="password"
              name="password"
              placeholder=""
              onChange={handleChange}
              value={values.password}
              onKeyPress={(e) => {
                e.key === ' ' && e.preventDefault();
              }}
            />
            {errors.password && <p>{errors.password}</p>}
            {errors.incorrectPassword && <p>{errors.incorrectPassword}</p>}
          </div>
          {status === 'loading' ? (
            <button>
              <i className="fas fa-spinner fa-spin"></i>
            </button>
          ) : status === 'login-success' ? (
            <Redirect to="/main" />
          ) : (
            <Button className="form-input-btn" type="submit">
              Entrar
            </Button>
          )}
        </div>
      </form>
      <Link to="/signup" style={{ textAlign: 'center', margin: '2vh 0', color: 'inherit' }}>
        Não tem conta? Registre-se aqui
      </Link>
    </div>
  );
};
