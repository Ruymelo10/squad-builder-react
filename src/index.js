import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import { Page404 } from './components/Page404';
import './index.css';
import App from './templates/Home/App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <Navbar />
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="*" component={Page404}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

