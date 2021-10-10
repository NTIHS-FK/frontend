import Logger from 'js-logger';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/home';
import Menu from './components/menu';
import Review from './components/review';
import Submit from './components/submit';

const App = () => {
  Logger.useDefaults();
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/submit">
          <Submit />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
