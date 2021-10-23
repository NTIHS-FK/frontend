import React from 'react';
import Particles from 'react-tsparticles';
import {Switch, Route} from 'react-router-dom';
import Login from './login';
import SignUp from './sign-up';
import './form.sass';

const Form = () => {
  return (
    <div id="form">
      <div id="form-header">
        <h1 id="home-link">
          <a href="/">
            靠北南工+
          </a>
        </h1>
      </div>
      <div id="form-div">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </div>
      <div id="form-footer"></div>
      <Particles id="tsparticles" url="particles.json"/>
    </div>
  );
};

export default Form;
