import React, {useState, useEffect} from 'react';
import Logger from 'js-logger';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/home';
import Menu from './components/menu';
import Review from './components/review';
import Submit from './components/submit';
import {Token} from './context/token';
import {api, ErrorData, APIData} from './api/api';

const App = () => {
  Logger.useDefaults();
  const [token, setToken] = useState('');

  useEffect(() => {
    (async () => {
      const response = await api.post<ErrorData>('/login');

      if (!response.data.error) {
        setToken((response.data as APIData<string>).data);
      }
    })();
  }, []);

  return (
    <Router>
      <Token.Provider value={token}>
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
      </Token.Provider>
    </Router>
  );
};

export default App;
