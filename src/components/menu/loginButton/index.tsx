import React, {useContext, useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import {Token} from '../../../context/token';
import {Avatar} from '@mui/material';
import {UserInfo} from './type';
import {APIData, authAPI} from '../../../api/api';

const Login = () => {
  const token = useContext(Token);
  const [userInfo, setUserInfo] = useState<UserInfo>();

  useEffect(() => {
    (async () => {
      const response = await authAPI<APIData<UserInfo>>(token, 'get', '/user');
      setUserInfo(response.data.data);
    })();
  }, [token]);

  return token ? (
      <Avatar alt={userInfo?.username} src={userInfo?.avatar}>
        {userInfo?.username}
      </Avatar>
    ) : (
      <Button
        href="#text-buttons"
        variant="contained"
      >
        登入
      </Button>
    );
};

export default Login;

