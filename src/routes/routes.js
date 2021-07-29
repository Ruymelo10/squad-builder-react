import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Page404 } from '../components/Page404';
import { Duels } from '../pages/Duels';
import App from '../pages/Home/App';
import { LogIn } from '../pages/LogIn';
import { Main } from '../pages/Main';
import { SignUp } from '../pages/SignUp';
import { SquadBuilder } from '../pages/SquadBuilder';
import { InsertPlayer } from '../pages/InsertPlayer/';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/insert-player" component={InsertPlayer} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/squad-builder" component={SquadBuilder} />
        <Route exact path="/duels" component={Duels} />
        <Route exact path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};
