import React, {useContext} from 'react';
import Button from '@mui/material/Button';
import {Token} from '../../../context/token';

const Login = () => {
  const token = useContext(Token);

  return (
    <Button
      href="#text-buttons"
      variant="contained"
    >
      {token ? '登出' : '登入'}
    </Button>
  );
};

export default Login;

