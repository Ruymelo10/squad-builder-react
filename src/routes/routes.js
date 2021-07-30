import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Page404 } from '../components/Page404';
import { Duels } from '../pages/Duels';
import App from '../pages/Home/App';
import { LogIn } from '../pages/LogIn';
import { Main } from '../pages/Main';
import { SignUp } from '../pages/SignUp';
import { SquadBuilder } from '../pages/SquadBuilder';
import { InsertPlayer } from '../pages/InsertPlayer/';

function checkAdmin() {
  const role = localStorage.getItem('role');
  return role === 'admin' ? true : false;
}

function checkLoggedIn() {
  const user = localStorage.getItem('user');
  return user !== null ? true : false;
}

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        checkLoggedIn() ? <Component {...rest} /> : <Redirect to={{ pathname: '/login' }} />
      }
    />
  );
};

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        checkLoggedIn() ? (
          checkAdmin() ? (
            <Component {...rest} />
          ) : (
            <Redirect to={{ pathname: '*' }} />
          )
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};

export const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <AdminRoute exact path="/insert-player" component={InsertPlayer} />
        <PrivateRoute exact path="/main" component={Main} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/squad-builder" component={SquadBuilder} />
        <PrivateRoute exact path="/duels" component={Duels} />
        <Route exact path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};
