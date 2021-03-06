import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './styles.scss';
import { InputForm } from '../../components/InputForm';
import { Button } from '../../components/Button';
import validate from '../../components/Form/validateSignUp';
import { WithForm } from '../../components/Form/withForm';
import P from 'prop-types';

const SignUpUnwrapped = (props) => {
  const { handleChange, handleSubmit, values, errors, status } = props;

  return (
    <div className="SignUp">
      <Link to="/">
        <i className="fas fa-chevron-left"></i>
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="Form">
          <h2>Sign Up</h2>
          <div className="signup-form-input">
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
            {errors.usernameFound && <p>{errors.usernameFound}</p>}
            <InputForm
              labelName="Email"
              htmlFor="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              values={values.email}
            />
            {errors.email && <p>{errors.email}</p>}
            {errors.emailFound && <p>{errors.emailFound}</p>}
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
            <InputForm
              labelName="Confirmar Senha"
              htmlFor="password"
              type="password"
              name="password2"
              placeholder=""
              onChange={handleChange}
              values={values.password2}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          {status === 'loading' ? (
            <button>
              <i className="fas fa-spinner fa-spin"></i>
            </button>
          ) : status === 'signup-success' ? (
            <Redirect to="/login" />
          ) : (
            <Button className="form-input-btn" type="submit">
              Cadastre-se
            </Button>
          )}
        </div>
      </form>
      <Link to="login" style={{ textAlign: 'center', margin: '2vh 0', color: 'inherit' }}>
        J?? ?? usu??rio? Fa??a o login
      </Link>
    </div>
  );
};

export const SignUp = WithForm(SignUpUnwrapped, validate, 'signup');

SignUpUnwrapped.propTypes = {
  handleChange: P.func,
  handleSubmit: P.func,
  values: P.string,
  errors: P.object,
  status: P.string,
};
