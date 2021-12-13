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
import Page404 from './components/page404';
import Form from './components/form';
import Posts from './components/posts';
import {Token} from './context/token';
import {api, API} from './api/api';

const App = () => {
  Logger.useDefaults();
  const [token, setToken] = useState('');

  useEffect(() => {
    (async () => {
      const response = await api.post<API>('/login');

      if (!response.data.error) {
        setToken((response.data as API<string>).data);
      }
    })();
  }, []);

  return (
    <Router>
      <Token.Provider value={token}>
        <Switch>
          <Route exact path="/login">
            <Form />
          </Route>
          <Route exact path="/sign-up">
            <Form />
          </Route>
          <Route path="/">
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
              <Route exact path="/posts">
                <Posts />
              </Route>
              <Route exact path="*" >
                <Page404 />
              </Route>
            </Switch>
          </Route>
        </Switch>
      </Token.Provider>
    </Router>
  );
};

export default App;
