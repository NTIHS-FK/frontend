import React, {ChangeEvent, useState} from 'react';
import TextField from '@mui/material/TextField';
import {SignUpType} from './type';
import './signUp.sass';

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
    </div>
  );
};

export default SignUp;
