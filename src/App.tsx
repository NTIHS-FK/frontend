import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/home/home';
import Menu from './components/menu/menu';

const App = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
