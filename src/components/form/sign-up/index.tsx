import React from 'react';
import TextField from '@mui/material/TextField';
import './signUp.sass';

const SignUp = () => {
  return (
    <div id="sign-up">
      <h2>註冊</h2>
      <TextField
        label="Name"
        variant="standard"
        sx={{width: '300px'}}
      />
      <TextField
        label="Email"
        variant="standard"
        sx={{width: '300px'}}
      />
      <TextField
        label="Password"
        variant="standard"
        sx={{width: '300px'}}
      />
    </div>
  );
};

export default SignUp;
