import React, {useState, ChangeEvent} from 'react';
import {Link} from 'react-router-dom';
import Logger from 'js-logger';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Twitter, GitHub} from '@material-ui/icons';
import LoginButton from './loginButton';
import {AxiosError} from 'axios';
import {api, API} from '../../../api/api';
import {UserFormData, Token, LoginFormData, InputError} from './type';
import Google from './svgs/Google__G__Logo.svg';
import Discord from './svgs/Discord-Logo-White.svg';
import './login.sass';

const Login = () => {
  const [formData, setFormData] =
      useState<UserFormData>({usernameOrEmail: '', password: ''});
  const [inputError, setInputError] =
      useState<InputError>({name: false, password: false, email: false});

  const loginAPI = () => {
    (async () => {
      try {
        // call login api
        await api.post<LoginFormData>(
            'login/api/login',
            {
              nameOrEmail: formData.usernameOrEmail,
              password: formData.password,
            },
        );
      } catch (error) {
        let password = false;
        let email = false;
        const errorMessage =
            (error as AxiosError<API<Token>>).response?.data.message;

        Logger.error(errorMessage, error);

        if (errorMessage === 'password error') {
          password = true;
        } else email = true;

        setInputError({
          name: email,
          email: email,
          password: password,
        });
      }
    })();
  };
  // value change
  const changeValue = (value: string) => {
    return (event: ChangeEvent) => {
      const inputTag = event.target as HTMLInputElement;
      let passwordError = inputError.password;
      let emailError = inputError.email;

      if (value === 'password') passwordError = false;
      else emailError = false;

      setInputError({
        email: emailError,
        password: passwordError,
        name: false,
      });
      setFormData({
        usernameOrEmail: value === 'usernameOrEmail' ?
            inputTag.value : formData.usernameOrEmail,
        password: value === 'password' ? inputTag.value : formData.password,
      });
    };
  };

  return (
    <div id="login-form">
      <h3>??????</h3>
      <TextField
        label="Name or Email"
        variant="standard"
        sx={{width: '300px'}}
        onChange={changeValue('usernameOrEmail')}
        error={inputError?.email}
      />
      <TextField
        label="Password"
        variant="standard"
        sx={{width: '300px'}}
        inputProps={{type: 'password'}}
        onChange={changeValue('password')}
        error={inputError?.password}
      />
      <Button
        variant="contained"
        color="success"
        onClick={loginAPI}
      >
        ??????
      </Button>
      <div style={{textAlign: 'center', margin: '0'}}>
        <Link to="/sign-up">
          ??????
        </Link>
      </div>
      <div id="other-login-button">
        <LoginButton
          icon={<GitHub />}
          title="GitHub??????"
          backgroundColor="rgb(0, 0, 0)"
          color="#ffff"
          url="/auth/github"
        />
        <LoginButton
          icon={<Twitter />}
          title="Twitter??????"
          backgroundColor="#2795e9"
          color="#ffff"
          url="/auth/twitter"
        />
        <LoginButton
          icon={Discord}
          title="Discord??????"
          backgroundColor=""
          color="#ffff"
          url="/auth/discord"
        />
        <LoginButton
          icon={Google}
          title="Google??????"
          backgroundColor="#fff"
          color="#757575"
          url="/auth/google"
        />
      </div>
    </div>
  );
};

export default Login;
