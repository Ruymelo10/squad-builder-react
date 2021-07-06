import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { InputForm } from '../../components/InputForm';
import { Button } from '../../components/Button';
import { useForm } from '../../components/Form/useForm';
import validate from '../../components/Form/validateSignUp';

export const SignUp = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);
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
          <Button className="form-input-btn" type="submit">
            Cadastre-se
          </Button>
        </div>
      </form>
      <Link to="login" style={{ textAlign: 'center', margin: '2vh 0', color: 'inherit' }}>
        Já é usuário? Faça o login
      </Link>
    </div>
  );
};
