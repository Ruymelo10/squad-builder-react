import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Page404 } from '../components/Page404';
import App from '../templates/Home/App';
import { LogIn } from '../templates/LogIn';
import { SignUp } from '../templates/SignUp';

export const Routes = ()=>{
  return(
    <BrowserRouter>
     <Navbar />
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/login" component={LogIn}/>
        <Route exact path="/signup" component={SignUp}/>\
        <Route exact path="*" component={Page404}/>
      </Switch>
    </BrowserRouter>
  );
}
