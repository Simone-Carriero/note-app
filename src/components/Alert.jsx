import { Typography } from '@mui/material';
import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  });
  return (
    <Typography
      paragraph={true}
      className={`alert alert-${type}`}>
      {msg}
    </Typography>
  );
};

export default Alert;
