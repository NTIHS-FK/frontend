import React, {useState, ChangeEvent} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {api} from '../../api/api';
import {InputError, UserFormData} from './type';
import './login.sass';

const Login = () => {
  const [inputError, setInputError] =
      useState<InputError>({name: false, password: false, email: false});
  const [formData, setFormData] =
      useState<UserFormData>({usernameOrEmail: '', password: ''});

  const loginAPI = () => {
    (async () => {
      const response = await api.post('/api/login');
    })();
  };

  const changeValue = (value: string) => {
    return (event: ChangeEvent) => {
      const inputTag = event.target as HTMLInputElement;
      setFormData({
        usernameOrEmail: value === 'usernameOrEmail' ?
            inputTag.value : formData.usernameOrEmail,
        password: value === 'password' ? inputTag.value : formData.password,
      });
    };
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
            sx={{width: '300px'}}
            onChange={changeValue('usernameOrEmail')}
          />
          <TextField
            label="Password"
            variant="standard"
            sx={{width: '300px'}}
            inputProps={{type: 'password'}}
            onChange={changeValue('password')}
          />
          <Button
            variant="contained"
            color="success"
            onClick={loginAPI}
          >
            登入
          </Button>
        </div>
      </div>
      <div id="login-footer"></div>
    </div>
  );
};

export default Login;
