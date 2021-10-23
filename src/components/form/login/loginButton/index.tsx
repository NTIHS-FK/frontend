import React from 'react';
import Button from '@mui/material/Button';
import {LoginButtonProps} from './type';

const LoginButton = (
    {
      icon,
      title,
      backgroundColor,
      color,
      url,
    }: LoginButtonProps,
) => {
  const iconJSX =
      typeof(icon) === 'string' ? (
        <img
          src={icon as string}
          className={
            `MuiSvgIcon-root
              MuiSvgIcon-fontSizeMedium
              css-i4bv87-MuiSvgIcon-root`
          }
        />
      ) : icon;
  return (
    <Button
      startIcon={iconJSX}
      variant="contained"
      sx={{
        'color': color,
        'backgroundColor': backgroundColor,
        ':hover': {
          'backgroundColor': backgroundColor,
        },
      }}
      href={url}
    >
      {title}
    </Button>
  );
};

export default LoginButton;
