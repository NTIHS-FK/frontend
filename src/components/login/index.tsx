import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {api} from '../../api/api';
import {InputError} from './type';
import './login.sass';

const Login = () => {
  const [inputError, setInputError] =
      useState<InputError>({nameOrEmail: false, password: false});
  const loginAPI = () => {
    (async () => {
      const response = await api.post('/api/login');
    })();
  };

  return (
    <div id="login">
      <div id="login-header"></div>
      <div id="login-form-div">
        <div id="login-form">
          <h3>登入</h3>
          <TextField
            label="Name or Email"
            variant="standard"
            error={inputError.nameOrEmail}
          />
          <TextField
            label="Password"
            variant="standard"
            error={inputError.password}
          />
        </div>
      </div>
      <div id="login-footer"></div>
    </div>
  );
};

export default Login;
