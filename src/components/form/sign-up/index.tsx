import React, {ChangeEvent, useState} from 'react';
import {AxiosError} from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import {api, API} from '../../../api/api';
import {SignUpType} from './type';
import './signUp.sass';
import Logger from 'js-logger';

const SignUp = () => {
  const [formData, setFormData] = useState<SignUpType>({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const changeValue = (key: string) => {
    return (event: ChangeEvent) => {
      const value = (event.target as HTMLInputElement).value;

      setFormData({
        name: key === 'name' ? value : formData.name,
        email: key === 'email' ? value : formData.email,
        password: key === 'password' ? value : formData.password,
        confirm: key === 'confirm' ? value : formData.confirm,
      });
    };
  };

  const signUpAPI = () => {
    const name = formData.name;
    const email = formData.email;
    const password = formData.password;

    (async () => {
      try {
        await api.post<{}, API>('/sign-up', {
          email: email,
          name: name,
          password: password,
        });
      } catch (error) {
        const errroMessage =
            (error as AxiosError<API>).response?.data.message;
        Logger.error(errroMessage);
      }
    })();
  };

  return (
    <div id="sign-up">
      <h2>註冊</h2>
      <TextField
        label="Name"
        variant="standard"
        sx={{width: '300px'}}
        onChange={changeValue('name')}
      />
      <TextField
        label="Email"
        variant="standard"
        sx={{width: '300px'}}
        onChange={changeValue('email')}
      />
      <TextField
        label="Password"
        variant="standard"
        sx={{width: '300px'}}
        inputProps={{type: 'password'}}
        onChange={changeValue('password')}
      />
      <TextField
        label="Confirm"
        variant="standard"
        sx={{width: '300px'}}
        inputProps={{type: 'password'}}
        onChange={changeValue('confirm')}
        error={formData.password !== formData.confirm}
      />
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          if (formData.password === formData.confirm) {
            signUpAPI();
          }
        }}
      >
        註冊
      </Button>
    </div>
  );
};

export default SignUp;
