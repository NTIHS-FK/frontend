import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/home/home';
import Menu from './components/menu/menu';
import Submit from './components/submit/submit';

const App = () => {
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
      </Switch>
    </Router>
  );
};

export default App;
